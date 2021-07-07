import React from 'react';

import { Dropdown } from './Dropdown';
import { ConverterService } from '../services';
import state from '../state';

interface EditorSidebarProps {}

export const EditorSidebar: React.FunctionComponent<EditorSidebarProps> = ({}) => {
  const editorState = state.useEditorState();
  const parserState = state.useParserState();

  const language = editorState.language.get();
  const isLatestVersion =
    parserState.parsedSpec.get() && parserState.parsedSpec.get().version();
  const hasParserErrors = parserState.errors.get().length > 0;

  const saveOptions = (
    <Dropdown
      opener={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
        </svg>
      }
      buttonHoverClassName="text-gray-500 hover:text-white"
    >
      <ul className="bg-gray-800 text-md text-white">
        <div className="border-b border-gray-700">
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title="Import AsyncAPI document"
              onClick={ConverterService.importFromURL}
            >
              Import from URL
            </button>
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

  const dropdown = (
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
      <ul className="bg-gray-800 text-md text-white">
        <div className="border-b border-gray-700">
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title="Import AsyncAPI document"
              onClick={ConverterService.importFromURL}
            >
              Import from URL
            </button>
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
        <div>
          <ul className="flex">
            <li>{/* {saveOptions} */}</li>
            <li>{dropdown}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
