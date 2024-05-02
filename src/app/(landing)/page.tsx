"use client"
import {
  SiGithub,
  SiMicrosoft,
  SiMastercard,
  SiGoogle
} from "@icons-pack/react-simple-icons";

import { type Metadata } from "next";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import {Link} from "next-view-transitions";
import { ClockIcon, GraduationCap, PuzzleIcon, Terminal } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";
import { format } from "date-fns";
import PricingSection from "~/components/sections/pricing";
import Footer from "~/components/patterns/footer";

// export const metadata: Metadata = {
//   title: "CareerNava",
//   description:
//     "Navigate Scholarships Smatter",
//   icons: [{ rel: "icon", url: "/favicon.ico" }],
//   openGraph: {
//     title: "CareerNava",
//     description:
//       "Navigate Scholarships Smatter",
//     // images: [
//     //   {
//     //     url: "https://cascade.stackonfire.com/api/og",
//     //     width: 800,
//     //     height: 600,
//     //     alt: "Cascade logo",
//     //   },
//     // ],
//   },
// };

const Logos = () => {
  return (
    <>
      <li>
        {/* <SiGoogle className="h-32 w-24 p-2 text-primary" /> */}
        <img src="/images/chevening-sc.png" alt="Google" className="h-44 w-44  p-2 text-primary" />
      </li>
      <li>
        {/* <SiMastercard className="h-32  p-2 text-primary" /> */}
        <img src="/images/mastercard-foundation-sc.png" alt="Google" className="h-32  p-2 text-primary" />
      </li>
      <li>
        {/* <SiMicrosoft className="h-32  p-2 text-primary" /> */}
        <img src="/images/mext-scholarship-sc.png" alt="Google" className="h-32  p-2 text-primary" />
      </li>
      <li>
        {/* <SiGithub className="h-32  p-2 text-primary" /> */}
        <img src="/images/mwf-stacked-rgb.png" alt="Google" className="h-32  p-2 text-primary" />
      </li>
      <li>
        <img src="/images/Yoast-social-logo.png" alt="Google" className="h-52 w-64  p-2 text-primary" />
      </li>
    </>
  );
};

