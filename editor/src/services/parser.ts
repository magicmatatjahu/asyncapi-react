import { parse } from '@asyncapi/parser';

import state from '../state';

export class ParserService {
  static parseSpec(spec: string) {
    const parserState = state.parser;
    parse(spec)
      .then(v => {
        parserState.parsedSpec.set(v);
        parserState.errors.set([]);
      })
      .catch(e => {
        let errors = [];
        if (
          ParserService.isValidationError(e) ||
          ParserService.isUnsupportedVersionError(e)
        ) {
          errors = e.validationErrors;
        }
        if (ParserService.isYamlError(e) || ParserService.isJsonError(e)) {
          errors = [e];
        }
        if (ParserService.isDereferenceError(e)) {
          errors = e.refs.map((ref: any) => ({
            title: e.title,
            location: { ...ref },
          }));
        }
        parserState.parsedSpec.set(null);
        parserState.errors.set(errors);
      });
  }

  static errorHasLocation(err: any) {
    return (
      ParserService.isValidationError(err) ||
      ParserService.isJsonError(err) ||
      ParserService.isYamlError(err) ||
      ParserService.isDereferenceError(err) ||
      ParserService.isUnsupportedVersionError(err)
    );
  }

  static isValidationError(err: any) {
    return (
      err &&
      err.type === 'https://github.com/asyncapi/parser-js/validation-errors'
    );
  }

  static isJsonError(err: any) {
    return (
      err && err.type === 'https://github.com/asyncapi/parser-js/invalid-json'
    );
  }

  static isYamlError(err: any) {
    return (
      err && err.type === 'https://github.com/asyncapi/parser-js/invalid-yaml'
    );
  }

  static isUnsupportedVersionError(err: any) {
    return (
      err &&
      err.type === 'https://github.com/asyncapi/parser-js/unsupported-version'
    );
  }

  static isDereferenceError(err: any) {
    return (
      err &&
      err.type === 'https://github.com/asyncapi/parser-js/dereference-error'
    );
  }
}
