import { createContext, useContext } from 'react';
import { Session } from '@supabase/gotrue-js/dist/main/lib/types';

interface UserContextValue {
	id: string;
	session: Session | null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	supabase: any;
}

const UserContext = createContext({} as UserContextValue);

export const UserContextProvider = UserContext.Provider;

export const useUserContext = () => useContext(UserContext);
