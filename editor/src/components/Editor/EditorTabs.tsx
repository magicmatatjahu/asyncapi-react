import React, { useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

import state from '../../state';

interface EditorTabsProps {
  tabs?: Array<{
    fileName: string;
    language: string;
    value: string;
  }>;
  activeFile?: string;
}

export const EditorTabs: React.FunctionComponent<EditorTabsProps> = ({
  // tabs = [],
  activeFile = 'asyncapi',
}) => {
  const editorState = state.useEditorState();
  const files = editorState.files.get();

  const [tabs, setTabs] = useState(files);
  const [activeFileName, setActiveTab] = useState(activeFile);

  if (tabs.length === 0) {
    return null;
  }

  useEffect(() => {
    const openedFile = files.find(t => t.path === activeFileName);
    editorState.fileName.set(openedFile.path);
    editorState.language.set(openedFile.language);
    editorState.editorValue.set(openedFile.fileValue);
  }, [activeFileName]);

  return (
    <ul className="flex flex-row">
      {tabs.map(tab => (
        <li
          key={tab.path}
          className={`${
            tab.path === activeFileName
              ? 'bg-gray-900 text-white'
              : 'bg-gray-700 text-gray-400'
          } px-2 cursor-pointer`}
          onClick={() => {
            setActiveTab(tab.path);
          }}
        >
          <div className="flex flex-row items-center">
            <div>
              {tab.path}.{tab.language}
            </div>
            <div className={`ml-2`}>
              <VscChromeClose
                onClick={() => {
                  setTabs(previous =>
                    previous.filter(t => t.path !== tab.path),
                  );
                }}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
