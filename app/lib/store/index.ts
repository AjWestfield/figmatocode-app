import { create } from 'zustand';

// Define a User interface
interface User {
  id: string;
  name?: string;
  email?: string;
  // Add other properties as needed
}

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  
  // App state
  isLoading: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Default state
  user: null,
  isAuthenticated: false,
  isLoading: false,
  
  // Actions
  setUser: (user) => set({ user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setIsLoading: (isLoading) => set({ isLoading }),
})); 