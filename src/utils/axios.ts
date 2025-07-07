import axios from "axios";

const server = axios.create({
  baseURL: "https://qbc9.liara.run/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Ensure this is set
  timeout: 10000,
});

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
