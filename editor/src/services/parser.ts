import { AsyncAPIDocument, parse } from '@asyncapi/parser';
import YAML from 'js-yaml';

import state from '../state';
import { MonacoService } from './monaco.service';

export class ParserService {
  static async parseSpec(spec: string): Promise<AsyncAPIDocument | void> {
    const parserState = state.parser;
    return parse(spec)
      .then(v => {
        parserState.parsedSpec.set(v);
        parserState.valid.set(true);
        parserState.errors.set([]);
        MonacoService.updateLanguageConfig(v);
        return v;
      })
      .catch(err => {
        const errors = this.filterErrors(err);
        parserState.parsedSpec.set(null);
        parserState.valid.set(false);
        parserState.errors.set(errors);
      });
  }

  private static filterErrors(err: any) {
    let errors = [];
    if (ParserService.isUnsupportedVersionError(err)) {
      errors.push({
        title: err.message,
        location: err.validationErrors,
      });
    }
    if (ParserService.isValidationError(err)) {
      errors.push(...err.validationErrors);
    }
    if (ParserService.isYamlError(err) || ParserService.isJsonError(err)) {
      errors.push(err);
    }
    if (ParserService.isDereferenceError(err)) {
      errors.push(
        ...err.refs.map((ref: any) => ({
          title: err.title,
          location: { ...ref },
        })),
      );
    }
    if (errors.length === 0) {
      errors.push(err);
    }
    return errors;
  }

  private static errorHasLocation(err: any) {
    return (
      ParserService.isValidationError(err) ||
      ParserService.isJsonError(err) ||
      ParserService.isYamlError(err) ||
      ParserService.isDereferenceError(err) ||
      ParserService.isUnsupportedVersionError(err)
    );
  }

  private static isValidationError(err: any) {
    return (
      err &&
      err.type === 'https://github.com/asyncapi/parser-js/validation-errors'
    );
  }

  private static isJsonError(err: any) {
    return (
      err && err.type === 'https://github.com/asyncapi/parser-js/invalid-json'
    );
  }

  private static isYamlError(err: any) {
    return (
      err && err.type === 'https://github.com/asyncapi/parser-js/invalid-yaml'
    );
  }

  private static isUnsupportedVersionError(err: any) {
    return (
      err &&
      err.type === 'https://github.com/asyncapi/parser-js/unsupported-version'
    );
  }

  private static isDereferenceError(err: any) {
    return (
      err &&
      err.type === 'https://github.com/asyncapi/parser-js/dereference-error'
    );
  }

  static getAllRefs(): string[] {
    let jsonSpec: any;
    try {
      const editorValue = state.editor.editorValue.get();

      // JSON or YAML String -> JS object
      jsonSpec = YAML.load(editorValue);
    } catch (e) {
      console.error(e);
    }

    if (!jsonSpec) {
      return [];
    }

    const suggestions: string[] = [];
    if (jsonSpec.components) {
      Object.keys(jsonSpec.components.schemas || {}).map(schemaName => {
        suggestions.push(`#/components/schemas/${schemaName}`);
      });
    }
    return suggestions;
  }
}
