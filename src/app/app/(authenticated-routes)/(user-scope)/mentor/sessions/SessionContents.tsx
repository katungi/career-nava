'use client';
import SessionSlider from '~/components/patterns/session-slider';
import SessionTabComponent from '~/components/sections/session-tab-component';
import { api } from '~/trpc/react';

const MentorshipSessionContents = () => {
  const { data: sessions } =
    api.mentorshipSessions.getMentorBookingSession.useQuery({
      limit: 100,
      offset: 0,
    });
  return (
    <>
      <SessionTabComponent />
      <div className="mt-4">
        <SessionSlider sessions={sessions} />
      </div>
    </>
  );
};

export default MentorshipSessionContents;
