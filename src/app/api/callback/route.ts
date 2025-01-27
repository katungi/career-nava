/* eslint-disable */ /* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextResponse } from 'next/server';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

export async function POST(req: Request) {
  try {
    const sess = await getServerAuthSession();
    if (!sess) {
      return new NextResponse('Unauthorized', { status: 401 });
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

    if (!bookingSession) {
      return new NextResponse('No booking session found', { status: 404 });
    }

    const resultCode = body.Body.stkCallback.ResultCode;
    if (resultCode !== 0) {
      await db.bookingSession.update({
        where: {
          id: bookingSession.id,
        },
        data: {
          paymentStatus: 'CANCELLED',
          status: 'cancelled',
        },
      });
      return new NextResponse('Request cancelled by the user', { status: 200 });
    }

    // Extract and log transaction details
    const getAmount = body.Body.stkCallback.CallbackMetadata.Item.find(
      (obj: any) => obj.Name === 'Amount'
    );
    const amount = getAmount ? getAmount.Value : null;
    const getCode = body.Body.stkCallback.CallbackMetadata.Item.find(
      (obj: any) => obj.Name === 'MpesaReceiptNumber'
    );
    const mpesaCode = getCode ? getCode.Value : null;
    const getPhoneNumber = body.Body.stkCallback.CallbackMetadata.Item.find(
      (obj: any) => obj.Name === 'PhoneNumber'
    );
    const phone = getPhoneNumber ? getPhoneNumber.Value : null;

    if (!amount || !mpesaCode || !phone) {
      return new NextResponse('Invalid transaction details', { status: 400 });
    }

    // Create a transaction record in the db
    await db.mpesaTransaction.create({
      data: {
        amount: amount,
        mpesaCode: mpesaCode,
        phone: phone,
        userId: sess.user.id!,
        bookingSessionId: bookingSession.id!,
      },
    });

    // Update the booking session status
    await db.bookingSession.update({
      where: {
        id: bookingSession.id,
      },
      data: {
        paymentStatus: 'SUCCESS',
        status: 'upcoming',
      },
    });

    return new NextResponse('success', { status: 200 });
  } catch (_error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
