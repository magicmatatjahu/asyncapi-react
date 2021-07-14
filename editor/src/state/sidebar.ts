import { createState, useState } from '@hookstate/core';

export interface SidebarState {
  panels: {
    filesExplorer: boolean;
    navigation: boolean;
    editor: boolean;
    template: boolean;
  };
}

export const sidebarState = createState<SidebarState>({
  panels: {
    filesExplorer: false,
    navigation: true,
    editor: true,
    template: true,
  },
});

export function useSidebarState() {
  return useState(sidebarState);
}
