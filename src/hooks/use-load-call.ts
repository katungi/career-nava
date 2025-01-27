import { type Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function useLoadCall(id: string) {
  const sess = useSession();
  const client = useStreamVideoClient();
  client?.connectUser({ id: sess.data?.user.id!, type: 'authenticated' });

  const [call, setCall] = useState<Call>();
  const [callLoading, setCallLoading] = useState(true);

  useEffect(() => {
    async function loadCall() {
      setCallLoading(true);
      if (!client) {
        return;
      }
      const { calls } = await client.queryCalls({
        filter_conditions: { id },
      });
      if (calls.length > 0) {
        const call = calls[0];
        await call?.get();
        setCall(call);
      }
      setCallLoading(false);
    }
    loadCall();
  }, [client, id]);

  return { call, callLoading };
}
