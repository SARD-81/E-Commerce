import server from "../utils/axios";

export const getUserData = async () => {
  try {
    const response = await server.get("/user");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};

export const updateUserRole = async (role: "Admin" | "User") => {
  try {
    const response = await server.patch("/user/role", { role });
    return response.data;
  } catch (error) {
    console.error("Error updating user role", error);
    throw error;
  }
};

export const updateUser = async (id: string, data: { name?: string; email?: string }) => {
  const res = await axios.put(`/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id: string) => {
  const res = await axios.delete(`/users/${id}`);
  return res.data;
};