import axios from "axios";
import useAuthStore from "../state-management/stores/useAuthStore"; // Fixed import

const server = axios.create({
  baseURL: "https://qbc9.liara.run/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
});

// Add token to requests
server.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token; // Access via getState()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors
server.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Prevent recursive logout loops
      if (!error.config.url.includes("/logout") && 
          !error.config.url.includes("/login")) {
        useAuthStore.getState().logout();
      }
    }
    return Promise.reject(error);
  }
);

// Add this to log requests
server.interceptors.request.use((config) => {
  console.log("Sending request to:", config.url);
  return config;
});

// Add this to log responses
server.interceptors.response.use(
  (response) => {
    console.log("Response from:", response.config.url, response);
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default server;