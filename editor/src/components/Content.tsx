import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import SplitPane from 'react-split-pane';

import { Editor } from './Editor';
import { FilesExplorer } from './FilesExplorer';
import { Navigation } from './Navigation';
import { Template } from './Template';

import { debounce } from '../helpers';
import state from '../state';

import 'react-reflex/styles.css';

interface ContentProps {}

export const Content: React.FunctionComponent<ContentProps> = ({}) => {
  const sidebarState = state.useSidebarState();

  const filesExplorerEnabled = sidebarState.panels.filesExplorer.get();
  const navigationEnabled = sidebarState.panels.navigation.get();
  const editorEnabled = sidebarState.panels.editor.get();
  const templateEnabled = sidebarState.panels.template.get();

  // const navigationAndEditor = (
  //   <SplitPane
  //     minSize={220}
  //     maxSize={360}
  //     pane1Style={!navigationEnabled ? { width: '0px' } : { overflow: 'auto' }}
  //     pane2Style={!editorEnabled ? { width: '0px' } : undefined}
  //     primary={!editorEnabled ? 'second' : 'first'}
  //     defaultSize={
  //       parseInt(localStorage.getItem('splitPos:left') || '0', 10) || 220
  //     }
  //     onChange={debounce((size: string) => {
  //       localStorage.setItem('splitPos:left', String(size));
  //     }, 100)}
  //   >
  //     <Navigation />
  //     <Editor />
  //   </SplitPane>
  // );

  // return (
  //   <div className="flex flex-1 flex-row relative">
  //     {filesExplorerEnabled && <FilesExplorer />}
  //     <div className="flex flex-1 flex-row relative">
  //       <SplitPane
  //         minSize={0}
  //         pane1Style={
  //           !navigationEnabled && !editorEnabled ? { width: '0px' } : undefined
  //         }
  //         pane2Style={
  //           !templateEnabled ? { width: '0px' } : { overflow: 'auto' }
  //         }
  //         primary={!templateEnabled ? 'second' : 'first'}
  //         defaultSize={
  //           parseInt(localStorage.getItem('splitPos:center') || '0', 10) ||
  //           '55%'
  //         }
  //         onChange={debounce((size: string) => {
  //           localStorage.setItem('splitPos:center', String(size));
  //         }, 100)}
  //       >
  //         {navigationAndEditor}
  //         <Template />
  //       </SplitPane>
  //     </div>
  //   </div>
  // );

  return (
    <ReflexContainer orientation="vertical">
      {filesExplorerEnabled && (
        <ReflexElement
          size={240}
          onResize={props => {
            const offsetWidth = (props.domElement as any)?.offsetWidth;
            if (offsetWidth < 75) {
              sidebarState.panels.filesExplorer.set(false);
            }
          }}
        >
          <FilesExplorer />
        </ReflexElement>
      )}

      {filesExplorerEnabled && <ReflexSplitter />}

      {navigationEnabled && (
        <ReflexElement
          size={240}
          onResize={props => {
            const offsetWidth = (props.domElement as any)?.offsetWidth;
            if (offsetWidth < 75) {
              sidebarState.panels.navigation.set(false);
            }
          }}
        >
          <Navigation />
        </ReflexElement>
      )}

      {navigationEnabled && <ReflexSplitter />}

      {editorEnabled && (
        <ReflexElement>
          <Editor />
        </ReflexElement>
      )}

      {editorEnabled && <ReflexSplitter />}

      {templateEnabled && (
        <ReflexElement>
          <Template />
        </ReflexElement>
      )}
    </ReflexContainer>
  );
};
