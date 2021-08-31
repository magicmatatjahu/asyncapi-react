import { ConverterService } from './converter';

import state from '../state';

export class WindowService {
  static onInit() {
    const urlParams = new URLSearchParams(window.location.search);

    const readonly = urlParams.get('readOnly') === '' ? false : true;
    state.window.params.readOnly.set(readonly);

    const documentUrl = urlParams.get('url');
    if (documentUrl) {
      ConverterService.importFromURL(documentUrl);
    }
  }
}
