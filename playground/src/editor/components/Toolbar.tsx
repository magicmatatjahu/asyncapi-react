import React from 'react';
import { WrapperComponent, jsx } from './WrapperComponent';

const capture = (type: string, props: any) => {
  if (type === 'div' && props.children === 'lol') {
    return true;
  }
  return false;
};

const Component: React.FunctionComponent = props => {
  return <div>dupa</div>;
};

export const Toolbar: React.FunctionComponent = () => {
  return (
    <WrapperComponent capture={capture} component={Component}>
      <jsx.div>lol</jsx.div>
      <jsx.span>lol</jsx.span>
      <jsx.div>
        <jsx.div>lol</jsx.div>
        <jsx.div>lol</jsx.div>
        <jsx.div>lol</jsx.div>
      </jsx.div>
    </WrapperComponent>
  );

  return (
    <div>
      <div className="px-4 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center justify-between h-16 px-4">
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
      {/* <div className="flex-none bg-gray-800 p-2 px-8 w-full border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div />
          <div>
          <span className="block rounded-md shadow-sm">
                <button type="button" className="flex px-2 py-2 text-sm rounded-md text-gray-500 hover:text-white focus:outline-none transition ease-in-out duration-150" title="Import AsyncAPI document">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                  Import
                </button>
              </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};
