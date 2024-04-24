"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function DashboardBanner() {
    const session = useSession();
    return (
        <div className="flex flex-row">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">Welcome,
                    <span className="text-primary"> {session?.data?.user.name || ""}</span>
                </h1>
                <p className="text-gray-900 text-xl mt-6">
                    Manage your documents, subscriptions, and billing here.
                </p>
                <p className="text-gray-900 text-xl">
                    You can also view your usage and manage your account.
                </p>
                <p className="text-gray-900 text-xl">
                    You can also view your usage and manage your account.
                </p>
            </div>
            <div className="ml-28">
                <Image src="/images/banner.png" width={300} height={250} alt="Career Nava Banner Logo" />
            </div>
        </div>
    )
}