'use client';

const TabsComponent = ({ tabsData, setActiveTab, activeTab }: any) => {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between rounded-lg bg-white p-4">
        <div className="flex space-x-4">
          {tabsData.map((tab: any, index: number) => (
            <button
              key={index}
              className={`rounded-md px-4 py-2 font-medium text-lg transition-all ${
                activeTab === index
                  ? 'bg-purple-500 text-white'
                  : 'bg-transparent text-purple-500 hover:bg-purple-300 hover:text-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-purple-500 text-sm">1</span>
          <span className="text-purple-500">/</span>
          <span className="text-purple-500 text-sm">{tabsData.length}</span>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