export default async function Home() {

  const router = useRouter();
  return (
    <>
      <div className="">
        {/* Hero */}
        <div className="h-screen overflow-hidden bg-primary">
      <div className="flex flex-row bg-primary relative">
        {/* Left Image */}
        <div className="mx-4 mt-28 relative">
          <Image src="/images/person-1.png" width={1800} height={800} alt="Person 1" className="hidden md:block" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary to-transparent"></div>
        </div>

        {/* Gradient Background behind the text */}
        {/* <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
          <div className="bg-gradient-to-r from-yellow-500 via-yellow-700 to-secondary h-[500px] w-full opacity-30 blur-lg"></div>
        </div> */}

        {/* CTA and Text */}
        <div className="w-full h-[500px] flex flex-col justify-center items-center gap-6 relative z-10">
          <div className="self-stretch text-center">
            <span className="text-white text-6xl font-bold">Navigate </span>
            <span className="text-secondary text-6xl font-bold">Scholarships</span>
            <span className="text-white text-6xl font-bold"> Smatter</span>
          </div>
          <Button variant={"secondary"} size={"lg"} className="w-[360px] h-[70px] my-2">
            <span className="text-black text-2xl">Get Your Career Score Today</span>
          </Button>
          <div className="self-stretch text-center text-white text-3xl">
            Looking to advance your education? Our scholarship guidance significantly increases your chance of success.
          </div>
        </div>

        {/* Right Image */}
        <div className="mx-4 relative">
          <Image src="/images/person-cta-2.png" width={1800} height={800} alt="Person 2" className="hidden md:block" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary to-transparent"></div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="rounded-t-7xl bg-white h-full pt-8">
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
    </div>
        <div className="bg-white h-screen">
          <div className="text-center pt-6">
            <span className="text-secondary text-6xl font-bold">
              What we as CareerNava value
            </span>

            <div className='flex flex-row justify-center mt-28'>
              <div className="w-[212px] h-[130px] flex-col justify-start items-center gap-[22px] inline-flex">
                <ClockIcon className="w-32 h-32 text-primary" />
                <div className="self-stretch h-[52px] flex-col justify-start items-center gap-2 flex">
                  <div className="self-stretch text-center text-neutral-800 text-2xl font-bold capitalize">Compatibility</div>
                  <div className="self-stretch opacity-60 text-center text-neutral-800 text-base font-normal capitalize">
                    Compatible with people of all ages and backgrounds
                  </div>
                </div>
              </div>
              <div className="w-[212px] h-[130px] flex-col justify-start items-center gap-[22px] inline-flex">
                <PuzzleIcon className="w-32 h-32 text-primary" />
                <div className="self-stretch h-[52px] flex-col justify-start items-center gap-2 flex">
                  <div className="self-stretch text-center text-neutral-800 text-2xl font-bold capitalize">Convenience</div>
                  <div className="self-stretch opacity-60 text-center text-neutral-800 text-base font-normal capitalize">
                    Convenience is key, we make it easy for you
                  </div>
                </div>
              </div>
              <div className="w-[212px] h-[130px] flex-col justify-start items-center gap-[22px] inline-flex">
                <GraduationCap className="w-32 h-32 text-primary" />
                <div className="self-stretch h-[52px] flex-col justify-start items-center gap-2 flex">
                  <div className="self-stretch text-center text-neutral-800 text-2xl font-bold capitalize">Qualified Mentors</div>
                  <div className="self-stretch opacity-60 text-center text-neutral-800 text-base font-normal capitalize">
                    Our mentors are highly qualified and experienced
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-32 bg-primary h-full p-8">
              <span className="text-secondary text-6xl font-bold mt-4">
                Get your assessment score today
              </span>
              <div className="self-stretch text-center text-white text-lg mt-4">
                With CareerNava’s assessment score there’s nowhere you’ll go wrong
              </div>

              <div className="flex flex-row px-96 mt-20 ml-44 mb-12">
                <Button variant={"secondary"} size={"lg"} className="w-[360px] h-[70px] my-2">
                  <span className="text-black text-2xl">Get Assessment Score</span>
                </Button>
                <Button variant={"default"} size={"lg"} className="w-[360px] h-[70px] my-2">
                  <span className="text-white text-2xl">Get Assessment Score</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="p-8 flex flex-row">
            <Image src={"/images/imgpeople.png"} width={800} height={800} alt="CTA 1" className="ml-4" />
            <div className="p-12 flex-col">
              <div className="text-black text-4xl font-bold">
                Services we offer
              </div>
              <div className="text-black text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur nulla varius ac morbi pellentesque in nisi, aliquam.
              </div>
              <div className="rounded-lg bg-secondary w-64 p-4 mt-4">
                <span className="font-bold">Online Mentor Sessions</span>
              </div>
              <div className="rounded-lg bg-secondary w-64 p-4 mt-4">
                <span className="font-muted opacity-12">Document Reviews</span>
              </div>
              <div className="rounded-lg bg-secondary w-64 p-4 mt-4">
                <span className="font-muted opacity-12">Scholarship Reviews</span>
              </div>
            </div>
          </div>
          <PricingSection />
          <div className="text-center bg-white p-8">
            <span className="text-grey-900 text-6xl font-bold mt-4">
              Ready to get started?
            </span>
            <div className="self-stretch text-center text-grey-900 text-lg mt-4">
              With Mundaly’s there’s nowhere you’ll go wrong
            </div>

            <div className="flex flex-row px-96 mt-20 ml-44 mb-12 gap-4">
              <Link href="/app/signup">
                <Button variant={"default"} size={"lg"} className="w-[360px] h-[70px] my-2 hover:bg-secondary" onClick={() =>
                  router.push("/app/signup")
                }>
                  <span className="text-white text-2xl">sign Up</span>
                </Button>
              </Link>
              <Button variant={"secondary"} size={"lg"} className="w-[360px] h-[70px] my-2">
                <span className="text-black text-2xl">Get Assessment Score Today!</span>
              </Button>
            </div>
          </div>
          <Footer />
        </div>

      </div>

    </>
  );
}
