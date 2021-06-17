import React, { useRef } from 'react';
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
} from '@monaco-editor/react';

export interface EditorProps extends MonacoEditorProps {}

export const Editor: React.FunctionComponent<EditorProps> = ({
  language,
  theme,
  value,
  className,
  options,
  ...props
}) => {
  const editorRef = useRef(null);

  // function handleEditorWillMount(m: Monaco) {
  //   monaco = m;
  // }

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
  }

  return (
    <MonacoEditor
      language={language}
      theme={theme}
      value={value}
      className={className}
      options={options}
      // beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      {...props}
    />
  );
};
