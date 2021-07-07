import { parse } from '@asyncapi/parser';

import state from '../state';
import {
  isValidationError,
  isUnsupportedVersionError,
  isYamlError,
  isJsonError,
  isDereferenceError,
} from './parser-errors';

const parserState = state.parser;

export function parseSpec(spec: string) {
  parse(spec)
    .then(v => {
      parserState.parsedSpec.set(v);
      parserState.errors.set([]);
    })
    .catch(e => {
      let errors = [];
      if (isValidationError(e) || isUnsupportedVersionError(e)) {
        errors = e.validationErrors;
      }
      if (isYamlError(e) || isJsonError(e)) {
        errors = [e];
      }
      if (isDereferenceError(e)) {
        errors = e.refs.map((ref: any) => ({
          title: e.title,
          location: { ...ref },
        }));
      }
      parserState.parsedSpec.set(null);
      parserState.errors.set(errors);
    });
}
