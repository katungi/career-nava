import { create } from 'zustand';
import type { Scholarship, Document, BookingSession } from '@prisma/client';

interface AppState {
    documents: Document[] | undefined;
    sessions: BookingSession[] | undefined;
    scholarships: Scholarship[] | undefined;
    isLoading: boolean;
    error: string | null;
    setDocuments: (documents: Document[]) => void;
    setSessions: (sessions: BookingSession[]) => void;
    setScholarships: (scholarships: Scholarship[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
    documents: undefined,
    sessions: undefined,
    scholarships: undefined,
    isLoading: false,
    error: null,
    setDocuments: (documents) => set({ documents }),
    setSessions: (sessions) => set({ sessions }),
    setScholarships: (scholarships) => set({ scholarships }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error })
}));