
"use client";
import {Link} from "next-view-transitions";
import type { NavItem } from "~/types";
import { usePathname } from "next/navigation";
import { useSidebar } from "~/hooks/use-sidebar";
import { buttonVariants } from "../../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/patterns/sidebar/subnav-accordion";
import { useEffect, useState, useCallback, memo } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";

interface SideNavProps {
    items: NavItem[];
    setOpen?: (open: boolean) => void;
    className?: string;
}

export const SideNav = memo(({ items, setOpen, className }: SideNavProps) => {
    const path = usePathname();
    const { isOpen } = useSidebar();
    const [openItem, setOpenItem] = useState("");
    const [lastOpenItem, setLastOpenItem] = useState("");

    useEffect(() => {
        if (isOpen) {
            setOpenItem(lastOpenItem);
        } else {
            setLastOpenItem(openItem);
            setOpenItem("");
        }
    }, [isOpen, lastOpenItem, openItem]);

    const handleLinkClick = useCallback(() => {
        if (setOpen) setOpen(false);
    }, [setOpen]);

    return (
        <nav className="space-y-2">
            {items.map((item) =>
                item.isChidren ? (
                    <Accordion
                        key={item.title}
                        type="single"
                        collapsible
                        className="space-y-2"
                        value={openItem}
                        onValueChange={setOpenItem}
                    >
                        <AccordionItem value={item.title} className="border-none">
                            <AccordionTrigger
                                className={cn(
                                    buttonVariants({ variant: 'ghost' }),
                                    'group relative flex h-12 justify-between px-4 py-2 text-black duration-200 hover:bg-muted hover:no-underline',
                                )}
                            >
                                <div>
                                    <item.icon className={cn('h-5 w-5', item.color)} />
                                </div>
                                <div
                                    className={cn(
                                        'absolute left-12 text-black duration-200',
                                        !isOpen && className,
                                    )}
                                >
                                    {item.title}
                                </div>
                                {isOpen && (
                                    <ChevronDownIcon className="h-4 w-4 shrink-0 text-white-foreground transition-transform duration-200" />
                                )}
                            </AccordionTrigger>
                            <AccordionContent className="mt-2 space-y-4 pb-1">
                                {item.children?.map((child) => (
                                    <Link
                                        key={child.title}
                                        href={child.href}
                                        onClick={handleLinkClick}
                                        prefetch={true}
                                        className={cn(
                                            buttonVariants({ variant: 'ghost' }),
                                            'group relative flex h-12 justify-start gap-x-3',
                                            path === child.href && 'bg-muted font-bold hover:bg-muted',
                                        )}
                                    >
                                        <child.icon className={cn('h-5 w-5', child.color)} />
                                        <div
                                            className={cn(
                                                'absolute left-12 text-black duration-200',
                                                !isOpen && className,
                                            )}
                                        >
                                            {child.title}
                                        </div>
                                    </Link>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ) : (
                    <Link
                        key={item.title}
                        href={item.href}
                        onClick={handleLinkClick}
                        prefetch={true}
                        className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            'group relative flex h-12 justify-start text-white',
                            path === item.href && 'bg-muted font-bold hover:bg-muted',
                        )}
                    >
                        <item.icon className={cn('h-5 w-5', item.color)} />
                        <span
                            className={cn(
                                'absolute left-12 text-black duration-200',
                                !isOpen && className,
                            )}
                        >
                            {item.title}
                        </span>
                    </Link>
                )
            )}
        </nav>
    );
});

SideNav.displayName = 'SideNav';
