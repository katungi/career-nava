"use client"
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import Footer from "~/components/patterns/footer";
import { ArrowRight } from "lucide-react";
import FounderShowcase from "./founders";
import TestimonialSection from "./testimonials";
import PricingSection from "~/components/sections/pricing";
import Image from "next/image";
import { motion } from "framer-motion";

const Logos = () => {
  return (
    <>
      <li>
        <Image src="/images/chevening-sc.png" alt="Chevening Scholarship" width={176} height={176} className="p-2 text-primary" />
      </li>
      <li>
        <Image src="/images/mastercard-foundation-sc.png" alt="Mastercard Foundation" width={128} height={128} className="p-2 text-primary" />
      </li>
      <li>
        <Image src="/images/mext-scholarship-sc.png" alt="MEXT Scholarship" width={128} height={128} className="p-2 text-primary" />
      </li>
      <li>
        <Image src="/images/mwf-stacked-rgb.png" alt="MWF" width={128} height={128} className="p-2 text-primary" />
      </li>
      <li>
        <Image src="/images/Yoast-social-logo.png" alt="Yoast" width={256} height={208} className="p-2 text-primary" />
      </li>
    </>
  );
};

export default async function HomeNew() {
  const router = useRouter();

  return (
    <main className="flex flex-col">
      <section className="relative bg-gradient-to-r from-[#af63f1] to-primary border-none">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
            <div className="space-y-8 text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Unlock Your Scholarship Potential with CareerNava
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-xl text-gray-200">
                We guide you through every step of the scholarship application process, empowering you with
                proven insights that boost your chances of securing a scholarship. From identifying suitable
                scholarships and meeting requirements to essay reviews and interview preparation, we provide
                the comprehensive support you need to secure your scholarship.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="flex gap-4">
                <Button className="text-white hover:bg-primary hover:border-2 hover:border-secondary w-[300px] h-16 rounded-lg flex flex-row justify-between px-5 group" variant="secondary"
                  onClick={() => router.push("/app/dashboard?loginState=signedIn")}>
                  <p className='text-xl font-bold'>Book Session Now</p>
                  <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
              </motion.div>
            </div>
            <div className="relative h-3/4 min-h-[400px] w-full">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-[rgb(135,16,239)] z-10" />
                <Image
                  src="/images/hero/new-grad.jpg"
                  alt="Graduate"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <path fill="#F6C360" fillOpacity="1" d="M0,64L30,69.3C60,75,120,85,180,90.7C240,96,300,96,360,85.3C420,75,480,53,540,48C600,43,660,53,720,74.7C780,96,840,128,900,122.7C960,117,1020,75,1080,69.3C1140,64,1200,96,1260,106.7C1320,117,1380,107,1410,101.3L1440,96L1440,120L1410,120C1380,120,1320,120,1260,120C1200,120,1140,120,1080,120C1020,120,960,120,900,120C840,120,780,120,720,120C660,120,600,120,540,120C480,120,420,120,360,120C300,120,240,120,180,120C120,120,60,120,30,120L0,120Z"></path>
        </svg>
      </section>

      <section className="py-10 md:py-18 bg-secondary">
        <div className="rounded-t-7xl bg-secondary h-full pt-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mt-4 inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                <Logos />
              </ul>
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8" aria-hidden="true">
                <Logos />
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <AccessibilityIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Scholarship Application Guidance</h3>
              <p className="text-gray-600">
                We take the guesswork out of the scholarship application process. Our expert guidance helps
                you navigate each step with confidence, from identifying the most suitable scholarships to
                crafting a strong, compelling application. We provide personalized coaching to ensure that your
                application stands out, increasing your chances of success.
              </p>
            </div>
            <div className="space-y-4">
              <CreativeCommonsIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Scholarship Essays Review</h3>
              <p className="text-gray-600">
                Your scholarship essay is your opportunity to shine—and we're here to help you make it
                unforgettable. Our essay review service offers detailed feedback and expert recommendations
                to refine your writing, ensuring your story is powerful, clear, and aligned with what scholarship
                committees are looking for. We help you present your best self on paper.
              </p>
            </div>
            <div className="space-y-4">
              <MilestoneIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Updates on Available Scholarships</h3>
              <p className="text-gray-600">
                Never miss an opportunity with CareerNava&#39;s up-to-date scholarship alerts. We keep you
                informed about the latest scholarships tailored to your academic and career goals. Our service
                ensures that you're always in the know, giving you a competitive edge by allowing you to apply
                as soon as opportunities arise.
              </p>
            </div>
            <div className="space-y-4">
              <MilestoneIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Scholarship Readiness Assessment</h3>
              <p className="text-gray-600">
                Are you ready to apply for scholarships? Our Scholarship Readiness Assessment evaluates
                your preparedness, identifying strengths and areas for improvement. We provide actionable
                insights and personalized recommendations, so you can approach the application process with
                confidence, knowing you're fully prepared to succeed.
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
  )
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
  )
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
  )
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
  )
}