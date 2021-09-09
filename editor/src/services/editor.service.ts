import * as monacoAPI from 'monaco-editor/esm/vs/editor/editor.api';

import fileDownload from 'js-file-download';

import state from '../state';
import { FormatService } from './format.service';
import { SpecificationService } from './specification.service';

export type AllowedLanguages = 'json' | 'yaml' | 'yml';

export class EditorService {
  static getInstance(): monacoAPI.editor.IStandaloneCodeEditor {
    return window.Editor;
  }

  static getValue() {
    return this.getInstance()
      .getModel()
      .getValue();
  }

  static updateState(
    content: string,
    updateModel: boolean = false,
    language?: AllowedLanguages,
  ) {
    if (!content) {
      return;
    }

    language = language || FormatService.retrieveLangauge(content);
    if (!language) {
      return;
    }

    switch (language) {
      case 'yaml':
      case 'yml': {
        state.editor.language.set('yaml');
        break;
      }
      default: {
        state.editor.language.set('json');
      }
    }
    state.editor.editorValue.set(content);

    if (updateModel) {
      const instance = this.getInstance();
      if (instance) {
        const model = instance.getModel();
        model && model.setValue(content);
      }
    }
  }

  static async importFromURL(url: string): Promise<void> {
    if (url) {
      return fetch(url)
        .then(res => res.text())
        .then(text => {
          this.updateState(text, true);
        })
        .catch(err => {
          console.error(err);
          throw err;
        });
    }
  }

  static async importFile(files: FileList) {
    if (files?.length !== 1) {
      return;
    }
    const file = files.item(0);
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = fileLoadedEvent => {
      const content = fileLoadedEvent.target?.result;
      console.log(content);
      this.updateState(String(content), true);
    };
    fileReader.readAsText(file, 'UTF-8');
  }

  static async importBase64(content: string) {
    try {
      const decoded = FormatService.decodeBase64(content);
      this.updateState(decoded, true);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async convertToYaml() {
    try {
      const yamlContent = FormatService.convertToYaml(this.getValue());
      this.updateState(yamlContent, true, 'yaml');
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async convertToJson() {
    try {
      const jsonContent = FormatService.convertToJson(this.getValue());
      this.updateState(jsonContent, true, 'json');
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async saveAsYaml() {
    try {
      const fileName = this.getFileName();
      const yamlContent = FormatService.convertToYaml(this.getValue());
      this.downloadFile(yamlContent, `${fileName}.yaml`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async saveAsJson() {
    try {
      const fileName = this.getFileName();
      const jsonContent = FormatService.convertToJson(this.getValue());
      this.downloadFile(jsonContent, `${fileName}.json`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async convertSpec(version?: string) {
    const converted = await SpecificationService.convertSpec(
      this.getValue(),
      version,
    );
    this.updateState(converted, true);
  }

  static downloadFile(content: string, fileName: string) {
    return fileDownload(content, fileName);
  }

  private static getFileName() {
    return 'asyncapi';
  }
}