import React from 'react';
// @ts-ignore
import Split from 'react-split';

const SplitWrapper: React.FunctionComponent = ({ children }) => (
  <Split
    style={{
      width: '100%',
      display: 'flex',
      background: '#f3f4f5',
    }}
    gutter={() => {
      const gutter = document.createElement('div');
      gutter.onmouseover = () => (gutter.style.cursor = 'ew-resize');
      return gutter;
    }}
    gutterStyle={() => ({
      backgroundColor: 'gray',
      width: '3px',
    })}
    minSize={0}
  >
    {children}
  </Split>
);

export default SplitWrapper;
