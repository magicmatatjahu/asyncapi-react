import { createState, useState } from '@hookstate/core';

export interface WindowState {
  params: {
    readOnly: boolean;
  };
}

export const windowState = createState<WindowState>({
  params: {
    readOnly: false,
  },
});

export function useWindowState() {
  return useState(windowState);
}
