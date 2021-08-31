import React, { useState } from 'react';
import toast from 'react-hot-toast';
// @ts-ignore
import specs from '@asyncapi/specs';
import { BaseModal } from './index';

import { ConverterService } from '../../services';
import state from '../../state';

export const ConverterModal: React.FunctionComponent = () => {
  const [version, setVersion] = useState('');

  const actualVersion = state.parser.parsedSpec.get()?.version();
  let allowedVersion = Object.keys(specs);
  allowedVersion.splice(0, allowedVersion.indexOf(actualVersion) + 1);

  const onSubmit = () => {
    toast.promise(ConverterService.convertSpec(version), {
      loading: 'Converting...',
      success: (
        <div>
          <span className="block text-bold">
            Document succesfully converted!
          </span>
        </div>
      ),
      error: (
        <div>
          <span className="block text-bold text-red-400">
            Failed to convert document.
          </span>
        </div>
      ),
    });
  };

  return (
    <BaseModal
      title="Convert AsyncAPI document"
      confirmText="Convert"
      confirmDisabled={!version || allowedVersion.length === 0}
      opener={
        <button
          type="button"
          className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
          title="Convert AsyncAPI document"
        >
          Convert document
        </button>
      }
      onSubmit={onSubmit}
    >
      <div className="flex content-center justify-center">
        {allowedVersion.length > 0 ? (
          <>
            <label
              htmlFor="asyncapi-version"
              className="flex justify-right items-center w-1/2 content-center  text-sm font-medium text-gray-700"
            >
              To version:
            </label>
            <select
              name="asyncapi-version"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
              onChange={e => setVersion(e.target.value)}
              value={version}
            >
              <option value="">Please Select</option>
              {allowedVersion.length > 1 && (
                <option value={ConverterService.getLastVersion()}>
                  Latest
                </option>
              )}
              {allowedVersion.map(v => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </>
        ) : (
          <div>Uses the latest version.</div>
        )}
      </div>
    </BaseModal>
  );
};
