import React from 'react';
import { StateMethods } from '@hookstate/core';
import {
  VscFiles,
  VscListSelection,
  VscCode,
  VscOpenPreview,
  VscSettingsGear,
} from 'react-icons/vsc';

import { Modal } from './Modal';

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
      icon: <VscListSelection className="w-5 h-5" />,
    },
    // editor
    {
      name: 'editor',
      state: sidebarState.panels.editor,
      icon: <VscCode className="w-5 h-5" />,
    },
    // template
    {
      name: 'template',
      state: sidebarState.panels.template,
      icon: <VscOpenPreview className="w-5 h-5" />,
    },
  ];

  const settings = (
    <Modal
      opener={
        <button className="flex text-md text-gray-500 hover:text-white focus:outline-none p-4">
          <VscSettingsGear className="h-5 w-5" />
        </button>
      }
      title={'lol'}
      body={<div></div>}
    />
  );

  return (
    <div className="flex flex-col flex-none bg-gray-800 shadow-lg border-r border-gray-700 justify-between">
      <div className="flex flex-col">
        {navigation.map(item => (
          <button
            key={item.name}
            onClick={() => item.state.set(v => !v)}
            className={`flex text-sm border-l-2  ${
              item.state.get()
                ? 'text-white hover:text-gray-500 border-white'
                : 'text-gray-500 hover:text-white border-gray-800'
            } focus:outline-none border-box p-4`}
            type="button"
          >
            {item.icon}
          </button>
        ))}
      </div>
      <div>{settings}</div>
    </div>
  );
};
