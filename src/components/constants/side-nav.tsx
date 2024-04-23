import { AwardIcon, BookOpenCheck, LayoutDashboard } from "lucide-react";
import { type NavItem } from "~/types";

export const NavItems: NavItem[] = [
    {
        title: "Home",
        icon: LayoutDashboard,
        href: "/app/dashboard",
        color: "text-sky-500",
    },
    {
        title: "My Sessions",
        icon: BookOpenCheck,
        href: "/app/dashboard/sessions",
        color: "text-green-500",
    },
    {
        title: "My Scholarships",
        icon: AwardIcon,
        href: "/app/dashboard/scholarships",
        color: "text-blue-500",
    },
    {
        title: "My Documents",
        icon: BookOpenCheck,
        href: "/app/dashboard/documents",
        color: "text-orange-500",
    }
];
