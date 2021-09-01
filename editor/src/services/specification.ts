// @ts-ignore
import specs from '@asyncapi/specs';

export class SpecificationService {
  static getLastVersion() {
    return Object.keys(specs).pop();
  }
}
