"use client"

import type { LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    className?: string;
}

const StatCard = ({ title, value, icon: Icon, className }: StatCardProps) => {
    return (
        <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm p-6", className)}>
            <div className="flex items-center justify-between space-y-0">
                <h3 className="text-lg font-bold">{title}</h3>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-3xl font-bold text-primary mt-2">{value}</div>
        </div>
    );
};

export default StatCard;