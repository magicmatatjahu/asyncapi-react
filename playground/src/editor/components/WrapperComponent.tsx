import React from 'react';

// const originalCreateElement = React.createElement;
// React.createElement = function (type: any, props: any, ...children: any[]): any {
//   // console.log(type, props, children);
//   if (type === 'div') {
//     type = 'span'
//   }
//   return originalCreateElement(type, props, ...(children || []));
// }

export const WrapperComponent: React.FunctionComponent = ({ children }) => {
  const originalCreateElement = React.createElement;
  React.createElement = function(
    type: any,
    props: any,
    ...children: any[]
  ): any {
    // if (children[0] === 'lol') {
    //   return <div>cipa</div>
    // }
    // if (type === 'div') {
    //   type = 'span'
    // }
    return originalCreateElement(type, props, children);
  };
  // const renderedComponent = React.createElement(
  //   (children as any).type,
  //   (children as any).props,
  //   ...((children as any).props.children || []),
  // );
  // React.createElement = originalCreateElement;

  // console.log(children)
  // console.log((children as any))
  // console.log(children)
  const renderedComponent = (
    <>
      <div>
        <div>{(children as any)()}</div>
      </div>
    </>
  );
  React.createElement = originalCreateElement;

  return renderedComponent;
};
