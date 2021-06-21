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
  // language,
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

  const [language, setLanguage] = useState('yaml');
  const [fileName, setFileName] = useState('script.js');
  const file = files[fileName];

  function handleEditorDidMount(editor: any, monaco: any) {
    setEditor(editor);
    // workaround for autocompletion
    // editor.onKeyUp((e: any) => {
    //   const position = editor.getPosition();
    //   const text = editor.getModel().getLineContent(position.lineNumber).trim();
    //   if (e.keyCode === monaco.KeyCode.Enter && !text) {
    //     editor.trigger('', 'editor.action.triggerSuggest', '');
    //   }
    // });
  }

  const parseSpec = (val: string) => {
    parse(val)
      .then(v => {
        console.log(v);
        setEditorValue(v as any);
        setErrors([]);
      })
      .catch(e => {
        console.log(e);
        let { validationErrors } = e;
        setEditorValue('');
        setErrors(validationErrors || [e]);
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

  useEffect(() => {
    if (init === true) {
      setTimeout(() => {
        let hash = window.location.hash;
        hash = hash.substring(1);
        try {
          const escapedHash = CSS.escape(hash);
          const items = document.querySelectorAll(
            escapedHash.startsWith('#') ? escapedHash : `#${escapedHash}`,
          );
          if (items.length) {
            const element = items[0];
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (e) {}
      }, 100);
    }
  }, [init]);

  const importFromURL = () => {
    const url = prompt('Enter the URL to import from:');
    const extension = url?.split('.').pop();

    if (url) {
      fetch(url)
        .then(res => res.text())
        .then(text => {
          if (!text) {
            return;
          }
          if (extension === 'yaml' || extension === 'yml') {
            setLanguage('yaml');
          } else if (extension === 'json') {
            setLanguage('json');
          }
          (editor as any).getModel().setValue(text as string);
        });
    }
  };

  const importFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    if (files?.length !== 1) {
      return;
    }
    const file = files.item(0);
    if (!file) {
      return;
    }
    const extension = file.name.split('.').pop();

    const fileReader = new FileReader();
    fileReader.onload = fileLoadedEvent => {
      const content = fileLoadedEvent.target?.result;
      if (!content) {
        return;
      }
      if (extension === 'yaml' || extension === 'yml') {
        setLanguage('yaml');
      } else if (extension === 'json') {
        setLanguage('json');
      }
      (editor as any).getModel().setValue(content as string);
    };
    fileReader.readAsText(file, 'UTF-8');
  };

  {
    /* !!!!!!! overflow-hidden class is very important !!!!!! */
  }

  const editorPanel = (
    <div className="flex flex-1 overflow-hidden">
      <SplitPane
        split="horizontal"
        minSize={39}
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
          </div> */}
          <div
            className="bg-gray-800 border-b border-gray-700 text-sm flex flex-row justify-between items-center px-2"
            style={{ height: '40px', lineHeight: '40' }}
          >
            <div className="flex flex-row">
              <div className="block rounded-md shadow-sm">
                <button
                  type="button"
                  className="flex px-2 py-2 text-sm rounded-md text-gray-500 hover:text-white focus:outline-none transition ease-in-out duration-150"
                  title="Import AsyncAPI document"
                  onClick={importFromURL}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Import URL
                </button>
              </div>
              <div>
                <div className="block rounded-md shadow-sm">
                  <label
                    className="flex px-2 py-2 text-sm rounded-md text-gray-500 hover:text-white focus:outline-none transition ease-in-out duration-150 cursor-pointer"
                    title="Import AsyncAPI document"
                  >
                    <input
                      type="file"
                      style={{ position: 'fixed', top: '-100em' }}
                      onChange={importFile}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                    </svg>
                    Import File
                  </label>
                </div>
              </div>
            </div>
            <div className="px-1">
              <label htmlFor="language-select" className="hidden">
                Choose the langauge
              </label>
              <select
                name="language"
                id="language-select"
                onChange={e => setLanguage(e.target.value || 'yaml')}
                value={language}
              >
                <option value="yaml">YAML</option>
                <option value="json">JSON</option>
              </select>
            </div>
          </div>
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
        language={language}
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
        {firstPane}
      </div>
    </div>
  ) : null;
};
