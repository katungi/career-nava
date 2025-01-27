'use client';

import { useState } from 'react';
import { api } from '~/trpc/react';
import MenteeSlider from './MenteeSlider';
import MenteeTabComponent from './MenteeTabs';

const MenteeContent = () => {
  const [searchText, _setSearchText] = useState('');
  const { data: sessions } = api.mentorshipSessions.getMentees.useQuery({
    limit: 100,
    offset: 0,
  });
  const _filteredScholarships = sessions?.filter((session: any) =>
    session.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <MenteeTabComponent />
      <div className="mt-4">
        {/* //@ts-ignore */}
        <MenteeSlider mentees={sessions ?? []} />
      </div>
    </>
  );
};

export default MenteeContent;
