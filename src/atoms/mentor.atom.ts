import type { User } from '@prisma/client';
import { atom } from 'jotai';

export const modalProgressAtom = atom('initial');

export const mentorAtom = atom(null as User | null);

export const modalOps = atom(false);
