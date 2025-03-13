
import { useCallStateHooks } from "@stream-io/video-react-sdk";
import useStreamCall from "~/hooks/use-stream-call";
import { useSession } from "next-auth/react";

export default function EndCallButton() {
  const call = useStreamCall();
  const { data: session } = useSession();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMentor = session?.user.role === "MENTOR";

  const participantIsChannelOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (isMentor || !participantIsChannelOwner) { //only the 
    return null;
  }

  return (
    <button
      onClick={call.endCall}
      className="mx-auto block font-medium text-red-500 hover:underline"
    >
      End call for everyone
    </button>
  );
}