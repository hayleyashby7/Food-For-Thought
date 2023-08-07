/* eslint-disable no-mixed-spaces-and-tabs */
import { Auth } from "@supabase/auth-ui-react";
//import { customTheme } from "./supabase_theme";
import { useUserContext } from "../../hooks/useUserContext";
import carrotWordCloud from "../../assets/images/CarrotWordCloud.jpg";

export const LoginForm = () => {
  const { supabase, session } = useUserContext();

  return (
    <div className="flex min-h-screen bg-yellow-100">
      <div className="flex-none w-1/2 flex p-4">
        <img
          src={carrotWordCloud}
          alt="carrot shaped word cloud"
          className="max-h-96 w-auto border-4 border-orange-400"
        />
      </div>

      <div className="flex-1 flex p-4">
        {session ? (
          <div className="text-center sm:w-1/2 lg:w-1/2 h-1/3 border-4 border-orange-600 rounded-md py-4 px-16 bg-yellow-400 text-green-800">
            <p className="text-lg sm:text-xl mb-4">Logged in!</p>
            <button
              onClick={() => supabase.auth.signOut()}
              className="bg-red-500 text-white rounded p-2 hover:bg-red-600 transition"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="sm:w-1/2 lg:w-1/2 h-3/4 border-4 border-orange-600 rounded-md py-4 px-8 bg-yellow-400 text-green-800">
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
    </div>
  );
};

export default LoginForm;
