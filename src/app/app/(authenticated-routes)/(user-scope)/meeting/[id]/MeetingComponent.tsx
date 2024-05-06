"use client"

import { Call, CallControls, SpeakerLayout, StreamCall, StreamTheme, useCallStateHooks, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { Loader } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import useLoadCall from "~/hooks/use-load-call"
import useStreamCall from "~/hooks/use-stream-call"

interface MeetingPageProps {
    id: string
}

export default function MeetingPageComponent({ id }: MeetingPageProps) {
    // const [call, setCall] = useState<Call | undefined>()
    const { call, callLoading } = useLoadCall(id)

    if (callLoading) {
        console.log("Client not found")
        return <Loader className="mx-auto animate-spin" />
    }

    if (!call) {
        return (
            <p>This call does not exist</p>
        )
    }

    return (
        <StreamCall call={call}>
            <StreamTheme className="space-y-3">
                <MeetingScreen />
            </StreamTheme>
        </StreamCall>
    )
}
function MeetingScreen() {
    const { useCallEndedAt, useCallStartedAt } = useCallStateHooks()

    const callEndedAt = useCallEndedAt()
    const callStartAt = useCallStartedAt()

    const callIsInFuture = callStartAt && new Date(callStartAt) > new Date();

    const callHasEnded = !!callEndedAt;

    if (callEndedAt) {
        return <MeetingEndedScreen />
    }

    if (callIsInFuture) {
        return <UpcomingMeetingScreen />
    }

    return <div>Call UI</div>
}

function UpcomingMeetingScreen() {

    const call = useStreamCall()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-2xl">Meeting starts soon - {" "}
                <span className="text-2xl">{call?.state?.startsAt?.toLocaleString()}</span>
            </p>
            {call?.state?.custom.description && (<p className="text-2xl">Description:{" "}
                <span className="text-2xl">{call?.state?.custom.description}</span>
            </p>)}

            <Link href='/app/dashboard'>
                <Button>Back to dashboard</Button>
            </Link>
        </div>
    )
}

function MeetingEndedScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <p className="text-2xl font-bold">Oops, Meeting has ended</p>
        </div>
    )
}