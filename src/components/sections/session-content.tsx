"use client"
import { api } from "~/trpc/react";
import SessionSlider from "../patterns/session-slider";
import SessionTabComponent from "./session-tab-component";

const SessionContents = () => {

    const {data: sessions, isLoading} = api.mentorshipSessions.getBookingSessions.useQuery({
        limit: 100, offset: 0
    })

    console.log(sessions)
    return (
        <>
            <SessionTabComponent />
            <div className="mt-4">
                <SessionSlider sessions={sessions} loading={isLoading} />
            </div>
        </>
    )
}


export default SessionContents;