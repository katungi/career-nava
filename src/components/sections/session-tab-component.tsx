'use client';

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import TabsComponent from '../patterns/tabs';
import { Button } from '../ui/button';

export default function SessionTabComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    { title: 'All', count: 4 },
    { title: 'Active', count: 1 },
    { title: 'Upcoming', count: 3 },
    { title: 'Deleted', count: 0 },
  ];
  return (
    <>
      <div className="mt-10">
        <TabsComponent
          tabsData={tabsData}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="flex w-full flex-row">
        <div className="p-3">
          <div className="flex w-full flex-row items-center justify-between p-3">
            <div className="">
              <h1 className="font-bold text-4xl text-gray-800">
                {tabsData[activeTab]?.title} Sessions
              </h1>
              <p className="mt-2 text-gray-900 text-xl">
                Manage your documents, subscriptions, and billing here. You can
                also view your usage and manage your account.
              </p>
            </div>
            <div className="ml-12">
              <Button
                className="flex h-12 w-40 items-center justify-center rounded-md text-white hover:bg-secondary-dark"
                variant={'secondary'}
              >
                See Sessions
                <ChevronRight className="ml-2 h-6 w-6 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
