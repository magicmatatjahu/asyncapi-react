import React, { useRef } from 'react';
import { FaEllipsisH, FaFileImport } from 'react-icons/fa';

import { Dropdown } from './Dropdown';
import { ConverterService } from '../services';
import state from '../state';
import { Modal } from './Modal';

interface EditorSidebarProps {}

export const EditorSidebar: React.FunctionComponent<EditorSidebarProps> = ({}) => {
  const importUrlModalRef = useRef();

  const editorState = state.useEditorState();
  const parserState = state.useParserState();

  const language = editorState.language.get();
  const isLatestVersion =
    parserState.parsedSpec.get() && parserState.parsedSpec.get().version();
  const hasParserErrors = parserState.errors.get().length > 0;

  const onImportFormSubmit = e => {
    e.preventDefault();
    const url = e.target[0].value;
    ConverterService.importFromURL(url);
    (importUrlModalRef.current as any)?.closeModal();
  };

  const importFromUrl = (
    <Modal
      ref={importUrlModalRef}
      opener={
        <button
          type="button"
          className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
          title="Import AsyncAPI document"
          // onClick={ConverterService.importFromURL}
        >
          Import from URL
        </button>
      }
      title={
        <h4 className="text-gray-700 text-lg font-semibold">
          Import specification from URL
        </h4>
      }
      body={
        <div>
          <form className="flex flex-col" onSubmit={onImportFormSubmit}>
            <div className="p-4">
              <input
                type="url"
                required
                autoFocus
                // onKeyUp={e => (e.keyCode === 27 && setImporting(false)) }
                // onInput={onImportInput}
                className="block flex-1 px-4 py-1 rounded-md border-gray-900 text-sm leading-5 text-gray-700 bg-white hover:text-gray-900 focus:outline-none focus:text-gray-900 w-96"
                placeholder="Type the URL of the AsyncAPI document to import..."
              />
            </div>
            <div className="flex items-center justify-end p-2 px-4 border-t border-solid border-blueGray-200 rounded-b">
              <span className="block rounded-md shadow-sm ml-3">
                <button
                  type="submit"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 focus:outline-none transition ease-in-out duration-150"
                >
                  Import
                  <FaFileImport className="ml-2" />
                </button>
              </span>
            </div>
          </form>
        </div>
      }
    />
  );

  const dropdown = (
    <Dropdown
      opener={<FaEllipsisH />}
      buttonHoverClassName="text-gray-500 hover:text-white"
    >
      <ul className="bg-gray-800 text-md text-white">
        <div className="border-b border-gray-700">
          <li className="hover:bg-gray-900">
            {importFromUrl}
            {/* <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title="Import AsyncAPI document"
              onClick={ConverterService.importFromURL}
            >
              Import from URL
            </button> */}
          </li>
          <li className="hover:bg-gray-900">
            <label
              className="block px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer"
              title="Import AsyncAPI document"
            >
              <input
                type="file"
                style={{ position: 'fixed', top: '-100em' }}
                onChange={ConverterService.importFile}
              />
              Import File
            </label>
          </li>
        </div>
        <div className="border-b border-gray-700">
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title="Import AsyncAPI document"
              onClick={
                language === 'yaml'
                  ? ConverterService.saveAsYaml
                  : ConverterService.saveAsJson
              }
              disabled={hasParserErrors}
            >
              Save as {language === 'yaml' ? 'YAML' : 'JSON'}
            </button>
          </li>
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title="Import AsyncAPI document"
              onClick={
                language === 'yaml'
                  ? ConverterService.saveAsJson
                  : ConverterService.saveAsYaml
              }
              disabled={hasParserErrors}
            >
              Convert and save as {language === 'yaml' ? 'JSON' : 'YAML'}
            </button>
          </li>
        </div>
        <div>
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title="Import AsyncAPI document"
              onClick={
                language === 'yaml'
                  ? ConverterService.convertToJsonInEditor
                  : ConverterService.convertToYamlInEditor
              }
              disabled={hasParserErrors}
            >
              Convert to {language === 'yaml' ? 'JSON' : 'YAML'}
            </button>
          </li>
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150 disabled:opacity-50"
              title="Import AsyncAPI document"
              onClick={ConverterService.convertSpec}
              disabled={isLatestVersion === '2.0.0'}
            >
              Convert to latest version
            </button>
          </li>
        </div>
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
        <div style={{ height: '30px', lineHeight: '30px' }}>
          <ul className="flex">
            <li>{dropdown}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
