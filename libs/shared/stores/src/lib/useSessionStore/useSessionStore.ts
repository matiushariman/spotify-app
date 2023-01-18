import { useState, useCallback } from 'react';
import { create } from 'zustand';

export interface UseSessionStoreState {
  accessToken: string | null;
  isAuthenticated: boolean;
  setAccessToken: (accessToken: string) => void;
  removeAccessToken: () => void;
}

export const useSessionStore = create<UseSessionStoreState>((set) => ({
  accessToken: null,
  isAuthenticated: false,
  setAccessToken: (accessToken) => {
    set({ accessToken, isAuthenticated: true });
  },
  removeAccessToken: () => {
    set({ accessToken: null, isAuthenticated: false });
  },
}));

export default useSessionStore;
