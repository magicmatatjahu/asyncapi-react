import { loader } from '@monaco-editor/react';

import state from '../state';
import { schema } from './asyncapi-schema';

export function loadMonaco() {
  loader
    .init()
    .then(monacoInstance => {
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
