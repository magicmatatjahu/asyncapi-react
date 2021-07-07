import { loader } from '@monaco-editor/react';

import { schema } from './asyncapi-schema';
import state from '../state';

export class MonacoService {
  private static Monaco: any = null;
  private static Editor: any = null;

  static get monaco() {
    return MonacoService.Monaco;
  }
  static set monaco(value: any) {
    MonacoService.Monaco = value;
  }

  static get editor() {
    return MonacoService.Editor;
  }
  static set editor(value: any) {
    MonacoService.Editor = value;
  }

  static loadMonaco() {
    loader
      .init()
      .then(monacoInstance => {
        // for handling the monaco-yaml plugin
        (window as any).monaco = monacoInstance;
        monacoInstance.editor.defineTheme('asyncapi-theme', {
          base: 'vs-dark',
          inherit: true,
          colors: {
            'editor.background': '#252f3f',
            'editor.lineHighlightBackground': '#1f2a37',
          },
          rules: [{ token: '', background: '#252f3f' }],
        });
        // @ts-ignore
        import('monaco-yaml/lib/esm/monaco.contribution').then(() => {
          const options = {
            validate: true,
            enableSchemaRequest: true,
            completion: true,
            schemas: [
              {
                uri: 'http://myserver/foo-schema.json', // id of the first schema
                fileMatch: ['*'], // associate with our model
                schema: {
                  id: 'http://myserver/foo-schema.json',
                  ...schema,
                },
              },
            ],
          };

          const json = monacoInstance.languages.json;
          const yaml = (monacoInstance.languages as any).yaml;
          json && json.jsonDefaults.setDiagnosticsOptions(options);
          yaml && yaml.yamlDefaults.setDiagnosticsOptions(options);
          state.editor.monaco.set(() => monacoInstance);
        });
      })
      .catch(console.error);
  }
}
