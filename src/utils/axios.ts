import axios from "axios";

const server = axios.create({
  baseURL: "https://qbc9.liara.run/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
});

export default server;
