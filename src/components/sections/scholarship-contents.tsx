'use client';
import { api } from '~/trpc/react';
import ScholarshipSlider from './scholarship-slider';
import ScholarshipsTabComponent from './scholarship-tab-component';

const ScholarshipContents = () => {
  const { data: scholarships } =
    api.scholarshipSessions.getAllScholarships.useQuery({
      limit: 1000,
      offset: 0,
    });

  return (
    <>
      <ScholarshipsTabComponent />
      <div className="mt-4">
        <ScholarshipSlider scholarships={scholarships} />
      </div>
    </>
  );
};

export default ScholarshipContents;
