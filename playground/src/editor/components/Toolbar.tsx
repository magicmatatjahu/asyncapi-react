import React from 'react';

export const Toolbar: React.FunctionComponent = () => {
  return (
    <>
      <div className="sm:px-2 lg:px-2 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center justify-between h-16 px-4 sm:px-0">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="inline-block h-20"
                src="/img/logo-horizontal-white.svg"
                alt=""
              />
              <span className="inline-block text-xl text-pink-500 font-normal italic tracking-wide -ml-1 transform translate-y-0.5">
                editor
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex-none bg-gray-800 p-4 w-full border-b border-gray-700">
    lol
      </div> */}
    </>
  );
};
