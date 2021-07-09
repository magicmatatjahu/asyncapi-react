import React, { useEffect } from 'react';
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
} from '@monaco-editor/react';
import * as monacoAPI from 'monaco-editor/esm/vs/editor/editor.api';

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
    editor.addCommand(
      monacoAPI.KeyMod.CtrlCmd | monacoAPI.KeyCode.KEY_S,
      function() {
        console.log('SAVE pressed!');
      },
    );
    editor.addCommand(
      monacoAPI.KeyMod.CtrlCmd | monacoAPI.KeyCode.KEY_S,
      function() {
        console.log('LOL pressed!');
      },
    );
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
    console.log(v);
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
      // value={editorState.editorValue.get()}
      path={editorState.fileName.get()}
      // defaultLanguage={editorState.language.get()}
      defaultValue={editorState.editorValue.get()}
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
