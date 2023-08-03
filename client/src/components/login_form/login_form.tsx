import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-between border-2 border-red-500 m-4 p-2"
    >
      <div className="mb-4 md:mb-0 md:mr-4">
        <label className="block">
          <span className="text-gray-700">Email Address: </span>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-4 md:mb-0 md:mr-4">
        <label className="block">
          <span className="text-gray-700">Password: </span>
          <input
            type="password"
            className="form-input mt-1 block w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg font-medium rounded-lg text-white bg-green-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
