import React from 'react';

import { Dropdown } from './Dropdown';
import { Modal } from './Modal';
import { Tabs } from './Tabs';

interface TemplateSidebarProps {}

export const TemplateSidebar: React.FunctionComponent<TemplateSidebarProps> = ({}) => {
  return (
    <div
      className="bg-gray-800 border-b border-gray-700 text-sm px-2"
      style={{ height: '30px', lineHeight: '30px' }}
    >
      <div
        className="flex flex-row items-center justify-between"
        style={{ height: '30px', lineHeight: '30px' }}
      >
        <div></div>
        <div>
          <ul className="flex">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
