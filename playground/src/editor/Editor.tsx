import React, { useEffect, useState, useCallback } from 'react';
import MonacoEditor, {
  EditorProps as MonacoEditorProps,
  loader,
} from '@monaco-editor/react';
// @ts-ignore
import AsyncApiComponent from '@asyncapi/react-component';

// import { SplitWrapper } from "../components";
import SplitPane from 'react-split-pane';

import { parse } from '@asyncapi/parser';

// @ts-ignore
import _ from 'lodash';

import { schema } from './schema';
import { Navigation, Sidebar, Terminal, Toolbar } from './components';
// import { customSchema } from "./customSchema";

// NOTE: using loader syntax becuase Yaml worker imports editor.worker directly and that
// import shouldn't go through loader syntax.
// @ts-ignore
// import EditorWorker from 'worker-loader!monaco-editor/esm/vs/editor/editor.worker';
// @ts-ignore
// import YamlWorker from 'worker-loader!monaco-yaml/lib/esm/yaml.worker';
// @ts-ignore
// import TSWorker from 'worker-loader!monaco-editor/esm/vs/language/typescript/ts.worker';

(window as any).MonacoEnvironment = {
  getWorkerUrl: function(_: any, label: string) {
    console.log(label);
    if (label === 'json') {
      return '../../js/json.worker.bundle.js';
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return '../../js/css.worker.bundle.js';
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return '../../js/html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return '../../js/ts.worker.bundle.js';
    }
    if (label === 'yaml' || label === 'yml') {
      return '../../js/yaml.worker.bundle.js';
    }
    return '../../js/editor.worker.bundle.js';
  },
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

const files = {
  'script.js': {
    name: 'script.js',
    language: 'javascript',
    value: 'class A {}',
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: '.lol {}',
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: '<div>lol</div>',
  },
};

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
  const [editor, setEditor] = useState(null);
  const [rawValue, setRawValue] = useState(value);
  const [editorValue, setEditorValue] = useState(value);
  const [errors, setErrors] = useState([]);

  const [showNavigation, setShowNavigation] = useState(true);
  const [showEditor, setShowEditor] = useState(true);
  const [showDoc, setShowDec] = useState(true);

  const [editorHeight, setEditorHeight] = useState('calc(100% - 30px)');
  // const [terminalClicked, setTerminalClicked] = useState(false);

  const [fileName, setFileName] = useState('script.js');
  const file = files[fileName];

  function handleEditorDidMount(editor: any, monaco: any) {
    setEditor(editor);
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    // workaround for autocompletion
    // console.log(editor.layout)
    // editor.onKeyUp((e: any) => {
    //   const position = editor.getPosition();
    //   const text = editor.getModel().getLineContent(position.lineNumber).trim();
    //   if (e.keyCode === monaco.KeyCode.Enter && !text) {
    //     editor.trigger('', 'editor.action.triggerSuggest', '');
    //   }
    // });
    // editor.revealLine(45);
    // editor.setPosition({column: 1, lineNumber: 50});
  }

  const parseSpec = (val: string) => {
    parse(val)
      .then(v => {
        setEditorValue(v as any);
        setErrors([]);
      })
      .catch(e => {
        let { validationErrors } = e;
        setErrors(validationErrors);
      });
  };

  const debounce = useCallback(
    _.debounce((val: string) => {
      setRawValue(val);
      parseSpec(val);
      // setEditorValue(_searchVal);
      // send the server request here
    }, 100),
    [],
  );

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
            'editor.lineHighlightBackground': '#1f2a37',
          },
          rules: [{ token: '', background: '#252f3f' }],
        });
        // @ts-ignore
        import('monaco-yaml/lib/esm/monaco.contribution').then(_ => {
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

          const json = Monaco.languages.json;
          const yaml = Monaco.languages.yaml;
          json && json.jsonDefaults.setDiagnosticsOptions(options);
          yaml && yaml.yamlDefaults.setDiagnosticsOptions(options);
          setInit(true);
        });
      })
      .catch(console.error);

    parseSpec(value || '');
  }, []);

  useEffect(() => {
    // if (showEditor === false && showDoc === false) setShowDec(true);
  }, [showDoc, showEditor]);

  // const secondPane = (
  //   <div className="flex flex-1 flex-row relative">
  //     <SplitPane
  //       minSize={0}
  //       pane1Style={!showEditor ? { width: '0px' } : undefined}
  //       pane2Style={!showDoc ? { width: '0px' } : { overflow: 'auto' }}
  //       primary={!showDoc ? 'second' : 'first'}
  //       defaultSize={
  //         parseInt(localStorage.getItem('splitPos:center') || '0', 10) || '50%'
  //       }
  //       onChange={_.debounce(
  //         (size: string) =>
  //           localStorage.setItem('splitPos:center', String(size)),
  //         100,
  //       )}
  //     >
  //       {/* !!!!!!! overflow-hidden class is very important !!!!!! */}
  //       <div className="flex flex-1 overflow-hidden">
  //         <SplitPane
  //           split="horizontal"
  //           minSize={0}
  //           maxSize={-40}
  //           size={editorHeight}
  //           defaultSize="calc(100% - 40px)"
  //         >
  //           <div className="flex flex-1 flex-col h-full overflow-hidden">
  //             <MonacoEditor
  //               // height="100vh" // change it
  //               language={language || 'yaml'}
  //               theme={theme || 'asyncapi-theme'}
  //               value={value}
  //               className={className}
  //               // beforeMount={handleEditorWillMount}
  //               onMount={handleEditorDidMount}
  //               onChange={v => {
  //                 debounce(v);
  //               }}
  //               //options={options}
  //               options={{
  //                 wordWrap: 'on',
  //               }}
  //               {...props}
  //             />
  //           </div>
  //           <div className="bg-gray-900 border-t border-gray-700 flex-grow relative h-full overflow-hidden">
  //             <Terminal
  //               editor={editor}
  //               errors={errors}
  //               setEditorHeight={setEditorHeight}
  //             />
  //           </div>
  //         </SplitPane>
  //       </div>
  //       <div>
  //       </div>
  //       {/* <div>
  //         <AsyncApiComponent
  //           schema={editorValue}
  //           config={{ show: { errors: false } }}
  //         />
  //       </div> */}
  //     </SplitPane>
  //   </div>
  // );

  {
    /* !!!!!!! overflow-hidden class is very important !!!!!! */
  }
  const editorPanel = (
    <div className="flex flex-1 overflow-hidden">
      <SplitPane
        split="horizontal"
        minSize={0}
        maxSize={-30}
        size={editorHeight}
        defaultSize="calc(100% - 30px)"
      >
        <div className="flex flex-1 flex-col h-full overflow-hidden">
          {/* <div 
            className="bg-gray-800 border-b border-gray-700 text-sm"
            style={{ height: '30px', lineHeight: '30px' }}
          >
            {Object.values(files).map(file => (
              <button 
                disabled={fileName === file.name} 
                className={`px-3 border-r border-gray-700 text-white ${fileName === file.name ? 'bg-gray-900' : ''}`}
                onClick={() => setFileName(file.name)}
              >
                {file.name}
              </button>
            ))}
            {/* <button disabled={fileName === "style.css"} className="" onClick={() => setFileName("style.css")}>style.css</button>
            <button disabled={fileName === "index.html"} className="" onClick={() => setFileName("index.html")}>index.html</button>
          </div> */}
          <MonacoEditor
            // height="100vh" // change it
            language={language || 'yaml'}
            theme={theme || 'asyncapi-theme'}
            value={value}
            // path={file.name}
            // defaultLanguage={file.language}
            // defaultValue={file.value}
            className={className}
            // beforeMount={handleEditorWillMount}
            onMount={handleEditorDidMount}
            onChange={v => {
              debounce(v);
            }}
            //options={options}
            options={{
              wordWrap: 'on',
              smoothScrolling: true,
            }}
            {...props}
          />
        </div>
        <div className="bg-gray-900 border-t border-gray-700 flex-grow relative h-full overflow-hidden">
          <Terminal
            editor={editor}
            errors={errors}
            setEditorHeight={setEditorHeight}
          />
        </div>
      </SplitPane>
    </div>
  );

  const secondPane = (
    <SplitPane
      minSize={0}
      pane1Style={!showNavigation ? { width: '0px' } : { overflow: 'auto' }}
      pane2Style={!showEditor ? { width: '0px' } : undefined}
      primary={!showEditor ? 'second' : 'first'}
      defaultSize={
        parseInt(localStorage.getItem('splitPos:left') || '0', 10) || 220
      }
      onChange={_.debounce(
        (size: string) => localStorage.setItem('splitPos:left', String(size)),
        100,
      )}
    >
      <Navigation
        editor={editor}
        spec={editorValue as any}
        rawSpec={rawValue as string}
      />
      {editorPanel}
    </SplitPane>
  );

  const firstPane = (
    <div className="flex flex-1 flex-row relative">
      <SplitPane
        minSize={0}
        pane1Style={
          !showNavigation && !showEditor ? { width: '0px' } : undefined
        }
        pane2Style={!showDoc ? { width: '0px' } : { overflow: 'auto' }}
        primary={!showDoc ? 'second' : 'first'}
        defaultSize={
          parseInt(localStorage.getItem('splitPos:center') || '0', 10) || '55%'
        }
        onChange={_.debounce(
          (size: string) =>
            localStorage.setItem('splitPos:center', String(size)),
          100,
        )}
      >
        {secondPane}
        <div>
          <AsyncApiComponent
            schema={editorValue}
            config={{ show: { errors: false } }}
          />
        </div>
      </SplitPane>
    </div>
  );

  return init ? (
    <div className="flex flex-col h-full w-full h-screen">
      <Toolbar />
      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar
          setShowNavigation={setShowNavigation}
          showNavigation={showNavigation}
          setShowEditor={setShowEditor}
          showEditor={showEditor}
          setShowDec={setShowDec}
          showDoc={showDoc}
        />
        {/* <div
          className={`flex flex-none flex-col overflow-x-hidden overflow-y-auto bg-gray-800 border-r border-gray-700 w-48 ${
            showNavigation ? 'block' : 'hidden'
          }`}
        >
          <Navigation
            editor={editor}
            ast={ast}
            spec={editorValue as any}
            rawSpec={rawValue as string}
          />
        </div> */}
        {firstPane}
      </div>
    </div>
  ) : null;
};
