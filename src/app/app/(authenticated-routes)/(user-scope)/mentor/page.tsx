"use client"

import { ChevronRight, Loader } from "lucide-react"
import DocumentSlider from "~/components/patterns/document-slider"
import SessionSlider from "~/components/patterns/session-slider"
import DashboardBanner from "~/components/sections/banner"
import { api } from "~/trpc/react"

export default function MentorPage() {

    const { data: sessions, isLoading } = api.mentorshipSessions.getMentorBookingSession.useQuery({
        limit: 100, offset: 0
    })

    const { data: documents } = api.documents.getUserDocuments.useQuery();

    return (
        <div className="p-4 mx-12">
            <div className="flex flex-row gap-4">
                <div className="flex-1">
                <DashboardBanner sessions={sessions} documents={documents} />
                </div>
            </div>
            <div className="flex flex-row mt-20 w-full justify-between">
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-800">Upcoming Sessions</h1>
                    <p className="text-gray-900 text-xl mt-2">
                        Manage your documents, subscriptions, and billing here.
                    </p>
                </div>
                <div className="">
                    <button className="flex items-center bg-primary text-white w-44 h-12 justify-center rounded-md hover:bg-primary-dark">
                        See All Sessions
                        <ChevronRight className="w-6 h-6 text-white ml-2" />
                    </button>
                </div>
            </div>
            <div className="mt-4">
                {isLoading ? <div className="flex h-full items-center justify-center p-12">
                    <Loader className="h-8 w-8 animate-spin rounded-full"></Loader>
                </div> : <SessionSlider sessions={sessions} />}
            </div>
            <div className="flex flex-row mt-20 w-full justify-between">
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-800">New Documents</h1>
                    <p className="text-gray-900 text-xl mt-2">
                        Manage your documents, subscriptions, and billing here.
                    </p>
                </div>
                <div className="">
                    <button className="flex items-center bg-primary text-white w-40 h-12 justify-center rounded-md hover:bg-primary-dark">
                        See All Documents
                        <ChevronRight className="w-6 h-6 text-white ml-2" />
                    </button>
                </div>
            </div>
            <div className="mt-4">
                {isLoading ? <div className="flex h-full items-center justify-center p-12">
                    <Loader className="h-8 w-8 animate-spin rounded-full"></Loader>
                </div>
                    : <DocumentSlider sessions={sessions} />}
            </div>
        </div>
    )
}