"use client"
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import Footer from "~/components/patterns/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { SiCheckmarx } from "@icons-pack/react-simple-icons";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { ArrowRight } from "lucide-react";

const Logos = () => {
  return (
    <>
      <li>
        <img src="/images/chevening-sc.png" alt="Google" className="h-44 w-44  p-2 text-primary" />
      </li>
      <li>
        <img src="/images/mastercard-foundation-sc.png" alt="Google" className="h-32  p-2 text-primary" />
      </li>
      <li>
        <img src="/images/mext-scholarship-sc.png" alt="Google" className="h-32  p-2 text-primary" />
      </li>
      <li>
        <img src="/images/mwf-stacked-rgb.png" alt="Google" className="h-32  p-2 text-primary" />
      </li>
      <li>
        <img src="/images/Yoast-social-logo.png" alt="Google" className="h-52 w-64  p-2 text-primary" />
      </li>
    </>
  );
};

export default async function HomeNew() {
  const router = useRouter();
  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-r from-[#af63f1] to-primary py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Unlock Your Scholarship Potential with CareerNava
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Discover and apply for scholarships tailored to your unique background and aspirations.
              </p>
              <div className="flex gap-4">
                <Button className="text-white hover:bg-primary/20 w-[300px] h-16 rounded-full flex flex-row justify-between px-5" variant="default"
                  onClick={() => router.push("/app/dashboard")}>
                  <p>Book Session Now</p>
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
     
              <img
                alt="Banner Image"
                className="w-full max-w-md"
                height={700}
              
                src="/images/person-1.png"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={700}
              />
 
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="rounded-t-7xl bg-white h-full pt-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <AccessibilityIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Compatibility</h3>
              <p className="text-gray-600">
                We match students with scholarships that align with their unique backgrounds, interests, and goals.
              </p>
            </div>
            <div className="space-y-4">
              <CreativeCommonsIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Creativity</h3>
              <p className="text-gray-600">
                Our platform encourages creative thinking and problem-solving to help students stand out.
              </p>
            </div>
            <div className="space-y-4">
              <MilestoneIcon className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold">Qualified Mentors</h3>
              <p className="text-gray-600">
                Our team of experienced mentors provides personalized guidance throughout the scholarship process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
            <p className="text-gray-600 text-lg">Choose the plan that best fits your needs and budget.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>Get started for free</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">Free</div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Unlimited scholarship opportunities
                  </p>
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Readiness Assessment
                  </p>
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Limited Application Resources
                  </p>
                </div>
                <Button className="bg-primary text-white hover:bg-primary" variant="default">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Unlock your full potential</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">$19/mo</div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> 5 guidance sessions - 45 min each
                  </p>
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Individual/group sessions
                  </p>
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Complete within 3 weeks
                  </p>
                </div>
                <Button className="bg-primary text-white hover:bg-primary" variant="default">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>End to End</CardTitle>
                <CardDescription>Custom solutions for organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">Contact Us</div>
                <div className="space-y-2 text-gray-600">
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> 5 Guided sessions - unlimited
                  </p>
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> document creation & reviews
                  </p>
                  <p className="flex flex-row">
                    <SiCheckmarx className="text-primary mt-2 mr-3" width={14} height={14} /> Interview preparation
                  </p>
                </div>
                <Button className="bg-primary text-white hover:bg-[#4F46E5]" variant="default">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                alt="Founder Image"
                className="w-full max-w-md rounded-lg"
                height={500}
                src="/images/lameck.png"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">A Message from Our Founder</h2>
              <p className="text-gray-600 text-lg">
                "At CareerNava, we believe that every student deserves access to the resources and support they need to
                achieve their educational goals. Our mission is to empower students from all backgrounds to unlock their
                full scholarship potential and pursue their dreams without financial barriers."
              </p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="Founder Avatar" src="/images/lameck.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">Lameck Owesi</h4>
                  <p className="text-gray-600">Co-Founder, CareerNava</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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