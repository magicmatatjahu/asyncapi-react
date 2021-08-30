import React from 'react';
import { AsyncApiProps } from '@asyncapi/react-component';
import { Toaster } from 'react-hot-toast';

import { EditorProps, Content, Sidebar, Toolbar } from './components';

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
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default MonacoEditorWrapper;
