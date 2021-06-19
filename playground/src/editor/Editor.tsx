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
import { yamlAST } from '@fmvilas/pseudo-yaml-ast';

// @ts-ignore
import _ from 'lodash';

import { schema } from './schema';
import { Navigation } from './components';
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
  const [ast, setAst] = useState(null);

  // const [editorHeight, setEditorHeight] = useState("calc(100% - 40px)");
  // const [terminalClicked, setTerminalClicked] = useState(false);

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
        setAst(yamlAST(val));
        setRawValue(val);
        setErrors([]);
      })
      .catch(e => {
        let { validationErrors } = e;
        setErrors(validationErrors);
      });
  };

  const debounce = useCallback(
    _.debounce((val: string) => {
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
    if (showEditor === false && showDoc === false) setShowDec(true);
  }, [showDoc, showEditor]);

  const icons = (
    <>
      <button
        onClick={() => setShowNavigation(!showNavigation)}
        className={`flex text-sm rounded-md ${
          showNavigation
            ? 'text-white hover:text-gray-500'
            : 'text-gray-500 hover:text-white'
        } hover:text-white focus:outline-none transition ease-in-out duration-150 p-4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => setShowEditor(!showEditor)}
        className={`flex text-sm rounded-md ${
          showEditor
            ? 'text-white hover:text-gray-500'
            : 'text-gray-500 hover:text-white'
        } hover:text-white focus:outline-none transition ease-in-out duration-150 p-4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={() => setShowDec(!showDoc)}
        className={`flex text-sm rounded-md ${
          showDoc
            ? 'text-white hover:text-gray-500'
            : 'text-gray-500 hover:text-white'
        } hover:text-white focus:outline-none transition ease-in-out duration-150 p-4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      </button>
    </>
  );

  return init ? (
    <div className="flex flex-col h-full w-full h-screen">
      <div className="sm:px-2 lg:px-2 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center justify-between h-16 px-4 sm:px-0">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="inline-block h-20"
                src="/img/logo-horizontal-white.svg"
                alt=""
              />
              <span className="inline-block text-xl text-pink-500 font-normal italic tracking-wide -ml-1 transform translate-y-0.5">
                editor
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex-none bg-gray-800 p-4 w-full border-b border-gray-700">
    lol
      </div> */}
      <div className="flex flex-row flex-1 overflow-hidden">
        <div className="flex flex-col flex-none bg-gray-800 shadow-lg border-r border-gray-700">
          {icons}
        </div>
        <div
          className={`flex flex-none flex-col overflow-x-hidden overflow-y-auto bg-gray-800 border-r border-gray-700 w-40 ${
            showNavigation ? 'block' : 'hidden'
          }`}
        >
          <Navigation
            editor={editor}
            ast={ast}
            spec={editorValue as any}
            rawSpec={rawValue as string}
          />
        </div>
        <div className="flex flex-1 flex-row relative">
          <SplitPane
            minSize={0}
            pane1Style={!showEditor ? { width: '0px' } : undefined}
            pane2Style={!showDoc ? { width: '0px' } : { overflow: 'auto' }}
            primary={!showDoc ? 'second' : 'first'}
            defaultSize={
              parseInt(localStorage.getItem('splitPos:center') || '0', 10) ||
              '50%'
            }
            onChange={_.debounce(
              (size: string) =>
                localStorage.setItem('splitPos:center', String(size)),
              100,
            )}
          >
            {/* !!!!!!! overflow-hidden class is very important !!!!!! */}
            <div className="flex flex-1 overflow-hidden">
              <SplitPane
                split="horizontal"
                minSize={0}
                maxSize={-40}
                defaultSize={'calc(100% - 40px)'}
              >
                <div className="flex flex-1 flex-col h-full overflow-hidden">
                  <MonacoEditor
                    // height="100vh" // change it
                    language={language || 'yaml'}
                    theme={theme || 'asyncapi-theme'}
                    value={value}
                    className={className}
                    // beforeMount={handleEditorWillMount}
                    onMount={handleEditorDidMount}
                    onChange={v => {
                      debounce(v);
                    }}
                    //options={options}
                    options={{
                      wordWrap: 'on',
                    }}
                    {...props}
                  />
                </div>
                <div
                  className="bg-gray-900 border-t border-gray-700 flex-grow relative h-full overflow-hidden"
                  // onClick={() => {
                  //   setEditorHeight(terminalClicked ? "calc(100% - 200px)" : "calc(100% - 199px)");
                  //   setTerminalClicked(prev => !prev);
                  // }}
                >
                  <div
                    style={{ height: '40px', lineHeight: '40px' }}
                    className="flex flex-row justify-between text-white px-4 border-b border-gray-700"
                  >
                    <ul>
                      <li>
                        <div>
                          <span>Errors</span>
                          <span className="inline-block rounded-full bg-gray-400 px-2 py-1 ml-1 -mt-2 text-xs">
                            {errors.length || 0}
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div>
                      {errors.length ? (
                        <>
                          <span className="text-red-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline-block h-5 w-5 mr-1 -mt-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>Invalid</span>
                        </>
                      ) : (
                        <>
                          <span className="text-green-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline-block h-5 w-5 mr-1 -mt-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span>Valid</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div
                    className="absolute overflow-auto h-auto bottom-0 right-0 left-0"
                    style={{ top: '40px' }}
                  >
                    <div className="flex-1 text-white px-4 pb-4 text-sm h-full relative overflow-x-hidden overflow-y-auto">
                      {errors.length ? (
                        <table className="border-collapse">
                          <thead>
                            <tr>
                              <th className="p-2">Line</th>
                              <th className="p-2 text-left">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {errors.map((err: any) => (
                              <tr key={err.title}>
                                <td
                                  className="p-2 cursor-pointer text-center"
                                  onClick={() => {
                                    (editor as any).revealLine(
                                      err.location.startLine,
                                    );
                                    (editor as any).setPosition({
                                      column: 1,
                                      lineNumber: err.location.startLine,
                                    });
                                  }}
                                >
                                  {err.location.startLine}
                                </td>
                                <td className="p-2 text-left">{err.title}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className="py-2 w-full text-center text-lg">
                          Valid specification. Any errors.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SplitPane>
            </div>
            <div>
              <AsyncApiComponent
                schema={editorValue}
                config={{ show: { errors: false } }}
              />
            </div>
          </SplitPane>
        </div>
      </div>
    </div>
  ) : null;

  // return init ? (
  //   <div className="flex flex-col h-full w-full">
  //     <div className="flex-1 bg-gray-800 p-4 w-full max-w-screen">
  //       lol
  //     </div>
  //     <div className="flex flex-row flex-1">
  //       <div className="flex flex-col flex-none h-full max-h-screen bg-gray-800">
  //         {icons}
  //       </div>
  //       <div className={`flex flex-1 flex-col max-w-1/2 ${showEditor ? 'block' : 'hidden'}`}>
  //         <MonacoEditor
  //           height="100vh" // change it
  //           language={language || 'yaml'}
  //           theme={theme || 'asyncapi-theme'}
  //           value={value}
  //           className={className}
  //           options={options}
  //           // beforeMount={handleEditorWillMount}
  //           onMount={handleEditorDidMount}
  //           onChange={(v) => {
  //             debounce(v);
  //           }}
  //           {...props}
  //         />
  //       </div>
  //       <div className={`flex flex-1 flex-col max-w-1/2 overflow-auto ${showDoc ? 'block' : 'hidden'}`}>
  //         <AsyncApiComponent schema={editorValue} />
  //       </div>
  //     </div>
  //   </div>
  // ) : null;
};
