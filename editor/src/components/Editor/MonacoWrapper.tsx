import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
} from '@monaco-editor/react';
import * as monacoAPI from 'monaco-editor/esm/vs/editor/editor.api';

import { debounce } from '../../helpers';
import { EditorService, MonacoService, ParserService } from '../../services';
import state from '../../state';
import { SpecificationService } from '../../services/specification.service';

export interface MonacoWrapperProps extends MonacoEditorProps {}

export const MonacoWrapper: React.FunctionComponent<MonacoWrapperProps> = ({
  ...props
}) => {
  const editorState = state.useEditorState();

  async function handleEditorDidMount(
    editor: monacoAPI.editor.IStandaloneCodeEditor,
  ) {
    window.Editor = editor;
    ParserService.parseSpec(editorState.editorValue.value);

    editor.addCommand(
      monacoAPI.KeyMod.CtrlCmd | monacoAPI.KeyCode.KEY_S,
      function() {
        const editorValue = editorState.editorValue.value;
        localStorage.setItem('document', editorValue);
        toast.success(
          <div>
            <span className="block text-bold">
              Document succesfully saved to the cache!
            </span>
          </div>,
        );
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

    editorState.editorLoaded.set(true);
  }

  const onChange = debounce((v: string) => {
    EditorService.updateState(v);
    SpecificationService.parseSpec(v);
  }, 250);

  useEffect(() => {
    MonacoService.loadMonaco();
  }, []);

  return editorState.monacoLoaded.get() ? (
    <MonacoEditor
      language={editorState.language.get()}
      defaultValue={editorState.editorValue.get()}
      theme="asyncapi-theme"
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
