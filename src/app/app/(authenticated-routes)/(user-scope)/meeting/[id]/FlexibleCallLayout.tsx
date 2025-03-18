import {
  CallControls,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
  useCall
} from "@stream-io/video-react-sdk";
import {
  BetweenHorizonalEnd,
  BetweenVerticalEnd,
  LayoutGrid,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EndCallButton from "./EndCallButton";
import useStreamCall from "~/hooks/use-stream-call";

type CallLayout = "speaker-vert" | "speaker-horiz" | "grid";

export default function FlexibleCallLayout() {
  const [layout, setLayout] = useState<CallLayout>("speaker-vert");
  const call = useStreamCall();
  const router = useRouter();

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <CallLayoutView layout={layout} />
      </div>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-2xl font-bold text-white mb-4">Meeting</h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="mx-auto max-w-7xl px-4 py-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between gap-4">
            <CallLayoutButtons layout={layout} setLayout={setLayout} />
            <div className="flex-1">
              <CallControls
                onLeave={() => router.push(`/meeting/${call.id}/left`)}
              />
            </div>
            <EndCallButton />
          </div>
        </div>
      </div>
    </div>
  );
}

interface CallLayoutButtonsProps {
  layout: CallLayout;
  setLayout: (layout: CallLayout) => void;
}

function CallLayoutButtons({ layout, setLayout }: CallLayoutButtonsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setLayout("speaker-vert")}
        className={`p-2 rounded-lg hover:bg-gray-700/50 ${layout === "speaker-vert" ? "bg-gray-700/50" : ""}`}
      >
        <BetweenVerticalEnd
          className={layout !== "speaker-vert" ? "text-gray-400" : "text-white"}
        />
      </button>
      <button
        onClick={() => setLayout("speaker-horiz")}
        className={`p-2 rounded-lg hover:bg-gray-700/50 ${layout === "speaker-horiz" ? "bg-gray-700/50" : ""}`}
      >
        <BetweenHorizonalEnd
          className={layout !== "speaker-horiz" ? "text-gray-400" : "text-white"}
        />
      </button>
      <button
        onClick={() => setLayout("grid")}
        className={`p-2 rounded-lg hover:bg-gray-700/50 ${layout === "grid" ? "bg-gray-700/50" : ""}`}
      >
        <LayoutGrid
          className={layout !== "grid" ? "text-gray-400" : "text-white"}
        />
      </button>
    </div>
  );
}

interface CallLayoutViewProps {
  layout: CallLayout;
}

function CallLayoutView({ layout }: CallLayoutViewProps) {
  return (
    <div className="h-full w-full">
      {layout === "speaker-vert" && <SpeakerLayout />}
      {layout === "speaker-horiz" && <SpeakerLayout participantsBarPosition="right" />}
      {layout === "grid" && <PaginatedGridLayout />}
    </div>
  );
}