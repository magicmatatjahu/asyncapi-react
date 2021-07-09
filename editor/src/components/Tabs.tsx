import React, { useState } from 'react';

interface TabsProps {
  tabs: Array<{
    tab: React.ReactNode;
    content: React.ReactNode;
  }>;
  tabWrapper?: React.ReactNode;
  active?: number;
}

export const Tabs: React.FunctionComponent<TabsProps> = ({
  tabs = [],
  tabWrapper = null,
  active = 0,
}) => {
  const [activeTab, setSctiveTab] = useState(active);
  const TabWrapper = tabWrapper || DefaultTabWrapper;

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className="flex flex-row">
        {tabs.map((tab, idx) => (
          <li
            className={`${activeTab === idx ? 'bg-red-500' : ''}`}
            onClick={() => setSctiveTab(idx)}
          >
            {tab.tab}
          </li>
        ))}
      </ul>
      <ul>
        {tabs.map((tab, idx) => (
          <li className={`${activeTab === idx ? 'block' : 'hidden'}`}>
            {tab.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

const DefaultTabWrapper: React.FunctionComponent = () => {
  return null;
};
