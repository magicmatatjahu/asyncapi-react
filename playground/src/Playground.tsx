import React, { Component } from 'react';
// import { ConfigInterface } from '@asyncapi/react-component';
// import AsyncApiEditor from '@asyncapi/editor';

import { Editor } from './editor';

// import // RefreshIcon,
// // Navigation,
// // CodeEditorComponent,
// // FetchSchema,
// // Tabs,
// // Tab,
// // PlaygroundWrapper,
// // CodeEditorsWrapper,
// // AsyncApiWrapper,
// // SplitWrapper,
// './components';

// import { defaultConfig, parse, debounce } from './common';
import { defaultConfig, debounce } from './common';
import * as specs from './specs';

const defaultSchema = specs.streetlights;

interface State {
  schema: string;
  config: string;
  schemaFromExternalResource: string;
  refreshing: boolean;
}

class Playground extends Component<{}, State> {
  updateSchemaFn: (value: string) => void;
  updateConfigFn: (value: string) => void;

  state = {
    schema: defaultSchema,
    config: defaultConfig,
    schemaFromExternalResource: '',
    refreshing: false,
  };

  constructor(props: any) {
    super(props);
    this.updateSchemaFn = debounce(
      this.updateSchema,
      750,
      this.startRefreshing,
      this.stopRefreshing,
    );
    this.updateConfigFn = debounce(
      this.updateConfig,
      750,
      this.startRefreshing,
      this.stopRefreshing,
    );
  }

  render() {
    // const { schema, config } = this.state;
    // const parsedConfig = parse<ConfigInterface>(config || defaultConfig);

    return <Editor value={defaultSchema} />;

    // return (
    //   <AsyncApiEditor
    //     componentProps={{ schema, config: parsedConfig }}
    //     // monacoEditor={{ value: defaultSchema }}
    //   />
    // );

    // return (
    //   <PlaygroundWrapper>
    //     <Navigation />
    //     <SplitWrapper>
    //       <CodeEditorsWrapper>
    //         <Tabs
    //           additionalHeaderContent={this.renderAdditionalHeaderContent()}
    //         >
    //           <Tab title="Schema" key="Schema">
    //             <>
    //               <FetchSchema
    //                 parentCallback={this.updateSchemaFromExternalResource}
    //               />
    //               <CodeEditorComponent
    //                 key="Schema"
    //                 code={schema}
    //                 externalResource={schemaFromExternalResource}
    //                 parentCallback={this.updateSchemaFn}
    //                 mode="text/yaml"
    //               />
    //             </>
    //           </Tab>
    //           <Tab title="Configuration" key="Configuration">
    //             <CodeEditorComponent
    //               key="Configuration"
    //               code={config}
    //               parentCallback={this.updateConfigFn}
    //             />
    //           </Tab>
    //         </Tabs>
    //       </CodeEditorsWrapper>
    //       <AsyncApiWrapper>
    //         <AsyncApiEditor componentProps={{ schema, config: parsedConfig }} />
    //       </AsyncApiWrapper>
    //     </SplitWrapper>
    //   </PlaygroundWrapper>
    // );
  }

  private updateSchema = (schema: string) => {
    this.setState({ schema });
  };

  // private updateSchemaFromExternalResource = (schema: string) => {
  //   this.setState({ schemaFromExternalResource: schema });
  // };

  private updateConfig = (config: string) => {
    this.setState({ config });
  };

  private startRefreshing = (): void => {
    setTimeout(() => {
      this.setState({ refreshing: true });
    }, 500);
  };

  private stopRefreshing = (): void => {
    this.setState({ refreshing: false });
  };

  // private renderAdditionalHeaderContent = () => (
  //   <RefreshIcon show={this.state.refreshing}>{'\uE00A'}</RefreshIcon>
  // );
}

export default Playground;
