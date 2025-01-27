'use client';

import { useRouter } from 'next/navigation';
import CountUp from 'react-countup';
import Footer from '~/components/patterns/footer';
import { MentorProfileCard } from '~/components/sections/mentor-card';
import AboutHeader from './_components/aboutHeader';

export default function AboutPage() {
  const _router = useRouter();

  const mentorArray = [
    {
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      scholarships: ['Mastercard Scholarship', 'Google Scholarship'],
      currentMentees: 0,
    },
    {
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      scholarships: ['Mastercard Scholarship', 'Google Scholarship'],
      currentMentees: 3,
    },
    {
      name: 'Alice Johnson',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      scholarships: ['Mastercard Scholarship', 'Google Scholarship'],
      currentMentees: 5,
    },
  ];

  return (
    <main>
      <section className="relative border-none bg-gradient-to-r from-[#2649e4] via-primary to-[#af63f1] py-20 md:py-32">
        <AboutHeader />
      </section>
      <div className="flex justify-center gap-24 border bg-gray-50 p-8">
        <div className="mx-4 text-center">
          <div className="font-bold text-4xl text-primary">
            <CountUp end={25000} /> +
          </div>
          <div className="text-gray-600">Coaches</div>
        </div>
        <div className="mx-4 text-center">
          <div className="font-bold text-4xl text-primary">
            <CountUp end={100000} /> +
          </div>
          <div className="text-gray-600">Scholarships</div>
        </div>
      </div>
      <section>
        <div className="flex flex-col items-center justify-center p-8">
          <div className="mb-8 text-center">
            <p className="font-bold text-3xl">Our Top Coaches</p>
            <p className="text-md">
              Our coaches are carefully selected to ensure you get the best
              guidance in your career.
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-8">
            {mentorArray.map((mentor, index) => (
              <MentorProfileCard key={index} mentor={mentor} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
