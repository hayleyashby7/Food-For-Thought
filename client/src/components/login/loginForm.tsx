/* eslint-disable no-mixed-spaces-and-tabs */
import { Auth } from "@supabase/auth-ui-react";
//import { customTheme } from "./supabase_theme";
import { useUserContext } from "../../hooks/useUserContext";

export const LoginForm = () => {
  const { supabase, session } = useUserContext();

  return (
    <div className="grid pt-24 sm:p-8 justify-items-center">
      {session ? (
        <div className="text-center sm:text-left sm:w-1/3 lg:w-1/4 xl:max-w-xl border-4 border-orange-600 rounded-md py-4 px-32 flex flex-col sm:items-start bg-yellow-400 text-green-800">
          <p className="text-lg sm:text-xl mb-4">Logged in!</p>
          <button
            onClick={() => supabase.auth.signOut()}
            className="bg-red-500 text-white rounded p-2 hover:bg-red-600 transition "
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="sm:w-1/3 lg:w-1/4 xl:max-w-xl border-4 border-orange-600 rounded-md py-4 px-16 flex flex-col sm:items-start bg-yellow-400 sm:text-left text-green-800">
          <Auth
            supabaseClient={supabase}
            appearance={{
              style: {
                button: { background: "green", color: "white" },
                message: { color: "red" },
                label: { color: "dark green" },
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
