import { loader } from '@monaco-editor/react';
import * as monacoAPI from 'monaco-editor/esm/vs/editor/editor.api';

// @ts-ignore
import specs from '@asyncapi/specs';
import state from '../state';
import { ParserService } from './parser';

export class MonacoService {
  private static Monaco: any = null;
  private static Editor: any = null;

  static get monaco() {
    return MonacoService.Monaco;
  }
  static set monaco(value: any) {
    MonacoService.Monaco = value;
  }

  static get editor() {
    return MonacoService.Editor;
  }
  static set editor(value: any) {
    MonacoService.Editor = value;
  }

  static loadMonaco() {
    loader
      .init()
      .then(monacoInstance => {
        // for handling the monaco-yaml plugin
        (window as any).monaco = monacoInstance;
        monacoInstance.editor.defineTheme('asyncapi-theme', {
          base: 'vs-dark',
          inherit: true,
          colors: {
            'editor.background': '#252f3f',
            'editor.lineHighlightBackground': '#1f2a37',
          },
          rules: [{ token: '', background: '#252f3f' }],
        });

        let allowedVersion = Object.keys(specs);
        allowedVersion.splice(0, 5);
        const schemas = allowedVersion.map(v => specs[v]);

        // @ts-ignore
        import('monaco-yaml/lib/esm/monaco.contribution').then(() => {
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
                  oneOf: schemas,
                },
              },
            ],
          };

          const json = monacoInstance.languages.json;
          json && json.jsonDefaults.setDiagnosticsOptions(options);
          monacoInstance.languages.registerCompletionItemProvider(
            'json',
            MonacoService.getRefsCompletionProvider('json'),
          );

          const yaml = (monacoInstance.languages as any).yaml;
          yaml && yaml.yamlDefaults.setDiagnosticsOptions(options);
          monacoInstance.languages.registerCompletionItemProvider(
            'yaml',
            MonacoService.getRefsCompletionProvider('yaml'),
          );

          state.editor.monaco.set(() => monacoInstance);
        });
      })
      .catch(console.error);
  }

  static getRefsCompletionProvider(
    lang: 'yaml' | 'json',
  ): monacoAPI.languages.CompletionItemProvider {
    return {
      provideCompletionItems: function(model, position) {
        // get editor content before the pointer
        const textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column,
        });
        if (typeof textUntilPosition !== 'string') {
          return { suggestions: [] };
        }

        const trimedPossiblePointer = textUntilPosition
          .trimEnd()
          .endsWith(lang === 'yaml' ? '$ref:' : '"$ref":');
        if (!trimedPossiblePointer) {
          return { suggestions: [] };
        }

        console.log(ParserService.getAllRefs());

        // get content info - are we inside of the area where we don't want suggestions,
        // what is the content without those areas
        // let info = getAreaInfo(textUntilPosition); // isCompletionAvailable, clearedText
        // // if we don't want any suggestions, return empty array
        // if (!info.isCompletionAvailable) {
        //     return [];
        // }
        // // if we want suggestions, inside of which tag are we?
        // var lastTag = getLastOpenedTag(info.clearedText);
        // // parse the content (not cleared text) into an xml document
        // var xmlDoc = stringToXml(textUntilPosition);
        // // get opened tags to see what tag we should look for in the XSD schema
        // var openedTags;
        // // get the elements/attributes that are already mentioned in the element we're in
        // var usedItems;
        // // find the last opened tag in the schema to see what elements/attributes it can have
        // var currentItem;

        // return available elements/attributes if the tag exists in the schema or an empty
        // array if it doesn't

        const suggestions = ParserService.getAllRefs().map(key => ({
          label: lang === 'yaml' ? `'${key}'` : `"${key}"`,
          kind: monacoAPI.languages.CompletionItemKind.Property,
          insertText: lang === 'yaml' ? `'${key}'` : `"${key}"`,
          range: {
            startLineNumber: position.lineNumber,
            startColumn: position.column,
            endLineNumber: position.lineNumber,
            endColumn: position.column,
          },
        }));

        return {
          suggestions,
        };
      },
    };
  }
}
