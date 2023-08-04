import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://lyvfiqkbuwzajozklwow.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5dmZpcWtidXd6YWpvemtsd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MjQwOTUsImV4cCI6MjAwNjQwMDA5NX0.e4WjzlbK9Nbt14N3qmL92rmB13dYFw4JaU9_6i2y7yI"
);

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setError(error.message);
    } else {
      setEmailSent(true);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-yellow-100 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full border-4 border-orange-500 p-8 m-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-green-900">
          Forgot Your Password?
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Send Password Reset Email
            </button>
          </div>
        </form>
        {emailSent && (
          <div className="mt-4 text-green-600">
            If an account exists for {email}, we emailed a link to reset your
            password.
          </div>
        )}
        {error && <div className="mt-4 text-red-600">{error}</div>}
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
