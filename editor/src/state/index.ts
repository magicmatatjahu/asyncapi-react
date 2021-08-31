import { editorState, useEditorState } from './editor';
import { sidebarState, useSidebarState } from './sidebar';
import { parserState, useParserState } from './parser';
import { windowState, useWindowState } from './window';

const state = {
  // editor
  editor: editorState,
  useEditorState,

  // sidebar
  sidebar: sidebarState,
  useSidebarState,

  // parser
  parser: parserState,
  useParserState,

  // window
  window: windowState,
  useWindowState,
};

export default state;
