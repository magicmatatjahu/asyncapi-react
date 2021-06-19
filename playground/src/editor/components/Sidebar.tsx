import React from 'react';

interface SidebarProps {
  setShowNavigation: Function;
  showNavigation: boolean;
  setShowEditor: Function;
  showEditor: boolean;
  setShowDec: Function;
  showDoc: boolean;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  setShowNavigation,
  showNavigation,
  setShowEditor,
  showEditor,
  setShowDec,
  showDoc,
}) => {
  return (
    <>
      <button
        onClick={() => setShowNavigation(!showNavigation)}
        className={`flex text-sm rounded-md ${
          showNavigation
            ? 'text-white hover:text-gray-500'
            : 'text-gray-500 hover:text-white'
        } hover:text-white focus:outline-none transition ease-in-out duration-150 p-4`}
      >
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
      </button>
      <button
        onClick={() => setShowEditor(!showEditor)}
        className={`flex text-sm rounded-md ${
          showEditor
            ? 'text-white hover:text-gray-500'
            : 'text-gray-500 hover:text-white'
        } hover:text-white focus:outline-none transition ease-in-out duration-150 p-4`}
      >
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
      </button>
      <button
        onClick={() => setShowDec(!showDoc)}
        className={`flex text-sm rounded-md ${
          showDoc
            ? 'text-white hover:text-gray-500'
            : 'text-gray-500 hover:text-white'
        } hover:text-white focus:outline-none transition ease-in-out duration-150 p-4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      </button>
    </>
  );
};
