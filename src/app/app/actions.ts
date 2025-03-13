"use server"

import { getServerAuthSession } from "~/server/auth";
import {StreamClient} from "@stream-io/node-sdk";

export async function getToken() {
    const streamApiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;
    const streamAPiSecret = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_SECRET;

    if (!streamAPiSecret || !streamApiKey) {
        throw new Error("Stream video api key or secret not found")
    }

    const session = await getServerAuthSession();
    const user = session?.user;
    if (!user) {
        throw new Error("User not found")
    }

    const streamClient = new StreamClient(streamApiKey, streamAPiSecret);

    const expirationTime = Math.floor(Date.now() / 1000) + 3600;

    const issuedAt = Math.floor(Date.now() / 1000) - 60;

    const token  = streamClient.createToken(user.id, expirationTime, issuedAt);

    return token;
}