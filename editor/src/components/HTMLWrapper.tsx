import React from 'react';
import { AsyncAPIDocument } from '@asyncapi/parser';
import { AsyncApiComponentWP } from '@asyncapi/react-component';

import state from '../state';

interface HTMLWrapperProps {}

export const HTMLWrapper: React.FunctionComponent<HTMLWrapperProps> = () => {
  const parserState = state.useParserState();
  const parsedSpec = parserState.parsedSpec.value
    ? new (AsyncAPIDocument as any)(parserState.parsedSpec.value.json())
    : null;

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
