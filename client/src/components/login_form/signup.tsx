import React, { useState } from "react";
import { validate } from "../validation/validate_login";

const SignUpForm: React.FC = () => {
  const [emailaddress, setEmailaddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    emailaddress: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid, errors } = validate(
      emailaddress,
      password,
      confirmPassword
    );
    setErrors(errors);

    if (isValid) {
      console.log(`EmailAddress: ${emailaddress}, Password: ${password}`);
      setEmailaddress("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-between border-2 border-red-500 m-4 p-2 rounded-lg w-full md:max-w-xl mx-auto"
    >
      <div className="flex flex-col mb-4 md:mb-0 md:mr-4 flex-shrink">
        <label>
          Email:
          <input
            type="email"
            value={emailaddress}
            onChange={(e) => setEmailaddress(e.target.value)}
          />
        </label>
        {errors.emailaddress && (
          <p className="text-red-600">{errors.emailaddress}</p>
        )}
      </div>
      <div className="flex flex-col mb-4 md:mb-0 md:mr-4 flex-shrink">
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {errors.password && <p className="text-red-600">{errors.password}</p>}
      </div>
      <div className="flex flex-col mb-4 md:mb-0 md:mr-4 flex-shrink">
        <label className="block text-center sm:text-left">
          <span className="text-green-800">Confirm Password: </span>
          <input
            type="password"
            className="form-input mt-1 block w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {errors.confirmPassword && (
          <p className="text-red-600">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-4 py-2 pt-4 md:pt-0 w-full md:w-auto border border-transparent text-lg font-medium rounded-lg text-white bg-green-700 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;