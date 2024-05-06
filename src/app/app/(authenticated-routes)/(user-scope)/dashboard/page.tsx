"use client"
import { ChevronRight, FileText, Loader, SquareArrowOutUpRight } from "lucide-react";
import DashboardBanner from "~/components/sections/banner";
import { Badge } from "~/components/ui/badge";
import Modal from "~/components/ui/modal";
import SessionSlider from "~/components/patterns/session-slider";
import DocumentSlider from "~/components/patterns/document-slider";
import { useState } from "react";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { api } from "~/trpc/react";

export default function Home() {
    const { data: sessions, isLoading } = api.mentorshipSessions.getBookingSessions.useQuery({
        limit: 100, offset: 0
    })

    const { data: testData } = api.mentorshipSessions.getSessionPast.useQuery({
        limit: 100, offset: 0
    })

    console.log(testData)

    return (
        <div className="p-4 mx-12">
            {/* Banner */}
            <div className="flex flex-row gap-4">
                <div className="flex-1">
                    <DashboardBanner />
                </div>
                {/* <div className="rounded-lg border border-1 border-primary p-3">
                    <div className="w-96">
                        <div className="bg-grey-200 border-b-2">
                            <p className="text-3xl mx-6">Notifications</p>
                        </div>
                        <div className="p-4 flex-col gap-4">
                            <div className="flex flex-row">
                                <SquareArrowOutUpRight className="w-6 h-6 text-primary" />
                                <p className="text-gray-800 ml-2">Sessions
                                    <Badge className="bg-gray-400 text-white ml-2">2</Badge>
                                </p>
                                <ChevronRight className="w-6 h-6 text-primary ml-auto" />
                            </div>
                            <div className="flex flex-row mt-5">
                                <FileText className="w-6 h-6 text-primary" />
                                <p className="text-gray-800 ml-2">Document Review
                                    <Badge className="bg-gray-400 text-white ml-2">2</Badge>
                                </p>
                                <ChevronRight className="w-6 h-6 text-primary ml-auto" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Upcoming Sessions */}
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
                    <h1 className="text-3xl font-bold text-gray-800">New Document</h1>
                    <p className="text-gray-900 text-xl mt-2">
                        Manage your documents, subscriptions, and billing here.
                    </p>
                </div>
                <div className="">
                    <button className="flex items-center bg-primary text-white w-40 h-12 justify-center rounded-md hover:bg-primary-dark">
                        See Sessions
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
    );
}