import server from "../utils/axios";

export const authService = {
  login: async (credentials: { email: string; password: string }) => {
    const response = await server.post("/users/auth", credentials);
    return response.data;
  },

  logout: async () => {
    await server.post("/users/logout");
  },

  getProfile: async () => {
    const response = await server.get("/users/profile");
    return response.data;
  },
};

// Keep existing functions
export const getUserData = async () => {
  try {
    const response = await server.get("/users/profile");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};

export const updateUserRole = async (role: "Admin" | "User") => {
  try {
    const response = await server.patch("/users/role/:id", { role });
    return response.data;
  } catch (error) {
    console.error("Error updating user role", error);
    throw error;
  }
};

export const verifyAdminStatus = async () => {
  try {
    const response = await server.get("/users/verify-admin");
    return response.data.isAdmin;
  } catch (error) {
    console.error("Admin verification failed", error);
    return false;
  }
};
