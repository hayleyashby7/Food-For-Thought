import { UserContextProvider } from "../../hooks/useUserContext";
import { useState, useEffect } from "react";
import supabase from "../../lib/supabase";
import { Session } from "@supabase/gotrue-js/dist/main/lib/types";

interface UserContextProps {
  children: React.ReactNode;
}

export const UserContext: React.FC<UserContextProps> = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session as Session));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session as Session);
      setUserId(session?.user?.id || "");
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <UserContextProvider
      value={{
        id: userId,
        session: session,
        supabase: supabase,
      }}
    >
      {children}
    </UserContextProvider>
  );
};
