"use client"

import { api } from "~/trpc/react";
import MenteeSlider from "./MenteeSlider";
import MenteeTabComponent from "./MenteeTabs"

const MenteeContent = () => {
    const { data: sessions } = api.mentorshipSessions.getMentees.useQuery({
        limit: 100, offset: 0
    })
    return (
        <>
            <MenteeTabComponent />
            <div className="mt-4">
                {/* //@ts-ignore */}
                <MenteeSlider mentees={sessions ?? []} />
            </div>
        </>
    )
}

export default MenteeContent;