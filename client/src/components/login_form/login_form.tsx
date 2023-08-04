import React, { useState } from "react";
import { validate } from "../validation/validate_login";

const LoginForm: React.FC = () => {
  const [emailaddress, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ emailaddress: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors } = validate(emailaddress, password);
    setErrors(errors);

    if (isValid) {
      console.log(`EmailAddress: ${emailaddress}, Password: ${password}`);
      setEmailaddress("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-between border-2 border-red-500 m-4 p-2 rounded-lg w-full"
    >
      <div className="mb-4 md:mb-0 md:mr-4">
        <label className="block">
          <span className="text-green-800">Email Address: </span>
          <input
            type="text"
            className="form-input mt-1 block w-full"
            value={emailaddress}
            onChange={(e) => setEmailaddress(e.target.value)}
          />
        </label>
        {errors.emailaddress && (
          <p className="text-red-600">{errors.emailaddress}</p>
        )}
      </div>
      <div className="mb-4 md:mb-0 md:mr-4">
        <label className="block">
          <span className="text-green-800">Password: </span>
          <input
            type="password"
            className="form-input mt-1 block w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errors.password && <p className="text-red-600">{errors.password}</p>}
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 pt-4 md:pt-0 w-full md:w-auto border border-transparent text-lg font-medium rounded-lg text-white bg-green-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
