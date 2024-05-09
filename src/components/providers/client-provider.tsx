"use client"

import { StreamVideo, StreamVideoClient, User } from "@stream-io/video-react-sdk"
import { Loader } from "lucide-react"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { getToken } from "~/app/app/actions"
import { useRouter } from "next/navigation"

interface clientProviderProps {
    children: React.ReactNode
}

export default function ClientProvider({ children }: clientProviderProps) {

    const videoClient = useInitializeVideoClient();

    if (!videoClient) {
        return <div className="flex h-screen items-center justify-center">
            <Loader className="mx-auto animate-spin" />
        </div>
    }

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    )
}

function useInitializeVideoClient() {
    const router = useRouter()
    const { data: session, status } = useSession()
    const userLoaded = status === "authenticated" && session?.user
    const user = session?.user
    const [videClient, setVideoClient] = useState<StreamVideoClient | null>(null)

    useEffect(() => {
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