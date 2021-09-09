import { appState, useAppState } from './app';
import { editorState, useEditorState } from './editor';
import { parserState, useParserState } from './parser';
import { sidebarState, useSidebarState } from './sidebar';

const state = {
  // app
  app: appState,
  useAppState,

  // editor
  editor: editorState,
  useEditorState,

  // parser
  parser: parserState,
  useParserState,

  // sidebar
  sidebar: sidebarState,
  useSidebarState,
};

export default state;
