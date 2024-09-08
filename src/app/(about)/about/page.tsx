"use client"

import { useRouter } from "next/navigation";
import AboutHeader from "./_components/aboutHeader";
import { MentorBioCard, MentorProfileCard } from "~/components/sections/mentor-card";
import Footer from "~/components/patterns/footer";
import CountUp from 'react-countup';

export default function AboutPage() {
    const router = useRouter();

    const mentorArray = [
        {
            name: "John Doe",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            scholarships: ["Mastercard Scholarship", "Google Scholarship"],
            currentMentees: 0,
        },
        {
            name: "Jane Smith",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            scholarships: ["Mastercard Scholarship", "Google Scholarship"],
            currentMentees: 3,
        },
        {
            name: "Alice Johnson",
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            scholarships: ["Mastercard Scholarship", "Google Scholarship"],
            currentMentees: 5,
        },
    ];

    return (
        <main>
            <section className="relative bg-gradient-to-r from-[#2649e4] via-primary to-[#af63f1] py-20 md:py-32 border-none">
                <AboutHeader />
            </section>
            <div className="flex justify-center bg-gray-50 border p-8 gap-24">
                <div className="text-center mx-4">
                    <div className="text-4xl text-primary font-bold">
                        <CountUp end={25000} /> +
                    </div>
                    <div className="text-gray-600">Coaches</div>
                </div>
                <div className="text-center mx-4">
                    <div className="text-4xl text-primary font-bold">
                    <CountUp end={100000} /> +
                    </div>
                    <div className="text-gray-600">Scholarships</div>
                </div>
            </div>
            <section>
                <div className="flex flex-col justify-center items-center p-8">
                    <div className="text-center mb-8">
                        <p className="text-3xl font-bold">Our Top Coaches</p>
                        <p className="text-md">
                            Our coaches are carefully selected to ensure you get the best guidance in your career.
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
    )
}