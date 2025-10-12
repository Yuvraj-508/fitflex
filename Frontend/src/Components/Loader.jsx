// components/Loader.jsx
import React from "react";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        {/* Loading Text */}
        <p className="text-gray-700 text-lg font-semibold animate-pulse">{message}</p>
      </div>
    </div>
  );
};

export default Loader;
