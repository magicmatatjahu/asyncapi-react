import React, { useEffect, useState } from 'react';

import { AsyncAPIDocument } from '@asyncapi/parser';
// @ts-ignore
import { getLocationOf } from '@asyncapi/parser/lib/utils';

interface NavigationProps {
  editor: any;
  rawSpec: string;
  spec: AsyncAPIDocument;
  language: string;
}

function goToLine(
  editor: any,
  jsonPointer: any,
  spec: any,
  hash: string,
  language: string = 'yaml',
) {
  let location = undefined;
  try {
    location = getLocationOf(jsonPointer, spec, language);
  } catch (e) {}

  if (!location || typeof location.startLine !== 'number') {
    return;
  }

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

  (editor as any).revealLineInCenter(location.startLine);
  (editor as any).setPosition({ column: 1, lineNumber: location.startLine });

  hash = hash.startsWith('#') ? hash : `#${hash}`;
  window.history.pushState({}, '', hash);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

export const Navigation: React.FunctionComponent<NavigationProps> = ({
  editor,
  rawSpec,
  spec,
  language,
}) => {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    setHash(window.location.hash.substring(1));
    const fn = () => {
      setHash(window.location.hash.substring(1));
    };
    window.addEventListener('hashchange', fn);
    return () => {
      window.removeEventListener('hashchange', fn);
    };
  }, []);

  if (!rawSpec || !spec || typeof spec === 'string') {
    return (
      <div className="flex overflow-hidden bg-gray-800 h-full justify-center items-center text-white text-lg">
        Specification invalid
      </div>
    );
  }

  // TODO: Change all li to <a href={id}>
  return (
    <div className="flex flex-none flex-col overflow-y-auto overflow-x-hidden bg-gray-800 h-full">
      <ul>
        <li
          className={`p-2 pl-3 text-white cursor-pointer hover:bg-gray-900 mb-4 ${
            hash === 'introduction' ? 'bg-gray-900' : ''
          }`}
          onClick={() =>
            goToLine(editor, '/info', rawSpec, 'introduction', language)
          }
        >
          Introduction
        </li>
        {spec.hasServers() && (
          <li className="mb-4">
            <div
              className={`p-2 pl-3 text-white cursor-pointer hover:bg-gray-900 ${
                hash === 'servers' ? 'bg-gray-900' : ''
              }`}
              onClick={() =>
                goToLine(editor, '/servers', rawSpec, 'servers', language)
              }
            >
              Servers
            </div>
            <ul>
              {Object.entries(spec.servers() || {}).map(
                ([serverName, server]) => (
                  <li
                    key={serverName}
                    className={`p-2 pl-3 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900 ${
                      hash === `server-${serverName}` ? 'bg-gray-900' : ''
                    }`}
                    onClick={() =>
                      goToLine(
                        editor,
                        `/servers/${serverName.replace(/\//g, '~1')}`,
                        rawSpec,
                        `server-${serverName}`,
                        language,
                      )
                    }
                  >
                    <div className="flex flex-row">
                      <div className="flex-none">
                        <span className="mr-3 text-xs uppercase text-pink-500 font-bold">
                          {server.protocolVersion()
                            ? `${server.protocol()} ${server.protocolVersion()}`
                            : server.protocol()}
                        </span>
                      </div>
                      <span className="truncate">{serverName}</span>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </li>
        )}
        <li className="mb-4">
          <div
            className={`p-2 pl-3 text-white cursor-pointer hover:bg-gray-900 ${
              hash === 'operations' ? 'bg-gray-900' : ''
            }`}
            onClick={() =>
              goToLine(editor, '/channels', rawSpec, 'operations', language)
            }
          >
            Operations
          </div>
          <ul>
            {Object.entries(spec.channels() || {}).map(
              ([channelName, channel]) => {
                const channels: React.ReactNodeArray = [];

                if (channel.hasPublish()) {
                  channels.push(
                    <li
                      key={channelName}
                      className={`p-2 pl-3 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900 ${
                        hash === `operation-publish-${channelName}`
                          ? 'bg-gray-900'
                          : ''
                      }`}
                      onClick={() =>
                        goToLine(
                          editor,
                          `/channels/${channelName.replace(/\//g, '~1')}`,
                          rawSpec,
                          `operation-publish-${channelName}`,
                          language,
                        )
                      }
                    >
                      <div className="flex flex-row">
                        <div className="flex-none">
                          <span className="mr-3 text-xs uppercase text-blue-500 font-bold">
                            Pub
                          </span>
                        </div>
                        <span className="truncate">{channelName}</span>
                      </div>
                    </li>,
                  );
                }
                if (channel.hasSubscribe()) {
                  channels.push(
                    <li
                      key={channelName}
                      className={`p-2 pl-3 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900 ${
                        hash === `operation-subscribe-${channelName}`
                          ? 'bg-gray-900'
                          : ''
                      }`}
                      onClick={() =>
                        goToLine(
                          editor,
                          `/channels/${channelName.replace(/\//g, '~1')}`,
                          rawSpec,
                          `operation-subscribe-${channelName}`,
                          language,
                        )
                      }
                    >
                      <div className="flex flex-row">
                        <div className="flex-none">
                          <span className="mr-3 text-xs uppercase text-green-600 font-bold">
                            Sub
                          </span>
                        </div>
                        <span className="truncate">{channelName}</span>
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
              className={`p-2 pl-3 text-white cursor-pointer hover:bg-gray-900 ${
                hash === 'messages' ? 'bg-gray-900' : ''
              }`}
              onClick={() =>
                goToLine(
                  editor,
                  '/components/messages',
                  rawSpec,
                  'messages',
                  language,
                )
              }
            >
              Messages
            </div>
            <ul>
              {Object.keys(spec.components().messages() || {}).map(
                messageName => (
                  <li
                    key={messageName}
                    className={`p-2 pl-6 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900 truncate ${
                      hash === `message-${messageName}` ? 'bg-gray-900' : ''
                    }`}
                    onClick={() =>
                      goToLine(
                        editor,
                        `/components/messages/${messageName.replace(
                          /\//g,
                          '~1',
                        )}`,
                        rawSpec,
                        `message-${messageName}`,
                        language,
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
              className={`p-2 pl-3 text-white cursor-pointer hover:bg-gray-900 ${
                hash === 'schemas' ? 'bg-gray-900' : ''
              }`}
              onClick={() =>
                goToLine(
                  editor,
                  '/components/schemas',
                  rawSpec,
                  'schemas',
                  language,
                )
              }
            >
              Schemas
            </div>
            <ul>
              {Object.keys(spec.components().schemas() || {}).map(
                schemaName => (
                  <li
                    key={schemaName}
                    className={`p-2 pl-6 text-white cursor-pointer text-xs border-t border-gray-700 hover:bg-gray-900 truncate ${
                      hash === `schema-${schemaName}` ? 'bg-gray-900' : ''
                    }`}
                    onClick={() =>
                      goToLine(
                        editor,
                        `/components/schemas/${schemaName.replace(
                          /\//g,
                          '~1',
                        )}`,
                        rawSpec,
                        `schema-${schemaName}`,
                        language,
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
