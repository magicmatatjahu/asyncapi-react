import React from 'react';
import { StateMethods } from '@hookstate/core';

import state from '../state';

interface NavItem {
  name: string;
  state: StateMethods<boolean>;
  icon: React.ReactNode;
}

interface SidebarProps {}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({}) => {
  const sidebarState = state.useSidebarState();

  const navigation: NavItem[] = [
    // navigation
    {
      name: 'navigation',
      state: sidebarState.panels.navigation,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // editor
    {
      name: 'editor',
      state: sidebarState.panels.editor,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // template
    {
      name: 'template',
      state: sidebarState.panels.template,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col flex-none bg-gray-800 shadow-lg border-r border-gray-700">
      {navigation.map(item => (
        <button
          key={item.name}
          onClick={() => item.state.set(v => !v)}
          className={`flex text-sm ${
            item.state.get()
              ? 'text-white hover:text-gray-500 border-l-2 border-white'
              : 'text-gray-500 hover:text-white'
          } hover:text-white focus:outline-none p-4`}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
};
