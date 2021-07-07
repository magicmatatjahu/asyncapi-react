import React, { useEffect } from 'react';
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
} from '@monaco-editor/react';

import state from '../state';
import { debounce, loadMonaco, parseSpec } from '../helpers';

export interface EditorWrapperProps extends MonacoEditorProps {}

export const EditorWrapper: React.FunctionComponent<EditorWrapperProps> = ({
  ...props
}) => {
  const editorState = state.useEditorState();

  function handleEditorDidMount(editor: any) {
    // editorState.editor.set(editor);
    (window as any).Editor = editor;
    parseSpec(editorState.editorValue.value);
    // workaround for autocompletion
    // editor.onKeyUp((e: any) => {
    //   const position = editor.getPosition();
    //   const text = editor.getModel().getLineContent(position.lineNumber).trim();
    //   if (e.keyCode === monaco.KeyCode.Enter && !text) {
    //     editor.trigger('', 'editor.action.triggerSuggest', '');
    //   }
    // });
  }

  useEffect(() => {
    loadMonaco();
  }, []);

  return editorState.monaco.get() ? (
    <MonacoEditor
      language={editorState.language.get()}
      theme="asyncapi-theme"
      value={editorState.editorValue.get()}
      // path={file.name}
      // defaultLanguage={file.language}
      // defaultValue={file.value}
      // className={className}
      // beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      onChange={debounce((v: string) => {
        parseSpec(v);
        editorState.editorValue.set(v);
      }, 250)}
      options={{
        wordWrap: 'on',
        smoothScrolling: true,
      }}
      {...(props || {})}
    />
  ) : null;
};
