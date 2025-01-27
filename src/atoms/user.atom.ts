import type { DefaultSession } from 'next-auth';
import { create } from 'zustand';

interface UserSession extends DefaultSession {
  user: {
    id: string;
    planId: string | null;
    role: string;
  } & DefaultSession['user'];
}

interface UserStoreState {
  user: UserSession | null;
  setUser: (user: UserSession) => void;
}

const useUserStore = create<UserStoreState>((set, _get) => ({
  user: null,
  setUser: (user) => {
    set({ user });
  },
}));

export default useUserStore;
