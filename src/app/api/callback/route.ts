/* eslint-disable */ /* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextResponse } from "next/server";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export async function POST(req: Request) {
  try {
    const sess = await getServerAuthSession()
    const body = await req.json();

    const resultCode = body.Body.stkCallback.ResultCode;
    if (resultCode !== 0) {
      console.log(body);
      return new NextResponse("Request cancelled by the user", {
        status: 200,
      });
    }
    console.log(body);

    //save the data to a db or persist it to local storage
    const getAmount = body.Item.find((obj: any) => obj.Name === "Amount");
    const amount = getAmount.Value;

    const getCode = body.Item.find(
      (obj: any) => obj.Name === "MpesaReceiptNumber",
    );
    const mpesaCode = getCode.Value;

    const getPhoneNumber = body.Item.find(
      (obj: any) => obj.Name === "PhoneNumber",
    );
    const phone = getPhoneNumber.Value;
    console.log(amount, mpesaCode, phone);
    // create a transaction record in the db

    // const transactionSaved = await db.mpesaTransaction.create({
    //   data: {
    //     amount: amount,
    //     mpesaCode: mpesaCode,
    //     phone: phone
    //   }
    // })
  
    return new NextResponse("success", {
      status: 200,
    });
  } catch (error) {
    throw new Error(error as string);
  }
}
