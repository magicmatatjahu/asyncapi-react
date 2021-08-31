// @ts-ignore
import { convert } from '@asyncapi/converter';
// @ts-ignore
import specs from '@asyncapi/specs';
import fileDownload from 'js-file-download';
import YAML from 'js-yaml';

import state from '../state';

type AllowedLanguages = 'json' | 'yaml' | 'yml';

export class ConverterService {
  static getLastVersion(): string {
    return Object.keys(specs).pop();
  }

  static async convertSpec(version: string = this.getLastVersion()) {
    try {
      const initLanguage = state.editor.language.get();
      const rawSpec = state.editor.editorValue.get();
      let convertedSpec = convert(rawSpec, version);
      convertedSpec =
        initLanguage === 'json'
          ? this.convertToJson(convertedSpec)
          : convertedSpec;
      this.updateEditorContent(convertedSpec);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static updateEditorContent(content: string, language?: AllowedLanguages) {
    if (!content) {
      return;
    }
    if (!language) {
      language = ConverterService.retrieveLangauge(content);
    }
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
    state.editor.processedValue.set(content as string);
  }

  static async importFromURL(url: string) {
    if (url) {
      fetch(url)
        .then(res => res.text())
        .then(text => {
          const language = url?.split('.').pop() as AllowedLanguages;
          ConverterService.updateEditorContent(text, language);
        })
        .catch(err => {
          console.error(err);
          throw err;
        });
    }
  }

  static async importFile(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target?.files;
    if (files?.length !== 1) {
      return;
    }
    const file = files.item(0);
    if (!file) {
      return;
    }
    const language = file.name.split('.').pop() as AllowedLanguages;

    const fileReader = new FileReader();
    fileReader.onload = fileLoadedEvent => {
      const content = fileLoadedEvent.target?.result;
      ConverterService.updateEditorContent(content as string, language);
    };
    fileReader.readAsText(file, 'UTF-8');
  }

  static async importBase64(value: string) {
    try {
      const decoded = decodeURIComponent(escape(window.atob(value)));
      ConverterService.updateEditorContent(decoded);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static exportToBase64(value: string): string | never {
    try {
      return decodeURIComponent(escape(window.btoa(value)));
    } catch (err) {
      console.error(err);
    }
  }

  static async saveAsJson() {
    try {
      const jsonContent = ConverterService.convertToJson();
      const fileName = ConverterService.getFileName();
      ConverterService.downloadFile(jsonContent, `${fileName}.json`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async saveAsYaml() {
    try {
      const yamlContent = ConverterService.convertToYaml();
      const fileName = ConverterService.getFileName();
      ConverterService.downloadFile(yamlContent, `${fileName}.yaml`);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async convertToYamlInEditor() {
    try {
      const yamlContent = ConverterService.convertToYaml();
      ConverterService.updateEditorContent(yamlContent, 'yaml');
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static convertToYaml(content?: string) {
    try {
      const editorValue = content || state.editor.editorValue.get();
      // Editor content -> JS object -> YAML string
      const jsonContent = YAML.load(editorValue);
      return YAML.dump(jsonContent);
    } catch (err) {
      console.error(err);
    }
  }

  static async convertToJsonInEditor() {
    try {
      const jsonContent = ConverterService.convertToJson();
      ConverterService.updateEditorContent(jsonContent, 'json');
    } catch (e) {
      console.error(e);
    }
  }

  static convertToJson(content?: string) {
    try {
      const editorValue = content || state.editor.editorValue.get();

      // JSON or YAML String -> JS object
      const jsonContent = YAML.load(editorValue);

      // JS Object -> pretty JSON string
      return JSON.stringify(jsonContent, null, 2);
    } catch (e) {
      console.error(e);
    }
  }

  static retrieveLangauge(content: string) {
    if (content.trim()[0] === '{') {
      return 'json';
    }
    return 'yaml';
  }

  static getFileName() {
    return 'asyncapi';
  }

  static downloadFile(content: string, fileName: string) {
    return fileDownload(content, fileName);
  }
}
