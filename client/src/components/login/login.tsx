import React, { useState } from "react";
import carrotWordCloud from "../../assets/images/CarrotWordCloud.jpg";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="flex flex-row min-h-screen bg-yellow-100">
      <div className="flex-1 flex">
        <img
          src={carrotWordCloud}
          alt="carrot shaped word cloud"
          className="h-3/4 w-auto border-4 border-orange-400"
        />
      </div>
      <div className="flex-1 flex p-10">
        <div className="h-96 max-w-sm w-full bg-orange-400 text-2xl text-red-900 border-2 border-red-900 p-8 rounded-lg shadow-md">
          <strong className="block mb-6">
            Please enter your login details:
          </strong>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block">
                <span className="text-gray-700">Email Address: </span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter your email address"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div className="mt-4">
              <label className="block">
                <span className="text-gray-700">Password: </span>
                <input
                  type="password"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-lg font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
