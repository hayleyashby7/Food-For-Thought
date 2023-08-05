export const validate = (
  emailaddress: string,
  password: string,
  confirmPassword?: string
) => {
  let isValid = true;
  const errors = { emailaddress: "", password: "", confirmPassword: "" };

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

  if (confirmPassword !== undefined && password !== confirmPassword) {
    isValid = false;
    errors.confirmPassword = "Password and confirmation password must match";
  }

  return { isValid, errors };
};
