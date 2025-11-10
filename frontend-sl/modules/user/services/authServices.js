export const loginUser = async ({ email, password }) => {
  await new Promise((r) => setTimeout(r, 600)); // simulate delay
  if (email === "demo@user.com" && password === "123456") {
    return {
      id: 1,
      name: "Demo User",
      email,
      token: "demo_token_123",
    };
  }
  throw new Error("Invalid email or password");
};

export const registerUser = async ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  await new Promise((r) => setTimeout(r, 600));
  if (!name || !email || !password) throw new Error("All fields required");
  if (password !== confirmPassword) throw new Error("Passwords do not match");
  return {
    id: Date.now(),
    name,
    email,
    token: "registered_user_token",
  };
};
