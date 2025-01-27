import { Description } from '@radix-ui/react-dialog';
import type { Call } from '@stream-io/video-react-sdk';
import { useAtom } from 'jotai';
import { Loader } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { modalProgressAtom } from '~/atoms/mentor.atom';
import { api } from '~/trpc/react';
import { Button } from '../ui/button';
import Modal from '../ui/modal';
import { MentorBioCard, MentorProfileCard } from './mentor-card';
import BookingForm from './session-booking-form';

export default async function MentorSelection() {
  const { data: session, status } = useSession();
  const _pay = api.daraja.stkPush.useMutation();
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);
  const [step, setStep] = useAtom(modalProgressAtom);
  const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
    limit: 3,
    offset: 0,
  });

  const handleFormSubmit = async (_FormData: any) => {
    setIsPending(true);

    setTimeout(() => {}, 5000);

    setIsPending(false);
    setStep('final');
  };

  return (
    <div className="">
      {isLoading && <Loader className="h-8 w-8 animate-spin rounded-full" />}
      {step === 'init' && (
        <div className="grid grid-cols-3 gap-2 p-8">
          {data?.map((mentor, _index) => (
            <MentorProfileCard
              mentor={mentor}
              selectMentor={setSelectedMentor}
              setStep={setStep}
            />
          ))}
        </div>
      )}
      {selectedMentor && step === 'view-profile' && (
        <MentorBioCard mentor={selectedMentor} setStep={setStep} />
      )}
      {selectedMentor && step === 'book-session' && !isPending && (
        <BookingForm onSubmit={handleFormSubmit} />
      )}
      {selectedMentor && step === 'final' && (
        <div>
          <div className="flex h-full items-center justify-center p-12 align-middle">
            {/* <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-primary"></div> */}
            <p className="font-bold text-primary">
              Session with {selectedMentor.name} Booked Successfully 🎉
            </p>
          </div>
        </div>
      )}
      <div className="mt-8 space-x-6 p-3 px-8 text-right">
        {step !== 'init' && (
          <Button className="inline-flex items-center justify-center rounded bg-secondary px-4 py-2 font-medium text-sm text-white hover:bg-purple-600 group-disabled:pointer-events-none">
            <span className="group-disabled:opacity-0">Back to Mentors</span>
          </Button>
        )}
        <Modal.Close className="rounded px-4 py-2 font-medium text-gray-500 text-sm hover:text-gray-600">
          Cancel
        </Modal.Close>
      </div>
    </div>
  );
}

interface MeetingLinkProps {
  call: Call;
}

function MeetingLink({ call }: MeetingLinkProps) {
  const meetinLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${call.id}`;
  return (
    <div>
      <Description>
        <a href={meetinLink}>Join Meeting</a>
      </Description>
    </div>
  );
}
