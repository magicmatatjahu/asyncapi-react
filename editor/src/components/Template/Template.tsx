import React from 'react';

import { HTMLWrapper } from './HTMLWrapper';

interface TemplateProps {}

export const Template: React.FunctionComponent<TemplateProps> = ({}) => {
  return (
    <div className="flex flex-1 flex-col h-full overflow-hidden">
      <div className="overflow-auto">
        <HTMLWrapper />
      </div>
    </div>
  );
};
