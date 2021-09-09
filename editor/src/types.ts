import * as monacoAPI from 'monaco-editor/esm/vs/editor/editor.api';

declare global {
  interface Window {
    Editor: monacoAPI.editor.IStandaloneCodeEditor;
  }
}
