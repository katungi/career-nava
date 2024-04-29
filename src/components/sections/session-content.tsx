"use client"
import { api } from "~/trpc/react";
import SessionSlider from "../patterns/session-slider";
import SessionTabComponent from "./session-tab-component";

const SessionContents = () => {
    const { data, isLoading } = api.mentorshipSessions.getMentors.useQuery({
        limit: 3, offset: 0
    })
    return (
        <>
            <SessionTabComponent />
            <div className="mt-4">
                <SessionSlider sessions={data} />
            </div>
        </>
    )
}


export default SessionContents;