"use client"

import { StreamVideo, StreamVideoClient, User } from "@stream-io/video-react-sdk"
import { Loader } from "lucide-react"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { getToken } from "~/app/app/actions"

interface clientProviderProps {
    children: React.ReactNode
}

export default function ClientProvider({ children }: clientProviderProps) {

    const videoClient = useInitializeVideoClient();

    if (!videoClient) {
        console.log("Client not initialized")
        return
    }

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    )
}

function useInitializeVideoClient() {
    const { data: session, status } = useSession()
    const userLoaded = status === "authenticated" && session?.user
    const user = session?.user
    const [videClient, setVideoClient] = useState<StreamVideoClient | null>(null)

    useEffect(() => {
        if (!userLoaded) return
        let streamUser: User;
        if (user?.id) {
            streamUser = {
                id: user.id,
                name: user.name || user.id,
                image: user.image || ""
            }
        } else {
            const id = nanoid()
            streamUser = {
                id,
                type: 'guest'
            }
        }
        const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY

        if (!apiKey) {
            throw new Error("Stream api key not found")
        }

        const client = new StreamVideoClient({
            apiKey: process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY!,
            user: streamUser,
            tokenProvider: user?.id ? getToken : undefined
        });

        console.log(".......................Client initialized.....................")
        console.log(client)
        console.log(".......................Client initialized End.....................")
        setVideoClient(client);

        return () => {
            client.disconnectUser()
            setVideoClient(null)
        }
    }, [user?.id, user?.name, user?.image, userLoaded])

    return videClient
}