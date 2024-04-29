// import { type User } from '@prisma/client';
// import { type DefaultSession } from 'next-auth';
// import {create} from 'zustand';

// import { getServerAuthSession } from "~/server/auth";

// interface UserSession extends DefaultSession {
//     user: {
//         id: string;
//         planId: string | null;
//         role: string;
//     } & DefaultSession["user"];
// }

// interface UserStoreState {
//     user: UserSession[] | null;
//     fetchUser: () => Promise<void>;
//     getUser: () => UserSession[] | null;
// }

// const useUserStore = create<UserStoreState>((set, get) => ({
//     user: null,
//     fetchUser: async () => {
//         try {
//             const session = await getServerAuthSession();
//             // @ts-ignore
//             set({ user: session?.user || null });
//         } catch (error) {
//             console.error('Failed to fetch the user:', error);
//             set({ user: null });
//         }
//     },
//     getUser: () => {
//         const { user } = get();
//         return user;
//     },
// }));

// export default useUserStore;
