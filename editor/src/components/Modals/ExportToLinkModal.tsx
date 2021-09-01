import React from 'react';
import toast from 'react-hot-toast';
import { BaseModal } from './index';

import { ConverterService, WindowService } from '../../services';
import state from '../../state';

export const ExportToLinkModal: React.FunctionComponent = () => {
  const editorState = state.useEditorState();
  const document = editorState.editorValue.get();
  const base64Document = ConverterService.exportToBase64(document);
  const link = WindowService.createLink(base64Document);

  function onClickCopy() {
    if (typeof navigator !== undefined) {
      return navigator.clipboard && navigator.clipboard.writeText(link);
    }
    return Promise.resolve();
  }

  const onSubmit = () => {
    toast.promise(onClickCopy(), {
      loading: 'Copying...',
      success: (
        <div>
          <span className="block text-bold">Succesfully copied!</span>
        </div>
      ),
      error: (
        <div>
          <span className="block text-bold text-red-400">Failed to copy.</span>
        </div>
      ),
    });
  };

  return (
    <BaseModal
      title="Export AsyncAPI document to Base64 Link"
      confirmText="Copy"
      confirmDisabled={false}
      opener={
        <button
          type="button"
          className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
          title="Export to Link"
        >
          Export to Link
        </button>
      }
      onSubmit={onSubmit}
    >
      <div className="flex content-center justify-center">
        <label
          htmlFor="base64-source"
          className="flex justify-right items-center w-1/2 content-center  text-sm font-medium text-gray-700 hidden"
        >
          Link
        </label>
        <textarea
          name="base64-source"
          className="shadow-sm focus:ring-pink-500 focus:border-pink-500 w-1/2 block w-full sm:text-sm border-gray-300 rounded-md"
          rows={10}
          value={link}
          readOnly={true}
        />
      </div>
    </BaseModal>
  );
};
