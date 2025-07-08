import server from "../utils/axios";

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
