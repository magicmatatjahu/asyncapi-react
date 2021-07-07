import React, { useEffect } from 'react';
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
} from '@monaco-editor/react';

import { debounce } from '../helpers';
import { ConverterService, MonacoService, ParserService } from '../services';
import state from '../state';

export interface EditorWrapperProps extends MonacoEditorProps {}

export const EditorWrapper: React.FunctionComponent<EditorWrapperProps> = ({
  ...props
}) => {
  const editorState = state.useEditorState();

  function handleEditorDidMount(editor: any) {
    // editorState.editor.set(editor);
    (window as any).Editor = editor;
    ParserService.parseSpec(editorState.editorValue.value);
    // workaround for autocompletion
    // editor.onKeyUp((e: any) => {
    //   const position = editor.getPosition();
    //   const text = editor.getModel().getLineContent(position.lineNumber).trim();
    //   if (e.keyCode === monaco.KeyCode.Enter && !text) {
    //     editor.trigger('', 'editor.action.triggerSuggest', '');
    //   }
    // });
  }

  const onChange = debounce((v: string) => {
    editorState.language.set(ConverterService.retrieveLangauge(v));
    editorState.editorValue.set(v);
    ParserService.parseSpec(v);
  }, 250);

  useEffect(() => {
    MonacoService.loadMonaco();
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
      onChange={onChange}
      options={{
        wordWrap: 'on',
        smoothScrolling: true,
      }}
      {...(props || {})}
    />
  ) : null;
};
