/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JJcGxUoLlTs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <main className="flex flex-col">
      <section className="bg-gradient-to-r from-[#6366F1] to-[#9333EA] py-20 md:py-32">
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
                <Button className="bg-white text-[#6366F1] hover:bg-gray-200" variant="solid">
                  Get Started
                </Button>
                <Button className="text-white hover:bg-white/20" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Banner Image"
                className="w-full max-w-md"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover",
                }}
                width={500}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            <img
              alt="Microsoft Logo"
              className="w-full max-w-[120px] mx-auto"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width={120}
            />
            <img
              alt="Google Logo"
              className="w-full max-w-[120px] mx-auto"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width={120}
            />
            <img
              alt="Amazon Logo"
              className="w-full max-w-[120px] mx-auto"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width={120}
            />
            <img
              alt="Apple Logo"
              className="w-full max-w-[120px] mx-auto"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width={120}
            />
            <img
              alt="Meta Logo"
              className="w-full max-w-[120px] mx-auto"
              height={40}
              src="/placeholder.svg"
              style={{
                aspectRatio: "120/40",
                objectFit: "cover",
              }}
              width={120}
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <AccessibilityIcon className="h-12 w-12 text-[#6366F1]" />
              <h3 className="text-2xl font-bold">Compatibility</h3>
              <p className="text-gray-600">
                We match students with scholarships that align with their unique backgrounds, interests, and goals.
              </p>
            </div>
            <div className="space-y-4">
              <CreativeCommonsIcon className="h-12 w-12 text-[#6366F1]" />
              <h3 className="text-2xl font-bold">Creativity</h3>
              <p className="text-gray-600">
                Our platform encourages creative thinking and problem-solving to help students stand out.
              </p>
            </div>
            <div className="space-y-4">
              <MilestoneIcon className="h-12 w-12 text-[#6366F1]" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img
                alt="Mentor Sessions"
                className="w-full rounded-lg"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <h3 className="text-2xl font-bold">Mentor Sessions</h3>
              <p className="text-gray-600">
                Connect with experienced mentors who can provide personalized guidance and support.
              </p>
            </div>
            <div className="space-y-4">
              <img
                alt="Scholarship Network"
                className="w-full rounded-lg"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <h3 className="text-2xl font-bold">Scholarship Network</h3>
              <p className="text-gray-600">
                Explore a vast database of scholarships and connect with organizations offering funding opportunities.
              </p>
            </div>
            <div className="space-y-4">
              <img
                alt="Application Assistance"
                className="w-full rounded-lg"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <h3 className="text-2xl font-bold">Application Assistance</h3>
              <p className="text-gray-600">
                Get expert guidance on crafting compelling scholarship applications and essays.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                alt="Testimonial Image"
                className="w-full max-w-md rounded-lg"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/500",
                  objectFit: "cover",
                }}
                width={400}
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">"CareerNava Helped Me Unlock My Scholarship Potential"</h2>
              <p className="text-gray-600 text-lg">
                "I was struggling to find the right scholarships for my background and goals, but CareerNava's platform
                and mentors made the process so much easier. I'm now able to focus on my studies with the financial
                support I needed."
              </p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="Testimonial Avatar" src="/testimonial-avatar.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">Jada Daniels</h4>
                  <p className="text-gray-600">College Student</p>
                </div>
              </div>
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
                <div className="text-4xl font-bold">$0</div>
                <ul className="space-y-2 text-gray-600">
                  <li>Access to scholarship database</li>
                  <li>Basic application assistance</li>
                  <li>Limited mentor sessions</li>
                </ul>
                <Button className="bg-[#6366F1] text-white hover:bg-[#4F46E5]" variant="solid">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Unlock your full potential</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">$19/mo</div>
                <ul className="space-y-2 text-gray-600">
                  <li>Personalized mentor sessions</li>
                  <li>Advanced scholarship matching</li>
                  <li>Essay writing assistance</li>
                </ul>
                <Button className="bg-[#6366F1] text-white hover:bg-[#4F46E5]" variant="solid">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Custom solutions for organizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">Contact Us</div>
                <ul className="space-y-2 text-gray-600">
                  <li>Dedicated account manager</li>
                  <li>Customized scholarship programs</li>
                  <li>Comprehensive reporting</li>
                </ul>
                <Button className="bg-[#6366F1] text-white hover:bg-[#4F46E5]" variant="solid">
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
                src="/placeholder.svg"
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
                  <AvatarImage alt="Founder Avatar" src="/founder-avatar.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">Jada Daniels</h4>
                  <p className="text-gray-600">Founder, CareerNava</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function AccessibilityIcon(props) {
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


function CreativeCommonsIcon(props) {
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


function MilestoneIcon(props) {
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