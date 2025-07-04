import { useState, useEffect } from "react";
import server from "../utils/axios";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User";
}

const useUserData = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await server.get("/user");
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};

export default useUserData;
