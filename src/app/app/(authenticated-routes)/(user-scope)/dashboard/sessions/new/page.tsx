"use client"

import { MentorProfileCard } from "~/components/sections/mentor-card";
import { BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList, Breadcrumb } from "~/components/ui/breadcrumb"
import { api } from "~/trpc/react";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useAtom } from "jotai";
import { modalProgressAtom, mentorAtom } from "~/atoms/mentor.atom";

export default function BookSessionPage() {
    const [selectedMentor, setSelectedMentor] = useAtom(mentorAtom);
    const [step, setStep] = useAtom(modalProgressAtom);
    const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
        limit: 3,
        offset: 0,
    });
    return (
        <div className='px-8'>
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
                <p className=" p-4 font-bold text-4xl">Choose a Mentor to get started</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
    )
}