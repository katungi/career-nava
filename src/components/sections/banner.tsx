"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Calendar, CreditCard, Users } from "lucide-react";
import StatCard from "./stat-card";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function DashboardBanner({ sessions, documents }: any) {
    const session = useSession();
    return (
        <div className="flex flex-col w-full gap-4">
            <div className="mb-10">
                <h1 className="text-3xl font-bold">
                    Welcome, <span className="text-primary">{session?.data?.user.name || ""}</span>
                </h1>
                <p className="text-muted-foreground mt-1">Here's an overview of your academic progress</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                <StatCard
                    title="Upcoming Sessions"
                    value={sessions?.length || 0}
                    icon={Calendar}
                />
                <StatCard
                    title="Documents Submitted"
                    value={documents?.length || 0}
                    icon={Users}
                />
                <StatCard
                    title="Scholarships Applied"
                    value={0}
                    icon={CreditCard}
                />
            </div>
        </div>
    )
}