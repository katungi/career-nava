"use client"
import React, { useState } from "react";
import { SideNav } from "../../patterns/sidebar/side-nav";
import { MentorNavItems, NavItems } from "~/components/constants/side-nav";

import { useSidebar } from "~/hooks/use-sidebar"
import { BsArrowLeftShort } from "react-icons/bs";
import { cn } from "~/lib/utils";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useSession } from "next-auth/react";

interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    const { isOpen, toggle } = useSidebar();
    const [status, setStatus] = useState(false);
    const session = useSession();

    const isMentor = session?.data?.user.role === "MENTOR";

    const handleToggle = () => {
        setStatus(true);
        toggle();
        setTimeout(() => setStatus(false), 500);
    };
    return (
        <nav
            className={cn(
                `relative hidden h-screen border-r pt-20 md:block `,
                status && "duration-500",
                isOpen ? "w-72" : "w-[78px]",
                isMentor ? "bg-secondary" : "bg-primary",
                className
            )}
        >
            <BsArrowLeftShort
                className={cn(
                    "absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-black",
                    !isOpen && "rotate-180"
                )}
                onClick={handleToggle}
            />
            <div className="space-y-4 py-4">
                <Link href="/" passHref>
                    {isOpen ? (
                        <Image
                            src={isMentor ? "/images/dark-logo.svg" : "/logo.svg"}
                            width={200}
                            height={0}
                            alt="Career Nava Logo"
                            className=" hidden md:block ml-3"
                        />
                    ) : (
                        <Image
                            src={isMentor ? "/images/dark-mini-logo.svg" : "/mini-logo.svg"}
                            width={50}
                            height={0}
                            alt="Career Nava Logo"
                            className=" hidden md:block ml-3"
                        />
                    )}
                </Link>
                <div className="px-3 py-2">
                    <div className="mt-3 space-y-1">
                        <SideNav
                            className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-black group-hover:p-2"
                            items={isMentor ? NavItems : MentorNavItems}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
