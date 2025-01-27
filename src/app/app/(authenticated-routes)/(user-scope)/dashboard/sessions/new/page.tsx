'use client';

import { useAtom } from 'jotai';
import { Loader } from 'lucide-react';
import { mentorAtom, modalProgressAtom } from '~/atoms/mentor.atom';
import { MentorProfileCard } from '~/components/sections/mentor-card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';
import { api } from '~/trpc/react';

export default function BookSessionPage() {
  const [_selectedMentor, setSelectedMentor] = useAtom(mentorAtom);
  const [_step, setStep] = useAtom(modalProgressAtom);
  const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
    limit: 3,
    offset: 0,
  });
  return (
    <div className="px-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>New Session</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <p className=" p-4 font-bold text-4xl">
          Choose a Mentor to get started
        </p>
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {isLoading && (
            <Loader className="h-8 w-8 animate-spin rounded-full" />
          )}
          {data?.map((mentor, index) => (
            <MentorProfileCard
              setStep={setStep}
              selectMentor={setSelectedMentor}
              mentor={mentor}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
