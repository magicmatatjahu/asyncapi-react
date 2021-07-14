import React from 'react';
import SplitPane from 'react-split-pane';

import { EditorSidebar } from './EditorSidebar';
import { EditorWrapper } from './EditorWrapper';
// import { Terminal } from './Terminal';
import { Terminal } from './Terminal/Terminal';

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
        maxSize={-36}
        size={editorHeight}
        defaultSize={editorHeight}
      >
        <div className="flex flex-1 flex-col h-full overflow-hidden">
          <EditorSidebar />
          <EditorWrapper />
        </div>
        <Terminal />
      </SplitPane>
    </div>
  );
};
