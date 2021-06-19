import React from 'react';

import { AsyncAPIDocument } from '@asyncapi/parser';
// @ts-ignore
import { getLocationOf } from '@asyncapi/parser/lib/utils';

interface NavigationProps {
  ast: any;
  editor: any;
  rawSpec: string;
  spec: AsyncAPIDocument;
}

function goToLine(editor: any, jsonPointer: any, spec: any, id: string) {
  let location = undefined;
  try {
    location = getLocationOf(jsonPointer, spec, 'yaml');
  } catch (e) {}

  if (!location || typeof location.startLine !== 'number') {
    return;
  }

  window.history.pushState(undefined, '', `#${id}`);
  (editor as any).revealLine(location.startLine);
  (editor as any).setPosition({ column: 1, lineNumber: location.startLine });
}

export const Navigation: React.FunctionComponent<NavigationProps> = ({
  ast,
  editor,
  rawSpec,
  spec,
}) => {
  if (!ast) {
    return null;
  }

  return (
    <ul className="break-all">
      <li
        className="p-2 text-white cursor-pointer"
        onClick={() => goToLine(editor, '/info', rawSpec, 'introduction')}
      >
        Introduction
      </li>
      {spec.hasServers() && (
        <li>
          <div
            className="p-2 text-white cursor-pointer border-t border-gray-700"
            onClick={() => goToLine(editor, '/servers', rawSpec, 'servers')}
          >
            Servers
          </div>
          <ul>
            {Object.keys(spec.servers() || {}).map(serverName => (
              <li
                key={serverName}
                className="p-2 pl-6 text-white cursor-pointer text-xs border-t border-gray-700"
                onClick={() =>
                  goToLine(
                    editor,
                    `/servers/${serverName.replace(/\//g, '~1')}`,
                    rawSpec,
                    '',
                  )
                }
              >
                {serverName}
              </li>
            ))}
          </ul>
        </li>
      )}
      <li>
        <div
          className="p-2 text-white cursor-pointer border-t border-gray-700"
          onClick={() => goToLine(editor, '/channels', rawSpec, 'channels')}
        >
          Channels
        </div>
        <ul>
          {Object.keys(spec.channels() || {}).map(channelName => (
            <li
              key={channelName}
              className="p-2 pl-6 text-white cursor-pointer text-xs border-t border-gray-700"
              onClick={() =>
                goToLine(
                  editor,
                  `/channels/${channelName.replace(/\//g, '~1')}`,
                  rawSpec,
                  '',
                )
              }
            >
              {channelName}
            </li>
          ))}
        </ul>
      </li>
      {spec.hasComponents() && spec.components().hasMessages() && (
        <li>
          <div
            className="p-2 text-white cursor-pointer border-t border-gray-700"
            onClick={() =>
              goToLine(editor, '/components/messages', rawSpec, 'messages')
            }
          >
            Messages
          </div>
          <ul>
            {Object.keys(spec.components().messages() || {}).map(
              messageName => (
                <li
                  key={messageName}
                  className="p-2 pl-6 text-white cursor-pointer text-xs border-t border-gray-700"
                  onClick={() =>
                    goToLine(
                      editor,
                      `/components/messages/${messageName.replace(
                        /\//g,
                        '~1',
                      )}`,
                      rawSpec,
                      '',
                    )
                  }
                >
                  {messageName}
                </li>
              ),
            )}
          </ul>
        </li>
      )}
    </ul>
  );
};
