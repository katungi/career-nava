'use client';

import {
  CallingState,
  DeviceSettings,
  StreamCall,
  StreamTheme,
  VideoPreview,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { Loader } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '~/components/ui/button';
import useLoadCall from '~/hooks/use-load-call';
import useStreamCall from '~/hooks/use-stream-call';
import AudioVolumeIndicator from './AudioVolumeIndicator';
import FlexibleCallLayout from './FlexibleCallLayout';
import PermissionPrompt from './PermissionPrompt';

interface MeetingPageProps {
  id: string;
}

export default function MeetingPageComponent({ id }: MeetingPageProps) {
  // const [call, setCall] = useState<Call | undefined>()
  const { call, callLoading } = useLoadCall(id);

  if (callLoading) {
    return <Loader className="mx-auto animate-spin" />;
  }

  if (!call) {
    return <p>This call does not exist</p>;
  }

  return (
    <StreamCall call={call}>
      <StreamTheme className="h-screen">
        <MeetingScreen />
      </StreamTheme>
    </StreamCall>
  );
}
function MeetingScreen() {
  const [setupComplete, setSetupComplete] = useState(false);
  const { useCallEndedAt, useCallStartedAt } = useCallStateHooks();

  const call = useStreamCall();

  const callEndedAt = useCallEndedAt();
  const callStartAt = useCallStartedAt();

  async function handleSetupComplete() {
    call.join();
    setSetupComplete(true);
  }
  const callIsInFuture = callStartAt && new Date(callStartAt) > new Date();

  const _callHasEnded = !!callEndedAt;

  if (callEndedAt) {
    return <MeetingEndedScreen />;
  }

  if (callIsInFuture) {
    return <UpcomingMeetingScreen />;
  }
  const description = call.state.custom.description;

  return (
    <div className="space-y-6">
      {/* <h1 className="text-2xl font-bold">Meeting</h1> */}
      {description && <p className="text-xl">{description}</p>}
      {setupComplete ? (
        <CallUI />
      ) : (
        <SetupUI onSetupComplete={handleSetupComplete} />
      )}
    </div>
  );
}

interface SetupUIProps {
  onSetupComplete: () => void;
}
function SetupUI({ onSetupComplete }: SetupUIProps) {
  const call = useStreamCall();

  const { useMicrophoneState, useCameraState } = useCallStateHooks();

  const micState = useMicrophoneState();
  const camState = useCameraState();

  const [micCamDisabled, setMicCamDisabled] = useState(false);

  useEffect(() => {
    if (micCamDisabled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [micCamDisabled, call]);

  if (!micState.hasBrowserPermission || !camState.hasBrowserPermission) {
    return <PermissionPrompt />;
  }

  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-center bg-primary align-middle"
      //style={{ backgroundImage: `url(${'/images/transparent-bg.png'})`, objectFit: 'cover' }}
    >
      <h1 className="text-center font-bold text-5xl text-white">
        Setup Meeting ✨
      </h1>
      <h1 className="text-center font-bold text-white text-xl">
        Ready to join?
      </h1>
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
      <Button
        onClick={onSetupComplete}
        variant={'secondary'}
        className="text-white"
      >
        Join meeting
      </Button>
    </div>
  );
}

function CallUI() {
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <Loader className="mx-auto animate-spin" />;
  }

  return <FlexibleCallLayout />;
}

function UpcomingMeetingScreen() {
  const call = useStreamCall();
  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <p className="text-2xl">
        Meeting starts soon -{' '}
        <span className="text-2xl">
          {call?.state?.startsAt?.toLocaleString()}
        </span>
      </p>
      {call?.state?.custom.description && (
        <p className="text-2xl">
          Description:{' '}
          <span className="text-2xl">{call?.state?.custom.description}</span>
        </p>
      )}

      <Link href="/app/dashboard">
        <Button>Back to dashboard</Button>
      </Link>
    </div>
  );
}

function MeetingEndedScreen() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <p className="font-bold text-2xl">Oops, Meeting has ended</p>
    </div>
  );
}
