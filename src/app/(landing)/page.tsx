'use client';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '~/components/patterns/footer';
import PricingSection from '~/components/sections/pricing';
import { Button } from '~/components/ui/button';
import FounderShowcase from './founders';
import TestimonialSection from './testimonials';

const Logos = () => {
  return (
    <>
      <li>
        <img
          src="/images/chevening-sc.png"
          alt="Google"
          className="h-44 w-44 p-2 text-primary"
        />
      </li>
      <li>
        <img
          src="/images/mastercard-foundation-sc.png"
          alt="Google"
          className="h-32 p-2 text-primary"
        />
      </li>
      <li>
        <img
          src="/images/mext-scholarship-sc.png"
          alt="Google"
          className="h-32 p-2 text-primary"
        />
      </li>
      <li>
        <img
          src="/images/mwf-stacked-rgb.png"
          alt="Google"
          className="h-32 p-2 text-primary"
        />
      </li>
      <li>
        <img
          src="/images/Yoast-social-logo.png"
          alt="Google"
          className="h-52 w-64 p-2 text-primary"
        />
      </li>
    </>
  );
};

export default async function HomeNew() {
  const router = useRouter();
  return (
    <main className="flex flex-col">
      <section className="relative border-none bg-gradient-to-r from-[#af63f1] to-primary py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative w-full max-w-md">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(175, 99, 241, 0) 70%, rgb(175, 99, 241) 100%), url('/images/person-1.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                style={{
                  paddingBottom: '100%',
                }}
              />
            </div>
            <div className="space-y-6">
              <h1 className="font-bold text-4xl text-white md:text-5xl">
                Unlock Your Scholarship Potential with CareerNava
              </h1>
              <p className="text-gray-200 text-lg md:text-xl">
                We guide you through every step of the scholarship application
                process, empowering you with proven insights that boost your
                chances of securing a scholarship. From identifying suitable
                scholarships and meeting requirements to essay reviews and
                interview preparation, we provide the comprehensive support you
                need to secure your scholarship.
              </p>
              <div className="flex gap-4">
                <Button
                  className="flex h-16 w-[300px] flex-row justify-between rounded-lg px-5 text-white hover:bg-primary/20"
                  variant="secondary"
                  onClick={() =>
                    router.push('/app/dashboard?loginState=signedIn')
                  }
                >
                  <p className="font-bold text-xl">Book Session Now</p>
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120">
          <path
            fill="#F6C360"
            fillOpacity="1"
            d="M0,64L30,69.3C60,75,120,85,180,90.7C240,96,300,96,360,85.3C420,75,480,53,540,48C600,43,660,53,720,74.7C780,96,840,128,900,122.7C960,117,1020,75,1080,69.3C1140,64,1200,96,1260,106.7C1320,117,1380,107,1410,101.3L1440,96L1440,120L1410,120C1380,120,1320,120,1260,120C1200,120,1140,120,1080,120C1020,120,960,120,900,120C840,120,780,120,720,120C660,120,600,120,540,120C480,120,420,120,360,120C300,120,240,120,180,120C120,120,60,120,30,120L0,120Z"
          />
        </svg>
      </section>

      <section className="bg-secondary py-10 md:py-18">
        <div className="h-full rounded-t-7xl bg-secondary pt-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mt-4 inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                <Logos />
              </ul>
              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                aria-hidden="true"
              >
                <Logos />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <AccessibilityIcon className="h-12 w-12 text-primary" />
              <h3 className="font-bold text-2xl">
                Scholarship Application Guidance
              </h3>
              <p className="text-gray-600">
                We take the guesswork out of the scholarship application
                process. Our expert guidance helps you navigate each step with
                confidence, from identifying the most suitable scholarships to
                crafting a strong, compelling application. We provide
                personalized coaching to ensure that your application stands
                out, increasing your chances of success.
              </p>
            </div>
            <div className="space-y-4">
              <CreativeCommonsIcon className="h-12 w-12 text-primary" />
              <h3 className="font-bold text-2xl">Scholarship Essays Review</h3>
              <p className="text-gray-600">
                Your scholarship essay is your opportunity to shine—and we’re
                here to help you make it unforgettable. Our essay review service
                offers detailed feedback and expert recommendations to refine
                your writing, ensuring your story is powerful, clear, and
                aligned with what scholarship committees are looking for. We
                help you present your best self on paper.
              </p>
            </div>
            <div className="space-y-4">
              <MilestoneIcon className="h-12 w-12 text-primary" />
              <h3 className="font-bold text-2xl">
                Updates on Available Scholarships
              </h3>
              <p className="text-gray-600">
                Never miss an opportunity with CareerNava&#39;s up-to-date
                scholarship alerts. We keep you informed about the latest
                scholarships tailored to your academic and career goals. Our
                service ensures that you’re always in the know, giving you a
                competitive edge by allowing you to apply as soon as
                opportunities arise.
              </p>
            </div>
            <div className="space-y-4">
              <MilestoneIcon className="h-12 w-12 text-primary" />
              <h3 className="font-bold text-2xl">
                Scholarship Readiness Assessment
              </h3>
              <p className="text-gray-600">
                Are you ready to apply for scholarships? Our Scholarship
                Readiness Assessment evaluates your preparedness, identifying
                strengths and areas for improvement. We provide actionable
                insights and personalized recommendations, so you can approach
                the application process with confidence, knowing you’re fully
                prepared to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
      <PricingSection />
      <FounderShowcase />
      <Footer />
    </main>
  );
}

function AccessibilityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function CreativeCommonsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
      <path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
    </svg>
  );
}

function MilestoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
      <path d="M12 13v8" />
      <path d="M12 3v3" />
    </svg>
  );
}
