function checkPassword(password) {
  if (password.length < 10) return false;

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  return hasLowercase && hasUppercase && hasNumber && hasSpecialChar;
}

export { checkPassword };
