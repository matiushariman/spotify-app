import { useState, useCallback } from 'react';
import { create } from 'zustand';

export interface UseSessionStoreState {
  accessToken: string | null;
  isAuthenticated: boolean;
  setAccessToken: (accessToken: string) => void;
}

export const useSessionStore = create<UseSessionStoreState>((set) => ({
  accessToken: null,
  isAuthenticated: false,
  setAccessToken: (accessToken) => {
    set({ accessToken, isAuthenticated: true });
  },
}));

export default useSessionStore;
