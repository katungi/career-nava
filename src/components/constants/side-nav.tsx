import {
  AwardIcon,
  BookOpenCheck,
  Bookmark,
  CalendarIcon,
  LayoutDashboard,
  User2Icon,
} from 'lucide-react';
import type { NavItem } from '~/types';

export const NavItems: NavItem[] = [
  {
    title: 'Home',
    icon: LayoutDashboard,
    href: '/app/dashboard',
    color: 'text-sky-500',
  },
  {
    title: 'My Sessions',
    icon: BookOpenCheck,
    href: '/app/dashboard/sessions',
    color: 'text-green-500',
  },
  {
    title: 'My Scholarships',
    icon: AwardIcon,
    href: '/app/dashboard/scholarships',
    color: 'text-blue-500',
  },
  {
    title: 'My Documents',
    icon: BookOpenCheck,
    href: '/app/dashboard/documents',
    color: 'text-orange-500',
  },
  {
    title: 'My Bookmarks',
    icon: Bookmark,
    href: '/app/dashboard/bookmarks',
    color: 'text-red-500',
  },
];

export const MentorNavItems: NavItem[] = [
  {
    title: 'Home',
    icon: LayoutDashboard,
    href: '/app/mentor',
    color: 'text-sky-500',
  },
  {
    title: 'My Scholars',
    icon: User2Icon,
    href: '/app/mentor/mentees',
    color: 'text-green-500',
  },
  {
    title: 'My Sessions',
    icon: CalendarIcon,
    href: '/app/mentor/sessions',
    color: 'text-green-500',
  },
  {
    title: 'My Scholarships',
    icon: AwardIcon,
    href: '/app/mentor/scholarships',
    color: 'text-blue-500',
  },
  {
    title: 'My Documents',
    icon: BookOpenCheck,
    href: '/app/mentor/documents',
    color: 'text-orange-500',
  },
];
