import React from 'react';

import state from '../state';

interface TerminalProps {}

export const Terminal: React.FunctionComponent<TerminalProps> = () => {
  const editorState = state.useEditorState();
  const parserState = state.useParserState();

  const errors = parserState.errors.get();

  return (
    <div>
      <div
        style={{ height: '30px', lineHeight: '30x' }}
        className="flex flex-row justify-between text-white px-4 border-b border-gray-700 cursor-pointer"
        onClick={e => {
          const {
            height,
          } = e.currentTarget.parentElement.parentElement.getClientRects()[0];

          editorState.height.set(prevHeight => {
            const newHeight =
              height < 50 ? 'calc(100% - 160px)' : 'calc(100% - 30px)';
            if (
              prevHeight === 'calc(100% - 160px)' &&
              newHeight === 'calc(100% - 160px)'
            )
              return 'calc(100% - 161px)';
            if (
              prevHeight === 'calc(100% - 30px)' &&
              newHeight === 'calc(100% - 30px)'
            )
              return 'calc(100% - 31px)';
            return newHeight;
          });
        }}
      >
        <ul>
          <li>
            <div>
              <span className="text-sm">Errors</span>
              <span className="inline-block rounded-full bg-gray-400 px-1.5 py-0.5 ml-1.5 -mt-2 text-xs">
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
                  className="inline-block h-5 w-5 mr-1 -mt-0.5"
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
              <span className="text-sm">Invalid</span>
            </>
          ) : (
            <>
              <span className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-5 w-5 mr-1 -mt-0.5"
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
              <span className="text-sm">Valid</span>
            </>
          )}
        </div>
      </div>
      <div
        className="absolute overflow-auto h-auto bottom-0 right-0 left-0"
        style={{ top: '40px' }}
      >
        <div className="flex-1 text-white px-2 -mt-2 text-xs h-full relative overflow-x-hidden overflow-y-auto">
          {errors.length ? (
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th>Line</th>
                  <th className="p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {errors.map((err: any) => (
                  <tr key={err.title} className="border-t border-gray-700">
                    <td
                      className="p-2 cursor-pointer text-center"
                      onClick={() => {
                        const editor = editorState.editor.get();
                        editor.revealLineInCenter(err.location?.startLine || 0);
                        editor.setPosition({
                          column: 1,
                          lineNumber: err.location?.startLine || 0,
                        });
                      }}
                    >
                      {err.location?.startLine || '-'}
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
  );
};
