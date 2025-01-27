'use client';
import { useState } from 'react';
import TabsComponent from '../patterns/tabs';

export default function ScholarshipsTabComponent() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    { title: 'All', count: 4 },
    { title: 'Applied', count: 1 },
    { title: 'Deleted', count: 3 },
    { title: 'Relevant', count: 0 },
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
                {tabsData[activeTab]?.title} Scholarships{' '}
              </h1>
              <p className="mt-2 text-gray-900 text-xl">
                Manage your documents, subscriptions, and billing here. You can
                also view your usage and manage your account.
              </p>
            </div>
            {/* <div className="ml-12">
                            <Button className="flex items-center text-white w-40 h-12 justify-center rounded-md hover:bg-secondary-dark"
                                variant={'secondary'}   >
                                Apply New Scholarships
                                <ChevronRight className="w-6 h-6 text-white ml-2" />
                            </Button>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
