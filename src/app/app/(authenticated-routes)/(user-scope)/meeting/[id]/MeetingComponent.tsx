"use client"

import { Call, CallControls, SpeakerLayout, StreamCall, StreamTheme, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { Loader } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"

interface MeetingPageProps {
    id: string
}

export default function MeetingPageComponent({ id }: MeetingPageProps) {
    const [call, setCall] = useState<Call | undefined>()

    useEffect(() => {
        console.log("Call", call)
    }, [call])

    const client = useStreamVideoClient()

    if (!client) {
        console.log("Client not found")
        return <Loader className="mx-auto animate-spin" />
    }

    if (!call) {
        return (
            <Button onClick={async () => {
                const call = client.call("private-meeting", id)
                await call.join()
                setCall(call)
            }}>
                Join Meeting
            </Button>
        )
    }

    return (
        <StreamCall call={call}>
            <StreamTheme className="space-y-3">
                <SpeakerLayout />
                <CallControls />
            </StreamTheme>
        </StreamCall>
    )
    
}