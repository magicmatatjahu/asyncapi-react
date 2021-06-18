/* eslint import/no-webpack-loader-syntax: off */

import React, { useEffect, useState } from 'react';
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
  loader,
} from '@monaco-editor/react';

// import { schema } from "./schema";

// NOTE: using loader syntax becuase Yaml worker imports editor.worker directly and that
// import shouldn't go through loader syntax.
// @ts-ignore
// import EditorWorker from 'worker-loader!monaco-editor/esm/vs/editor/editor.worker';
// @ts-ignore
// import YamlWorker from 'worker-loader!monaco-yaml/lib/esm/yaml.worker';
// @ts-ignore
// import TSWorker from 'worker-loader!monaco-editor/esm/vs/language/typescript/ts.worker';

(window as any).MonacoEnvironment = {
  // getWorkerUrl: function (moduleId: string, label: string) {
  //   console.log('getWorkerUrl', moduleId, label)
  // },
  // getWorker: function (moduleId: string, label: string) {
  //     console.log('getWorker', moduleId, label);
  //     return 'https://cdn.jsdelivr.net/npm/monaco-editor@0.25.0/min/vs/base/worker/workerMain.js'
  // }
};

// /Users/matatjahu/Documents/AsyncAPI/asyncapi-react/playground/node_modules/monaco-editor/min/vs/editor/editor.main.js
// const original = (window as any).MonacoEnvironment || {
//   getWorkerUrl(_: any, label: any) { console.log(label); return "" }
// };
// (window as any).MonacoEnvironment = {
//   ...original,
//   getWorkerUrl(_: any, label: any) {
//     console.log(label)
//     if (label === 'yaml') {
//       return './static/js/bundle.worker.js'
//     }
//     return original.getWorkerUrl(_, label);
//   },
// };
// @ts-ignore
const global = window;

// import 'monaco-yaml/lib/esm/monaco.contribution';

// @ts-ignore
// let editor: any;
// @ts-ignore
let Monaco: any;

export interface EditorProps extends MonacoEditorProps {}

export const Editor: React.FunctionComponent<EditorProps> = ({
  language,
  theme,
  value,
  className,
  options,
  ...props
}) => {
  const [init, setInit] = useState(false);

  // function handleEditorDidMount(editor, monaco) {
  //   // here is another way to get monaco instance
  //   // you can also store it in `useRef` for further usage
  // }

  useEffect(() => {
    loader
      .init()
      .then(monacoInstance => {
        Monaco = monacoInstance;
        (global as any).monaco = Monaco;
        monacoInstance.editor.defineTheme('asyncapi-theme', {
          base: 'vs-dark',
          inherit: true,
          colors: {
            'editor.background': '#252f3f',
          },
          rules: [{ token: '', background: '#252f3f' }],
        });
        // (window as any).MonacoEnvironment = {
        //   ...oldEnv,
        //   getWorkerUrl(moduleId, label) {
        //     console.log(moduleId, label)
        //     return oldEnv.getWorkerUrl(moduleId, label);
        //   },
        // };
        // @ts-ignore
        import('monaco-yaml/lib/esm/monaco.contribution').then(_ => {
          const yaml = Monaco.languages.yaml;
          yaml &&
            yaml.yamlDefaults.setDiagnosticsOptions({
              validate: true,
              enableSchemaRequest: true,
              hover: true,
              completion: true,
              schemas: [
                {
                  uri: 'http://myserver/foo-schema.json', // id of the first schema
                  fileMatch: ['*'], // associate with our model
                  schema: {
                    id: 'http://myserver/foo-schema.json', // id of the first schema
                    type: 'object',
                    properties: {
                      p1: {
                        enum: ['v1', 'v2'],
                      },
                      p2: {
                        $ref: 'http://myserver/bar-schema.json', // reference the second schema
                      },
                    },
                  },
                },
                {
                  uri: 'http://myserver/bar-schema.json', // id of the first schema
                  schema: {
                    id: 'http://myserver/bar-schema.json', // id of the first schema
                    type: 'object',
                    properties: {
                      q1: {
                        enum: ['x1', 'x2'],
                      },
                    },
                  },
                },
              ],
            });
          setInit(true);
        });
      })
      .catch(console.error);
  }, []);

  return init ? (
    <MonacoEditor
      height="100vh" // change it
      language={language || 'typescript'}
      theme={theme || 'asyncapi-theme'}
      value={value}
      className={className}
      options={options}
      // beforeMount={handleEditorWillMount}
      // onMount={handleEditorDidMount}
      {...props}
    />
  ) : null;
};
