import React, { useEffect, useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

import state from '../state';

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

  const _tabs = [
    {
      fileName: 'asyncapi',
      language: 'yaml',
      value: editorState.editorValue.get(),
    },
    {
      fileName: 'dupa',
      language: 'json',
      value: 'dsd',
    },
    {
      fileName: 'cycki',
      language: 'json',
      value: 'isdoisdoih',
    },
  ];
  const [tabs, setTabs] = useState(_tabs);
  const [activeFileName, setSctiveTab] = useState(activeFile);

  if (tabs.length === 0) {
    return null;
  }

  useEffect(() => {
    const tab = _tabs.find(t => t.fileName === activeFileName);
    editorState.fileName.set(tab.fileName);
    editorState.language.set(tab.language);
    const editor = (window as any).Editor;
    // if (editor) {
    //   console.log(editor.getModel().getValue())
    // }
    editorState.editorValue.set(tab.value);
  }, [activeFileName]);

  return (
    <ul className="flex flex-row">
      {tabs.map(tab => (
        <li
          key={tab.fileName}
          className={`${
            tab.fileName === activeFileName
              ? 'bg-gray-900 text-white'
              : 'bg-gray-700 text-gray-400'
          } px-2 cursor-pointer`}
          onClick={() => setSctiveTab(tab.fileName)}
        >
          <div className="group flex flex-row items-center">
            <div>
              {tab.fileName}.{tab.language}
            </div>
            <div className={`ml-2 invisible group-hover:visible`}>
              <VscChromeClose
                onClick={() =>
                  setTabs(previous =>
                    previous.filter(t => t.fileName !== tab.fileName),
                  )
                }
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
