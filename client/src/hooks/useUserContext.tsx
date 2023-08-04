import { createContext, useContext } from 'react';
import { Session } from '@supabase/gotrue-js/dist/main/lib/types';

interface UserContextValue {
	id: string;
	session: Session | null;
	supabase: any;
}

const UserContext = createContext({} as UserContextValue);

export const UserContextProvider = UserContext.Provider;

export const useUserContext = () => useContext(UserContext);
