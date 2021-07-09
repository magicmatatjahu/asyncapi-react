import { createState, useState } from '@hookstate/core';

const schema = `asyncapi: '2.0.0'
id: 'urn:rpc:example:client'
defaultContentType: application/json

info:
  title: RPC Client Example
  description: This example demonstrates how to define an RPC client.
  version: '1.0.0'

servers:
  production:
    url: rabbitmq.example.org
    protocol: amqp

channels:
  '{queue}':
    parameters:
      queue:
        schema:
          type: string
          pattern: '^amq\\.gen\\-.+$'
    bindings:
      amqp:
        is: queue
        queue:
          exclusive: true
    subscribe:
      operationId: receiveSumResult
      bindings:
        amqp:
          ack: false
      message:
        correlationId:
          location: $message.header#/correlation_id
        payload:
          $ref: '#/components/schemas/test'

  rpc_queue:
    bindings:
      amqp:
        is: queue
        queue:
          durable: false
    publish:
      operationId: requestSum
      bindings:
        amqp:
          ack: true
      message:
        bindings:
          amqp:
            replyTo:
              type: string
        correlationId:
          location: $message.header#/correlation_id
        payload:
          type: object
          properties:
            numbers:
              type: array
              items:
                type: number
              examples:
                - [4,3]
  
components:
  schemas:
    test:
      type: object
      properties:
        result:
          type: number
          examples:
            - 7
`;

export interface EditorState {
  monaco: any;
  editor: any;
  height: string;
  editorValue: string;
  language: string;
}

export const editorState = createState<EditorState>({
  monaco: null,
  editor: null,
  height: 'calc(100% - 30px)',
  editorValue: schema,
  language: 'yaml',
});

export function useEditorState() {
  return useState(editorState);
}
