import { atom } from "jotai"
import { User } from "@prisma/client"

export const modalProgressAtom = atom("initial")

export const mentorAtom = atom(null as User | null)