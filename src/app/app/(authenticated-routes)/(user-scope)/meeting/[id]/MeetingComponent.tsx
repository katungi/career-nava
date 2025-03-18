"use client"

import { CallingState, DeviceSettings, StreamCall, StreamTheme, VideoPreview, useCallStateHooks } from "@stream-io/video-react-sdk"
import { Loader } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import useLoadCall from "~/hooks/use-load-call"
import useStreamCall from "~/hooks/use-stream-call"
import PermissionPrompt from "./PermissionPrompt"
import AudioVolumeIndicator from "./AudioVolumeIndicator"
import FlexibleCallLayout from "./FlexibleCallLayout"

interface MeetingPageProps {
    id: string
}

export default function MeetingPageComponent({ id }: MeetingPageProps) {
    const { call, callLoading } = useLoadCall(id)

    if (callLoading) {
        return <div className="flex items-center justify-center h-screen"><Loader className="animate-spin" /></div>
    }

    if (!call) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl">This call does not exist</p>
            </div>
        )
    }

    return (
        <StreamCall call={call}>
            <StreamTheme className="h-screen">
                <MeetingScreen />
            </StreamTheme>
        </StreamCall>
    )
}

function MeetingScreen() {
    const [setupComplete, setSetupComplete] = useState(false)
    const { useCallEndedAt, useCallStartedAt } = useCallStateHooks()

    const call = useStreamCall()

    const callEndedAt = useCallEndedAt()
    const callStartAt = useCallStartedAt()

    async function handleSetupComplete() {
        try {
            await call.join()
            setSetupComplete(true)
        } catch (error) {
            console.error('Failed to join call:', error)
            // Handle error appropriately
        }
    }

    const callIsInFuture = callStartAt && new Date(callStartAt) > new Date()
    const callHasEnded = Boolean(callEndedAt)

    if (callHasEnded) {
        return <MeetingEndedScreen />
    }

    if (callIsInFuture) {
        return <UpcomingMeetingScreen />
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const description = call.state.custom?.description

    return (
        <div className="space-y-6">
            {description && <p className="text-xl">{description}</p>}
            {setupComplete ? <CallUI /> : <SetupUI onSetupComplete={handleSetupComplete} />}
        </div>
    )
}

interface SetupUIProps {
    onSetupComplete: () => void
}

function SetupUI({ onSetupComplete }: SetupUIProps) {
    const call = useStreamCall()
    const { useMicrophoneState, useCameraState } = useCallStateHooks()

    const micState = useMicrophoneState()
    const camState = useCameraState()

    const [micCamDisabled, setMicCamDisabled] = useState(false)

    useEffect(() => {
        async function updateDeviceState() {
            try {
                if (micCamDisabled) {
                    await Promise.all([
                        call.camera.disable(),
                        call.microphone.disable()
                    ])
                } else {
                    await Promise.all([
                        call.camera.enable(),
                        call.microphone.enable()
                    ])
                }
            } catch (error) {
                console.error('Failed to update device state:', error)
                // Handle error appropriately
            }
        }
        updateDeviceState().catch(() => {
            console.log('Failed to update device state')
        })

        return () => {
            // Cleanup device states when component unmounts
            call.camera.disable().catch(() => {
                console.log('Failed to disable camera')
            })
            call.microphone.disable().catch(() => {
                console.log('Failed to disable microphone')
            })
        }
    }, [micCamDisabled, call])

    if (!micState.hasBrowserPermission || !camState.hasBrowserPermission) {
        return <PermissionPrompt />
    }

    return (
        <div className="flex flex-col items-center gap-3 w-screen h-screen bg-center align-middle justify-center bg-primary">
            <h1 className="text-center text-5xl font-bold text-white">Setup Meeting ✨</h1>
            <h1 className="text-center text-xl font-bold text-white">Ready to join?</h1>
            <VideoPreview />
            <div className="flex h-16 items-center gap-3">
                <AudioVolumeIndicator />
                <DeviceSettings />
            </div>
            <label className="flex items-center gap-2 font-medium text-white">
                <input
                    type="checkbox"
                    checked={micCamDisabled}
                    onChange={(e) => setMicCamDisabled(e.target.checked)}
                />
                Join with mic and camera off
            </label>
            <Button onClick={onSetupComplete} variant="secondary" className="text-white">Join meeting</Button>
        </div>
    )
}

function CallUI() {
    const { useCallCallingState } = useCallStateHooks()
    const callingState = useCallCallingState()

    if (callingState !== CallingState.JOINED) {
        return <div className="flex items-center justify-center h-screen"><Loader className="animate-spin" /></div>
    }

    return <FlexibleCallLayout />
}

function UpcomingMeetingScreen() {
    const call = useStreamCall()
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-2xl">Meeting starts soon - {" "}
                <span className="text-2xl">{call?.state?.startsAt?.toLocaleString()}</span>
            </p>
            {call?.state?.custom?.description && (
                <p className="text-2xl">Description:{" "}
                    <span className="text-2xl">{call.state.custom.description}</span>
                </p>
            )}
            <Link href="/app/dashboard">
                <Button>Back to dashboard</Button>
            </Link>
        </div>
    )
}

function MeetingEndedScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <p className="text-2xl font-bold">Oops, Meeting has ended</p>
            <Link href="/app/dashboard">
                <Button>Back to dashboard</Button>
            </Link>
        </div>
    )
}