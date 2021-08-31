import React, { useEffect } from 'react';
import { AsyncApiProps } from '@asyncapi/react-component';
import { Toaster } from 'react-hot-toast';

import { Content, Sidebar, Toolbar } from './components';
import { EditorProps } from './components/Editor';
import { LoadingModal } from './components/Modals/LoadingModal';
import { WindowService } from './services';

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
  useEffect(() => {
    WindowService.onInit();
  }, []);

  return (
    <div className="flex flex-col h-full w-full h-screen">
      <Toolbar />
      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar />
        <Content />
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <LoadingModal title="Loading..." />
    </div>
  );
};

export default MonacoEditorWrapper;
