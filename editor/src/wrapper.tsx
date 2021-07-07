import React from 'react';
import AsyncApiComponent, { AsyncApiProps } from '@asyncapi/react-component';

import { Editor, EditorProps, Content, Sidebar, Toolbar } from './components';

export interface AsyncApiEditorProps {
  componentProps?: AsyncApiProps;
  monacoEditor?: EditorProps;
}

const MonacoEditorWrapper: React.FunctionComponent<AsyncApiEditorProps> = ({
  componentProps = {
    schema: '',
    config: {},
  },
  monacoEditor = {},
}) => {
  return (
    <div className="flex flex-col h-full w-full h-screen">
      <Toolbar />
      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar />
        <Content />
      </div>
      {/* <Editor {...monacoEditor} />
      <AsyncApiComponent
        schema={componentProps.schema}
        config={componentProps.config}
      /> */}
    </div>
  );
};

export default MonacoEditorWrapper;
