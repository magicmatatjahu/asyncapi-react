import { AsyncAPIDocument } from '@asyncapi/parser';
import { createState, useState } from '@hookstate/core';

export interface ParserState {
  parsedSpec: AsyncAPIDocument;
  errors: any[];
}

export const parserState = createState<ParserState>({
  parsedSpec: null,
  errors: [],
});

export function useParserState() {
  return useState(parserState);
}
