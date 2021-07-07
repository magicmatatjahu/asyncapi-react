import { createState, useState } from '@hookstate/core';

export interface SidebarState {
  panels: {
    navigation: boolean;
    editor: boolean;
    template: boolean;
  };
}

export const sidebarState = createState<SidebarState>({
  panels: {
    navigation: true,
    editor: true,
    template: true,
  },
});

export function useSidebarState() {
  return useState(sidebarState);
}
