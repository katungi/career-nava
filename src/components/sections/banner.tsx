"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import BannerCards from "./banner-cards";

export default function DashboardBanner() {
    const session = useSession();
    return (
        <div className="flex flex-col w-full gap-4">
            <div className="">
                <h1 className="text-3xl font-bold text-gray-800">Welcome,
                    <span className="text-primary"> {session?.data?.user.name || ""}</span>
                </h1>
            </div>
            <BannerCards />
            {/* <div className="bg-green-500 mt-0">
                <Image src="/images/paper-planes.svg" width={350} height={300} alt="Career Nava Banner Logo" />
            </div> */}
        </div>
    )
}