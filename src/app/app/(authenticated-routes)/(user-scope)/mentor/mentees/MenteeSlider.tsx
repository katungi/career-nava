'use client';
import Empty from '~/components/constants/empty';
import MenteeCard from '~/components/constants/mentee-card';

interface MenteeSliderProps {
  mentees: any[];
}
// @ts-ignore
const MenteeSlider = ({ mentees }: MenteeSliderProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {mentees.length &&
        mentees.map((mentee) => <MenteeCard key={mentee.id} mentee={mentee} />)}
      {mentees.length === 0 ? (
        <div className="mx-96 flex h-[500px] w-[500px] flex-grow">
          <Empty />
        </div>
      ) : null}
    </div>
  );
};

export default MenteeSlider;
