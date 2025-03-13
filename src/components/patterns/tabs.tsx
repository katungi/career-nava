'use client'
import React, { useState } from 'react';

const TabsComponent = ({ tabsData, setActiveTab, activeTab}: any) => {

  return (
    <div className="bg-white p-4">
      <div className="bg-white rounded-lg p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          {tabsData.map((tab: any, index: number) => (
            <button
              key={index}
              className={`text-lg font-medium py-2 px-4 rounded-md transition-all ${
                activeTab === index
                  ? 'bg-purple-500 text-white'
                  : 'text-purple-500 bg-transparent hover:bg-purple-300 hover:text-white'
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
