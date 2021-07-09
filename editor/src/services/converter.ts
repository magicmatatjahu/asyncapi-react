// @ts-ignore
import { convert } from '@asyncapi/converter';
import fileDownload from 'js-file-download';
import YAML from 'js-yaml';

import state from '../state';

type AllowedLanguages = 'json' | 'yaml' | 'yml';

export class ConverterService {
  static convertSpec() {
    try {
      const rawSpec = state.editor.editorValue.get();
      const convertedSpec = convert(rawSpec, '2.0.0');
      (window as any).Editor.getModel().setValue(convertedSpec as string);
    } catch (e) {
      console.error(e);
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
    (window as any).Editor.getModel().setValue(content as string);
  }

  static importFromURL(url: string) {
    const language = url?.split('.').pop() as AllowedLanguages;
    if (url) {
      fetch(url)
        .then(res => res.text())
        .then(text => {
          ConverterService.updateEditorContent(text, language);
        })
        .catch(console.error);
    }
  }

  static importFile(e: React.ChangeEvent<HTMLInputElement>) {
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

  static importBase64(value: string) {
    try {
      const decoded = decodeURIComponent(escape(window.atob(value)));
      ConverterService.updateEditorContent(decoded);
    } catch (e) {
      console.error(e);
    }
  }

  static saveAsJson() {
    try {
      const jsonContent = ConverterService.convertToJson();
      const fileName = ConverterService.getFileName();
      ConverterService.downloadFile(jsonContent, `${fileName}.json`);
    } catch (e) {
      console.error(e);
    }
  }

  static saveAsYaml() {
    try {
      const yamlContent = ConverterService.convertToYaml();

      const fileName = ConverterService.getFileName();
      ConverterService.downloadFile(yamlContent, `${fileName}.yaml`);
    } catch (e) {
      console.error(e);
    }
  }

  static convertToYamlInEditor() {
    try {
      const yamlContent = ConverterService.convertToYaml();
      ConverterService.updateEditorContent(yamlContent, 'yaml');
    } catch (e) {
      console.error(e);
    }
  }

  static convertToYaml() {
    try {
      const editorValue = state.editor.editorValue.get();

      // Editor content -> JS object -> YAML string
      const jsonContent = YAML.load(editorValue);
      return YAML.dump(jsonContent);
    } catch (e) {
      console.error(e);
    }
  }

  static convertToJsonInEditor() {
    try {
      const jsonContent = ConverterService.convertToJson();
      ConverterService.updateEditorContent(jsonContent, 'json');
    } catch (e) {
      console.error(e);
    }
  }

  static convertToJson() {
    try {
      const editorValue = state.editor.editorValue.get();

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
