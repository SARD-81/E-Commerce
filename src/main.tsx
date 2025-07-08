// src/main.tsx

import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

// Zustand auth store
import { useFetchUser, useAuthLoading } from "./state-management/stores/useAuthStore";

// React Query imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a single QueryClient instance
const queryClient = new QueryClient();

function AppInitializer({ children }: { children: React.ReactNode }) {
  const fetchUser = useFetchUser();
  const loading   = useAuthLoading();

  useEffect(() => {
    // Fire off the user‐fetch when the app boots
    fetchUser().catch((err) => {
      console.error("Initial user fetch failed:", err);
      // You could show a toast here if you like
    });
  }, [fetchUser]);

  // Global loader until we know auth state
  if (loading) {
    return <div>Loading…</div>;
  }
  return <>{children}</>;
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <QueryClientProvider client={queryClient}>
    <AppInitializer>
      <RouterProvider router={router} />
    </AppInitializer>
  </QueryClientProvider>
);
