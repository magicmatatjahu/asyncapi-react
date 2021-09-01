import { ConverterService } from './converter';

import state from '../state';
import { ParserService } from './parser';

export class WindowService {
  static onInit() {
    const urlParams = new URLSearchParams(window.location.search);

    const documentUrl = urlParams.get('url');
    const base64Document = urlParams.get('base64');
    const readonly =
      urlParams.get('readOnly') || urlParams.get('readOnly') === ''
        ? true
        : false;

    if (!documentUrl && !base64Document) {
      return;
    }

    if (documentUrl) {
      ConverterService.importFromURL(documentUrl);
    } else if (base64Document) {
      ConverterService.importBase64(base64Document);
      state.editor.editorValue.set(state.editor.processedValue.get());
    }

    if (readonly) {
      state.sidebar.show.set(false);
      state.sidebar.panels.editor.set(false);
      state.editor.loaded.set(true);
      ParserService.parseSpec(
        state.editor.processedValue.get() || state.editor.editorValue.get(),
      );
    }
  }

  static createLink(base64Document: string) {
    return window.location.origin + '/?base64=' + base64Document;
  }
}
