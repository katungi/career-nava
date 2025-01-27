import {
  CallControls,
  PaginatedGridLayout,
  SpeakerLayout,
} from '@stream-io/video-react-sdk';
import {
  BetweenHorizonalEnd,
  BetweenVerticalEnd,
  LayoutGrid,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useStreamCall from '~/hooks/use-stream-call';
import EndCallButton from './EndCallButton';

type CallLayout = 'speaker-vert' | 'speaker-horiz' | 'grid';

export default function FlexibleCallLayout() {
  const [layout, setLayout] = useState<CallLayout>('speaker-vert');

  const call = useStreamCall();

  const router = useRouter();

  return (
    <div className="space-y-3">
      <h1 className="font-bold text-2xl text-white">Meeting</h1>

      <div className="-translate-x-1/2 absolute top-4 left-1/2 z-10 transform">
        <CallLayoutButtons layout={layout} setLayout={setLayout} />
      </div>

      <div className="w-full flex-1">
        <CallLayoutView layout={layout} />
      </div>

      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-4">
        <CallControls onLeave={() => router.push(`/meeting/${call.id}/left`)} />
        <EndCallButton />
      </div>

      <EndCallButton />
    </div>
  );
}

interface CallLayoutButtonsProps {
  layout: CallLayout;
  setLayout: (layout: CallLayout) => void;
}

function CallLayoutButtons({ layout, setLayout }: CallLayoutButtonsProps) {
  return (
    <div className="mx-auto w-fit space-x-6">
      <button onClick={() => setLayout('speaker-vert')}>
        <BetweenVerticalEnd
          className={layout !== 'speaker-vert' ? 'text-gray-400' : ''}
        />
      </button>
      <button onClick={() => setLayout('speaker-horiz')}>
        <BetweenHorizonalEnd
          className={layout !== 'speaker-horiz' ? 'text-gray-400' : ''}
        />
      </button>
      <button onClick={() => setLayout('grid')}>
        <LayoutGrid className={layout !== 'grid' ? 'text-gray-400' : ''} />
      </button>
    </div>
  );
}

interface CallLayoutViewProps {
  layout: CallLayout;
}

function CallLayoutView({ layout }: CallLayoutViewProps) {
  if (layout === 'speaker-vert') {
    return (
      <div className="h-full">
        <SpeakerLayout />
      </div>
    );
  }

  if (layout === 'speaker-horiz') {
    return (
      <div className="h-full">
        <SpeakerLayout participantsBarPosition="right" />
      </div>
    );
  }

  if (layout === 'grid') {
    return (
      <div className="h-full">
        <PaginatedGridLayout />
      </div>
    );
  }

  return null;
}
