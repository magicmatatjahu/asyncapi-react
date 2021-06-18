import React from 'react';
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
  loader,
} from '@monaco-editor/react';

import { schema } from './schema';

// // NOTE: using loader syntax becuase Yaml worker imports editor.worker directly and that
// // import shouldn't go through loader syntax.
// // @ts-ignore
// import EditorWorker from 'worker-loader!monaco-editor/esm/vs/editor/editor.worker';
// @ts-ignore
import YamlWorker from 'worker-loader!monaco-yaml/lib/esm/yaml.worker';
// @ts-ignore
// import TSWorker from 'worker-loader!monaco-editor/esm/vs/language/typescript/ts.worker';

console.log(YamlWorker);

// @ts-ignore
const global = (0, eval)('this');

// (window as any).MonacoEnvironment = {
//   getWorker(_: any, label: string) {
//     if (label === 'yaml') {
//       // return new YamlWorker();
//     }
//     return 'static/js/bundle.worker.js'
//   },
// };

// @ts-ignore
let editor: any;
// @ts-ignore
let Monaco: any;

loader
  .init()
  .then(monacoInstance => {
    Monaco = monacoInstance;
    global.monaco = Monaco;
    monacoInstance.editor.defineTheme('asyncapi-theme', {
      base: 'vs-dark',
      inherit: true,
      colors: {
        'editor.background': '#252f3f',
      },
      rules: [{ token: '', background: '#252f3f' }],
    });
    console.log(Monaco);
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
          schemas: [schema],
        });
    });
  })
  .catch(console.error);

export interface EditorProps extends MonacoEditorProps {}

export const Editor: React.FunctionComponent<EditorProps> = ({
  language,
  theme,
  value,
  className,
  options,
  ...props
}) => {
  // function handleEditorDidMount(editor, monaco) {
  //   // here is another way to get monaco instance
  //   // you can also store it in `useRef` for further usage
  // }

  return (
    <MonacoEditor
      height="90vh" // change it
      language={language || 'yaml'}
      theme={theme || 'asyncapi-theme'}
      value={value}
      className={className}
      options={options}
      // beforeMount={handleEditorWillMount}
      // onMount={handleEditorDidMount}
      {...props}
    />
  );
};
