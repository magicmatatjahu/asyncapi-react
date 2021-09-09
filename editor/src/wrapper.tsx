import React, { useEffect } from 'react';
import { AsyncApiProps } from '@asyncapi/react-component';
import { Toaster } from 'react-hot-toast';

import { Content, Sidebar, Toolbar } from './components';
import { EditorProps } from './components/Editor';
import { LoadingModal } from './components/Modals/LoadingModal';
import { NavigationService } from './services';

import state from './state';

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
  const appState = state.useAppState();
  const isReadOnly = NavigationService.isReadOnly();

  useEffect(() => {
    NavigationService.onInit();
  }, []);

  if (appState.initialized.get() === false) {
    return (
      <div className="flex flex-col h-full w-full h-screen">
        <LoadingModal title="Loading..." />
      </div>
    );
  }

  if (isReadOnly) {
    return (
      <div className="flex flex-row flex-1 overflow-hidden h-full w-full h-screen">
        <Content />
        <LoadingModal title="Loading..." />
      </div>
    );
  }

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
