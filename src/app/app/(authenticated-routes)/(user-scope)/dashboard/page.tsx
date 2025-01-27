'use client';
import { ChevronRight, Loader } from 'lucide-react';
import DocumentSlider from '~/components/patterns/document-slider';
import SessionSlider from '~/components/patterns/session-slider';
import DashboardBanner from '~/components/sections/banner';
import { Button } from '~/components/ui/button';
import { api } from '~/trpc/react';

export default function Home() {
  const { data: sessions, isLoading } =
    api.mentorshipSessions.getBookingSessions.useQuery({
      limit: 100,
      offset: 0,
    });

  const { data: documents } = api.documents.getUserDocuments.useQuery();

  return (
    <div className="mx-12 p-4">
      <div className="flex flex-row gap-4">
        <div className="flex-1">
          <DashboardBanner sessions={sessions} documents={documents} />
        </div>
      </div>
      <div className="mt-20 flex w-full flex-row justify-between">
        <div className="">
          <h1 className="font-bold text-3xl text-gray-800">
            Upcoming Sessions
          </h1>
          <p className="mt-2 text-gray-900 text-xl">
            Manage your documents, subscriptions, and billing here.
          </p>
        </div>
        <div className="">
          <button className="flex h-12 w-44 items-center justify-center rounded-md bg-primary text-white hover:bg-primary-dark">
            See All Sessions
            <ChevronRight className="ml-2 h-6 w-6 text-white" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        {isLoading ? (
          <div className="flex h-full items-center justify-center p-12">
            <Loader className="h-8 w-8 animate-spin rounded-full" />
          </div>
        ) : (
          <SessionSlider sessions={sessions} />
        )}
      </div>
      <div className="mt-20 flex w-full flex-row justify-between">
        <div className="">
          <h1 className="font-bold text-3xl text-gray-800">New Documents</h1>
          <p className="mt-2 text-gray-900 text-xl">
            Manage your documents, subscriptions, and billing here.
          </p>
        </div>
        <div className="">
          <Button className="flex h-12 w-48 items-center justify-center rounded-md bg-primary text-white hover:bg-primary-dark">
            See All Documents
            <ChevronRight className="ml-2 h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
      <div className="mt-4">
        {isLoading ? (
          <div className="flex h-full items-center justify-center p-12">
            <Loader className="h-8 w-8 animate-spin rounded-full" />
          </div>
        ) : (
          <DocumentSlider sessions={documents} />
        )}
      </div>
    </div>
  );
}
