'use client';

import { useState } from 'react';
import TabsComponent from '~/components/patterns/tabs';

export default function MenteeTabComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    { title: 'All Scholars', count: 4 },
    { title: 'Online', count: 1 },
    { title: 'Pending Confirmation', count: 3 },
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
                {tabsData[activeTab]?.title}
              </h1>
              <p className="mt-2 text-gray-900 text-xl">
                Manage your documents, subscriptions, and billing here. You can
                also view your usage and manage your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
