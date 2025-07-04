import React from "react";
import { CircularProgress } from "@mui/material";

const Preloader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <CircularProgress size={60} thickness={4} color="primary" />
    </div>
  );
};

export default Preloader;
