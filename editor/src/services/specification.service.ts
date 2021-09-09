// @ts-ignore
import { convert } from '@asyncapi/converter';
import { parse, AsyncAPIDocument } from '@asyncapi/parser';
// @ts-ignore
import specs from '@asyncapi/specs';

import { FormatService } from './format.service';
import { MonacoService } from './monaco.service';

import state from '../state';

export class SpecificationService {
  static async parseSpec(spec: string): Promise<AsyncAPIDocument | void> {
    const parserState = state.parser;
    return parse(spec)
      .then(v => {
        parserState.parsedSpec.set(v);
        parserState.valid.set(true);
        parserState.errors.set([]);

        MonacoService.updateLanguageConfig(v);
        if (v.version() !== this.getLastVersion()) {
          state.spec.shouldOpenConvertModal.set(true);
        }

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
    if (this.isUnsupportedVersionError(err)) {
      errors.push({
        type: err.type,
        title: err.message,
        location: err.validationErrors,
      });
      state.spec.shouldOpenConvertModal.set(true);
    }
    if (this.isValidationError(err)) {
      errors.push(...err.validationErrors);
    }
    if (this.isYamlError(err) || this.isJsonError(err)) {
      errors.push(err);
    }
    if (this.isDereferenceError(err)) {
      errors.push(
        ...err.refs.map((ref: any) => ({
          type: err.type,
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

  static async convertSpec(
    spec: string,
    version: string = this.getLastVersion(),
  ): Promise<string> {
    const language = FormatService.retrieveLangauge(spec);
    try {
      const convertedSpec = convert(spec, version);
      return language === 'json'
        ? FormatService.convertToJson(convertedSpec)
        : convertedSpec;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static getSpecs() {
    return specs;
  }

  static getLastVersion() {
    return Object.keys(specs).pop();
  }

  static errorHasLocation(err: any) {
    return (
      this.isValidationError(err) ||
      this.isJsonError(err) ||
      this.isYamlError(err) ||
      this.isDereferenceError(err) ||
      this.isUnsupportedVersionError(err)
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

  static getAllRefs(): string[] {
    return [];
    // let jsonSpec: any;
    // try {
    //   const editorValue = state.editor.editorValue.get();

    //   // JSON or YAML String -> JS object
    //   jsonSpec = YAML.load(editorValue);
    // } catch (e) {
    //   console.error(e);
    // }

    // if (!jsonSpec) {
    //   return [];
    // }

    // const suggestions: string[] = [];
    // if (jsonSpec.components) {
    //   Object.keys(jsonSpec.components.schemas || {}).map(schemaName => {
    //     suggestions.push(`#/components/schemas/${schemaName}`);
    //   });
    // }
    // return suggestions;
  }
}
