// @ts-ignore
import { convert } from '@asyncapi/converter';
// @ts-ignore
import specs from '@asyncapi/specs';
import { FormatService } from './format.service';
import { ParserService } from './parser';

export class SpecificationService {
  static parseSpec(spec: string) {
    return ParserService.parseSpec(spec);
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
}
