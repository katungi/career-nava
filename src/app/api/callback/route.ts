/* eslint-disable */ /* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextResponse } from "next/server";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export async function POST(req: Request) {
  try {
    console.log("POST request received");
    
    const sess = await getServerAuthSession();
    if (!sess) {
      console.error("No session found");
      return new NextResponse("Unauthorized", { status: 401 });
    }
    
    const body = await req.json();
    // Get the booking session id from the db
    const bookingSession = await db.bookingSession.findFirst({
      where: {
        menteeId: sess.user.id,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    console.log("Booking session:", bookingSession);

    if (!bookingSession) {
      console.error("No booking session found for user:", sess.user.id);
      return new NextResponse("No booking session found", { status: 404 });
    }

    const resultCode = body.Body.stkCallback.ResultCode;
    if (resultCode !== 0) {
      console.log("Transaction cancelled by the user");
      await db.bookingSession.update({
        where: {
          id: bookingSession.id
        },
        data: {
          paymentStatus: "CANCELLED",
          status: "cancelled"
        }
      });
      return new NextResponse("Request cancelled by the user", { status: 200 });
    }

    // Extract and log transaction details
    const getAmount = body.Body.stkCallback.CallbackMetadata.Item.find((obj: any) => obj.Name === "Amount");
    const amount = getAmount ? getAmount.Value : null;
    const getCode = body.Body.stkCallback.CallbackMetadata.Item.find((obj: any) => obj.Name === "MpesaReceiptNumber");
    const mpesaCode = getCode ? getCode.Value : null;
    const getPhoneNumber = body.Body.stkCallback.CallbackMetadata.Item.find((obj: any) => obj.Name === "PhoneNumber");
    const phone = getPhoneNumber ? getPhoneNumber.Value : null;

    console.log("Transaction details:", { amount, mpesaCode, phone });

    if (!amount || !mpesaCode || !phone) {
      console.error("Missing transaction details");
      return new NextResponse("Invalid transaction details", { status: 400 });
    }

    // Create a transaction record in the db
    await db.mpesaTransaction.create({
      data: {
        amount: amount,
        mpesaCode: mpesaCode,
        phone: phone,
        userId: sess.user.id!,
        bookingSessionId: bookingSession.id!,
      }
    });
    console.log("Transaction record created");

    // Update the booking session status
    await db.bookingSession.update({
      where: {
        id: bookingSession.id
      },
      data: {
        paymentStatus: "SUCCESS",
        status: "upcoming"
      }
    });
    console.log("Booking session updated");

    return new NextResponse("success", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
