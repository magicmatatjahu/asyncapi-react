import React from 'react';
import AsyncApiComponent, { AsyncApiProps } from '@asyncapi/react-component';

import { Editor, EditorProps } from './components';

export interface AsyncApiEditorProps {
  componentProps?: AsyncApiProps;
  monacoEditor?: EditorProps;
}

const MonacoEditorWrapper: React.FunctionComponent<AsyncApiEditorProps> = ({
  componentProps = {
    schema: '',
    config: {},
  },
}) => {
  return (
    <div>
      <Editor />
      <AsyncApiComponent
        schema={componentProps.schema}
        config={componentProps.config}
      />
    </div>
  );
};

export default MonacoEditorWrapper;
