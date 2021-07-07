import { editorState, useEditorState } from './editor';
import { parserState, useParserState } from './parser';
import { sidebarState, useSidebarState } from './sidebar';

const state = {
  // editor
  editor: editorState,
  useEditorState,

  parser: parserState,
  useParserState,

  // sidebar
  sidebar: sidebarState,
  useSidebarState,
};

export default state;
