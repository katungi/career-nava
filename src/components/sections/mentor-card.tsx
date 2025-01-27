import { useRouter } from 'next/navigation';
import type {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const MentorProfileCard = ({ mentor, selectMentor, setStep }: any) => {
  const router = useRouter();
  function selectMentorHandler() {
    toast.success(`You have selected ${mentor.name} as your mentor`);
    selectMentor(mentor);
    setStep('view-profile');
    router.push(`/app/dashboard/sessions/view/${mentor.id}`);
  }

  return (
    <div className="max-w-sm overflow-hidden rounded bg-white shadow-lg">
      <div className="px-6 py-4">
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage alt="Mentee" src={mentor.image} />
            <AvatarFallback>
              {mentor.name
                .split(' ')
                .map((n: any) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="my-2 font-bold text-xl">{mentor.name}</div>
          <div className="mx-8 mt-4 inline-block rounded-2xl bg-purple-100 px-2 py-1 font-semibold text-purple-700 text-xs uppercase">
            Mastercard Scholarship
          </div>
          <div className="mb-2 text-primary text-sm">Google Scholarship</div>
          <button
            className="rounded-2xl bg-secondary px-4 py-2 font-bold text-white hover:bg-yellow-300"
            onClick={selectMentorHandler}
          >
            View {mentor.name} Profile
          </button>
          <div className="mt-3 text-base text-gray-700">Current Mentees: 0</div>
        </div>
      </div>
    </div>
  );
};

export const MentorBioCard = ({ mentor, setStep }: any) => {
  return (
    <div className="mx-auto max-w-7xl rounded-lg bg-white p-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0">
          <img
            className="rounded-lg md:w-56"
            src={mentor?.image}
            alt="Mentor profile"
          />
        </div>
        <div className="flex flex-col justify-between px-8">
          <h3 className="font-bold text-gray-900 text-xl leading-none dark:text-white">
            {mentor?.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {mentor?.Bio || 'No Bio'}
          </p>
        </div>
      </div>
      <div className="px-4 py-8 pt-4 pb-2">
        <span className="text-gray-500 dark:text-gray-300">
          Current Scholars: {mentor?.currentMentees}
        </span>
        {mentor?.scholarshipAffiliations && (
          <div className="mt-1 flex">
            {mentor?.scholarshipAffiliations.map(
              (
                skill:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined,
                index: Key | null | undefined
              ) => (
                <span
                  key={index}
                  className="mr-1 inline-block rounded-full bg-purple-200 px-2.5 py-1 font-semibold text-purple-600 text-xs uppercase last:mr-0"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
