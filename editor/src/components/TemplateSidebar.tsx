import React from 'react';

import { Dropdown } from './Dropdown';
import { Modal } from './Modal';

interface TemplateSidebarProps {}

export const TemplateSidebar: React.FunctionComponent<TemplateSidebarProps> = ({}) => {
  const menuDropdown = (
    <Dropdown
      opener={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      }
      buttonHoverClassName="text-gray-500 hover:text-white"
    >
      <ul className="text-md">
        <li className="px-4">Import from URL</li>
        <li className="px-4">Import File</li>
        <li className="px-4">Convert to latest</li>
      </ul>
    </Dropdown>
  );

  return (
    <div
      className="bg-gray-800 border-b border-gray-700 text-sm px-2"
      style={{ height: '30px', lineHeight: '30px' }}
    >
      <div
        className="flex flex-row items-center justify-between"
        style={{ height: '30px', lineHeight: '30px' }}
      >
        <div />
        <div>
          <ul className="flex">
            <li>{menuDropdown}</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
