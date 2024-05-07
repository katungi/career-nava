"use client"

import { User } from "@prisma/client"
import MenteeCard from "~/components/constants/mentee-card"

// @ts-ignore
const MenteeSlider = ({ mentees }: User[]) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {mentees.map((mentee) => (
                <MenteeCard key={mentee.id} mentee={mentee} />
            ))}
        </div>
    )
}

export default MenteeSlider;