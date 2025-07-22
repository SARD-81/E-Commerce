import axios from "axios";
import useAuthStore from "../state-management/stores/useAuthStore"; // Fixed import
import { toast } from "react-toastify";
const server = axios.create({
  baseURL: "https://qbc9.liara.run/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
});

// request interceptor
// This interceptor adds the Authorization header to every request if a token is available
server.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token; // Access via getState()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log("Sending request to", config.url);
  return config;
});

// response interceptor (success + error)
server.interceptors.response.use(
  (response) => {
    console.log("Response from", response.config.url, response);
    return response;
  },
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      // Prevent recursive logout loops
      toast.warning(
        "Unauthorized. Please log in or provide valid credentials to access this resource."
      );
    } else if (status === 403) {
      toast.warning("Access denied.");
    } else if (status === 500) {
      toast.warning("A server error occurred. Please try again later.");
    } else if (!error.response) {
      // Network error (no response object)
      toast.warning("Network error. Please check your internet connection.");
    } else if (error.code === "ECONNABORTED") {
      toast.warning("Request timed out. Please try again.");
    }
    console.log("API Error:", error);
    return Promise.reject(error);
  }
);

export default server;
