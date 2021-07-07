import React from 'react';
import SplitPane from 'react-split-pane';

import { EditorSidebar } from './EditorSidebar';
import { EditorWrapper } from './EditorWrapper';
import { Terminal } from './Terminal';

import state from '../state';

export interface EditorProps {}

export const Editor: React.FunctionComponent<EditorProps> = props => {
  const editorState = state.useEditorState();
  const editorHeight = editorState.height.get();

  return (
    <div className="flex flex-1 overflow-hidden">
      <SplitPane
        split="horizontal"
        minSize={29}
        maxSize={-30}
        size={editorHeight}
        defaultSize={editorHeight}
      >
        <div className="flex flex-1 flex-col h-full overflow-hidden">
          <EditorSidebar />
          <EditorWrapper />
        </div>
        <div className="bg-gray-900 border-t border-gray-700 flex-grow relative h-full overflow-hidden">
          <Terminal />
        </div>
      </SplitPane>
    </div>
  );
};
