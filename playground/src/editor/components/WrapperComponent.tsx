import React from 'react';

// const originalCreateElement = React.createElement;
// React.createElement = function (type: any, props: any, ...children: any[]): any {
//   // console.log(type, props, children);
//   if (type === 'div') {
//     type = 'span'
//   }
//   return originalCreateElement(type, props, ...(children || []));
// }

interface WrapperComponentProps {
  capture: (node: React.ReactNode) => boolean;
  component: React.ElementType;
}

function checkElement(
  node: React.ReactNode | React.ReactNodeArray,
  props: WrapperComponentProps,
): React.ReactNode {
  if (!node) {
    return null;
  }
  if (Array.isArray(node)) {
    return node.map(n => checkElement(n, props));
  }
  if (props.capture(node)) {
    return <props.component {...(node as any).props} />;
  }
  const children = (node as any)?.props?.children;
  if (children) {
    return {
      ...(node as any),
      props: {
        ...(node as any).props,
        children: checkElement(children, props),
      },
    };
  }
  return node;
}

export const WrapperComponent: React.FunctionComponent<WrapperComponentProps> = ({
  capture,
  component,
  children,
}) => {
  return checkElement(children, { capture, component }) as any;
  // return null;
};

// import React from 'react';

// // const originalCreateElement = React.createElement;
// // React.createElement = function (type: any, props: any, ...children: any[]): any {
// //   // console.log(type, props, children);
// //   if (type === 'div') {
// //     type = 'span'
// //   }
// //   return originalCreateElement(type, props, ...(children || []));
// // }

// export const WrapperComponent: React.FunctionComponent = ({ children }) => {
//   const originalCreateElement = React.createElement;
//   React.createElement = function(
//     type: any,
//     props: any,
//     ...children: any[]
//   ): any {
//     // if (children[0] === 'lol') {
//     //   return <div>cipa</div>
//     // }
//     // if (type === 'div') {
//     //   type = 'span'
//     // }
//     return originalCreateElement(type, props, children);
//   };
//   // const renderedComponent = React.createElement(
//   //   (children as any).type,
//   //   (children as any).props,
//   //   ...((children as any).props.children || []),
//   // );
//   // React.createElement = originalCreateElement;

//   // console.log(children)
//   // console.log((children as any))
//   // console.log(children)
//   const renderedComponent = (
//     <>
//       <div>
//         <div>{(children as any)()}</div>
//       </div>
//     </>
//   );
//   React.createElement = originalCreateElement;

//   return renderedComponent;
// };
