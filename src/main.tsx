import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import "./index.css";
import router from "./router.tsx";

// Create a single QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
