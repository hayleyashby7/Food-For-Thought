export const validate = (emailaddress: string, password: string) => {
  let isValid = true;
  const errors = { emailaddress: "", password: "" };

  if (!emailaddress.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    isValid = false;
    errors.emailaddress = "Please input email address in the correct format";
  }

  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/
    )
  ) {
    isValid = false;
    errors.password =
      "Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one number, and one special character";
  }

  return { isValid, errors };
};
