"use client"
import { ChevronRight, ChevronRightIcon, Loader } from "lucide-react";
import DashboardBanner from "~/components/sections/banner";
import SessionSlider from "~/components/patterns/session-slider";
import DocumentSlider from "~/components/patterns/document-slider";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";

export default function Home() {
    const { data: sessions, isLoading } = api.mentorshipSessions.getBookingSessions.useQuery({
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
            <div className="flex justify-between items-center mb-6 mt-24">
                <div>
                    <h2 className="text-2xl font-bold">Upcoming Sessions</h2>
                    <p className="text-muted-foreground text-sm">Join your scheduled mentorship sessions</p>
                </div>
                <Button variant="default" className="flex items-center gap-1 hover:bg-secondary">
                    See All Sessions
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </div>
            <div className="mt-4">
                {isLoading ? <div className="flex h-full items-center justify-center p-12">
                    <Loader className="h-8 w-8 animate-spin rounded-full" />
                </div> : <SessionSlider sessions={sessions} />}
            </div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold">New Documents</h2>
                    <p className="text-muted-foreground text-sm">Recently uploaded documents and applications</p>
                </div>
                <Button variant="default" className="flex items-center gap-1">
                    See All Documents
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </div>

            <div className="mt-4">
                {isLoading ? <div className="flex h-full items-center justify-center p-12">
                    <Loader className="h-8 w-8 animate-spin rounded-full" />
                </div>
                    : <DocumentSlider sessions={documents} />}
            </div>
        </div>
    );
}