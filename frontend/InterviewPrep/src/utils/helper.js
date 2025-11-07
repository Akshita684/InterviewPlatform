export const validateEmail = (email) => {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ✅ RegExp literal, not string
  return regex.test(email.trim().toLowerCase());
};
