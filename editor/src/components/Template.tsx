import React from 'react';

import { HTMLWrapper } from './HTMLWrapper';
import { TemplateSidebar } from './TemplateSidebar';

interface TemplateProps {}

export const Template: React.FunctionComponent<TemplateProps> = ({}) => {
  return (
    <div className="flex flex-1 flex-col h-full overflow-hidden">
      <TemplateSidebar />
      <div className="overflow-auto">
        <HTMLWrapper />
      </div>
    </div>
  );
};
