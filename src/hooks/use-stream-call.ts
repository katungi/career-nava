import { useCall } from '@stream-io/video-react-sdk';

export default function useStreamCall() {
  const call = useCall();

  if (!call) {
    throw new Error('Call not found');
  }

  return call;
}
