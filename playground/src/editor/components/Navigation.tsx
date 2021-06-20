import React from 'react';

import { AsyncAPIDocument } from '@asyncapi/parser';
// @ts-ignore
import { getLocationOf } from '@asyncapi/parser/lib/utils';

interface NavigationProps {
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
  (editor as any).revealLineInCenter(location.startLine);
  (editor as any).setPosition({ column: 1, lineNumber: location.startLine });
}

export const Navigation: React.FunctionComponent<NavigationProps> = ({
  editor,
  rawSpec,
  spec,
}) => {
  if (!rawSpec) {
    return null;
  }

  return (
    <div className="flex flex-none flex-col overflow-x-hidden overflow-y-auto bg-gray-800">
      <ul className="break-all">
        <li
          className="p-2 text-white cursor-pointer hover:bg-gray-900 mb-4"
          onClick={() => goToLine(editor, '/info', rawSpec, 'introduction')}
        >
          Introduction
        </li>
        {spec.hasServers() && (
          <li className="mb-4">
            <div
              className="p-2 text-white cursor-pointer hover:bg-gray-900"
              onClick={() => goToLine(editor, '/servers', rawSpec, 'servers')}
            >
              Servers
            </div>
            <ul>
              {Object.entries(spec.servers() || {}).map(
                ([serverName, server]) => (
                  <li
                    key={serverName}
                    className="p-2 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900"
                    onClick={() =>
                      goToLine(
                        editor,
                        `/servers/${serverName.replace(/\//g, '~1')}`,
                        rawSpec,
                        '',
                      )
                    }
                  >
                    <div className="flex flex-row">
                      <div className="flex-none">
                        <span className="mr-2 py-1 px-2 rounded-full bg-pink-500 text-xs">
                          {server.protocolVersion()
                            ? `${server.protocol()} ${server.protocolVersion()}`
                            : server.protocol()}
                        </span>
                      </div>
                      <span>{serverName}</span>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </li>
        )}
        <li className="mb-4">
          <div
            className="p-2 text-white cursor-pointer hover:bg-gray-900"
            onClick={() => goToLine(editor, '/channels', rawSpec, 'channels')}
          >
            Channels
          </div>
          <ul>
            {Object.entries(spec.channels() || {}).map(
              ([channelName, channel]) => {
                const channels: React.ReactNodeArray = [];

                if (channel.hasPublish()) {
                  channels.push(
                    <li
                      key={channelName}
                      className="p-2 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900"
                      onClick={() =>
                        goToLine(
                          editor,
                          `/channels/${channelName.replace(/\//g, '~1')}`,
                          rawSpec,
                          '',
                        )
                      }
                    >
                      <div className="flex flex-row">
                        <div className="flex-none">
                          <span className="mr-2 py-1 px-2 rounded-full bg-blue-500 text-xs">
                            PUB
                          </span>
                        </div>
                        <span>{channelName}</span>
                      </div>
                    </li>,
                  );
                }
                if (channel.hasSubscribe()) {
                  channels.push(
                    <li
                      key={channelName}
                      className="p-2 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900"
                      onClick={() =>
                        goToLine(
                          editor,
                          `/channels/${channelName.replace(/\//g, '~1')}`,
                          rawSpec,
                          '',
                        )
                      }
                    >
                      <div className="flex flex-row">
                        <div className="flex-none">
                          <span className="mr-2 py-1 px-2 rounded-full bg-green-600 text-xs">
                            SUB
                          </span>
                        </div>
                        <span>{channelName}</span>
                      </div>
                    </li>,
                  );
                }

                return channels;
              },
            )}
          </ul>
        </li>
        {spec.hasComponents() && spec.components().hasMessages() && (
          <li className="mb-4">
            <div
              className="p-2 text-white cursor-pointer hover:bg-gray-900"
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
                    className="p-2 pl-6 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900"
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
        {spec.hasComponents() && spec.components().schemas() && (
          <li className="mb-4">
            <div
              className="p-2 text-white cursor-pointer hover:bg-gray-900"
              onClick={() =>
                goToLine(editor, '/components/schemas', rawSpec, 'schemas')
              }
            >
              Schemas
            </div>
            <ul>
              {Object.keys(spec.components().schemas() || {}).map(
                schemaName => (
                  <li
                    key={schemaName}
                    className="p-2 pl-6 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900"
                    onClick={() =>
                      goToLine(
                        editor,
                        `/components/schemas/${schemaName.replace(
                          /\//g,
                          '~1',
                        )}`,
                        rawSpec,
                        '',
                      )
                    }
                  >
                    {schemaName}
                  </li>
                ),
              )}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
};
