import React from 'react';
import toast from 'react-hot-toast';
import { FaEllipsisH } from 'react-icons/fa';

import {
  ImportURLModal,
  ImportBase64Modal,
  ShareBase64Modal,
  ConverterModal,
} from '../Modals';
import { Dropdown } from '../Dropdown';

import { ConverterService } from '../../services';
import state from '../../state';

interface EditorSidebarProps {}

export const EditorSidebar: React.FunctionComponent<EditorSidebarProps> = ({}) => {
  const editorState = state.useEditorState();
  const parserState = state.useParserState();

  const language = editorState.language.get();
  const hasParserErrors = parserState.errors.get().length > 0;

  const dropdown = (
    <Dropdown
      opener={<FaEllipsisH />}
      buttonHoverClassName="text-gray-500 hover:text-white"
    >
      <ul className="bg-gray-800 text-md text-white">
        <div className="border-b border-gray-700">
          <li className="hover:bg-gray-900">
            <ImportURLModal />
          </li>
          <li className="hover:bg-gray-900">
            <label
              className="block px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer"
              title="Import File"
            >
              <input
                type="file"
                style={{ position: 'fixed', top: '-100em' }}
                onChange={e => {
                  toast.promise(ConverterService.importFile(e), {
                    loading: 'Importing...',
                    success: (
                      <div>
                        <span className="block text-bold">
                          Document succesfully imported!
                        </span>
                      </div>
                    ),
                    error: (
                      <div>
                        <span className="block text-bold text-red-400">
                          Failed to import document.
                        </span>
                      </div>
                    ),
                  });
                }}
              />
              Import File
            </label>
          </li>
          <li className="hover:bg-gray-900">
            <ImportBase64Modal />
          </li>
        </div>
        <div className="border-b border-gray-700">
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title={`Save as ${language === 'yaml' ? 'YAML' : 'JSON'}`}
              onClick={() => {
                toast.promise(
                  language === 'yaml'
                    ? ConverterService.saveAsYaml()
                    : ConverterService.saveAsJson(),
                  {
                    loading: 'Saving...',
                    success: (
                      <div>
                        <span className="block text-bold">
                          Document succesfully saved!
                        </span>
                      </div>
                    ),
                    error: (
                      <div>
                        <span className="block text-bold text-red-400">
                          Failed to save document.
                        </span>
                      </div>
                    ),
                  },
                );
              }}
              disabled={hasParserErrors}
            >
              Save as {language === 'yaml' ? 'YAML' : 'JSON'}
            </button>
          </li>
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title={`Convert and save as ${
                language === 'yaml' ? 'JSON' : 'YAML'
              }`}
              onClick={() => {
                toast.promise(
                  language === 'yaml'
                    ? ConverterService.saveAsJson()
                    : ConverterService.saveAsJson(),
                  {
                    loading: 'Saving...',
                    success: (
                      <div>
                        <span className="block text-bold">
                          Document succesfully converted and saved!
                        </span>
                      </div>
                    ),
                    error: (
                      <div>
                        <span className="block text-bold text-red-400">
                          Failed to convert and save document.
                        </span>
                      </div>
                    ),
                  },
                );
              }}
              disabled={hasParserErrors}
            >
              Convert and save as {language === 'yaml' ? 'JSON' : 'YAML'}
            </button>
          </li>
        </div>
        <div className="border-b border-gray-700">
          <li className="hover:bg-gray-900">
            <ShareBase64Modal />
          </li>
        </div>
        <div>
          <li className="hover:bg-gray-900">
            <button
              type="button"
              className="px-4 py-1 w-full text-left text-sm rounded-md focus:outline-none transition ease-in-out duration-150"
              title={`Convert to ${language === 'yaml' ? 'JSON' : 'YAML'}`}
              onClick={() => {
                toast.promise(
                  language === 'yaml'
                    ? ConverterService.convertToJsonInEditor()
                    : ConverterService.convertToYamlInEditor(),
                  {
                    loading: 'Saving...',
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
                  },
                );
              }}
              disabled={hasParserErrors}
            >
              Convert to {language === 'yaml' ? 'JSON' : 'YAML'}
            </button>
          </li>
          <li className="hover:bg-gray-900">
            <ConverterModal />
          </li>
        </div>
      </ul>
    </Dropdown>
  );

  return (
    <div
      className="bg-gray-800 border-b border-gray-700 text-sm"
      style={{ height: '30px', lineHeight: '30px' }}
    >
      <div
        className="flex flex-row items-center justify-end"
        style={{ height: '30px', lineHeight: '30px' }}
      >
        <div>
          <ul className="flex">
            <li>{dropdown}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
