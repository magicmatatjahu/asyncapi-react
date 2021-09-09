import React, { useEffect } from 'react';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { AsyncApiComponentWP } from '@asyncapi/react-component';

import state from '../../state';
import { NavigationService } from '../../services';

interface HTMLWrapperProps {}

export const HTMLWrapper: React.FunctionComponent<HTMLWrapperProps> = () => {
  const parserState = state.useParserState();
  const editorState = state.useEditorState();

  // using "json()"" for removing proxy from state
  let parsedSpec = parserState.parsedSpec.value;
  parsedSpec = parsedSpec
    ? new (AsyncAPIDocument as any)(parsedSpec.json())
    : null;

  useEffect(() => {
    if (editorState.loaded.get() === true) {
      setTimeout(NavigationService.scrollToHash, 100);
    }
  }, [editorState.loaded.get()]);

  return (
    parsedSpec && (
      <div>
        <AsyncApiComponentWP
          schema={parsedSpec}
          config={{ show: { errors: false } }}
        />
      </div>
    )
  );
};
