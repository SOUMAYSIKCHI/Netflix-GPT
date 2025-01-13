import React from "react";

const Shimmer = () => {
  return (
    <div className="w-full mx-auto mt-6">
      {/* Shimmer Header */}
      <div className="w-full h-28 bg-gray-300 rounded animate-pulse"></div>


      {/* Shimmer Cards */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="p-4 bg-gray-300 rounded-lg animate-pulse flex flex-col gap-4"
            >
              <div className="w-full h-34 bg-gray-400 rounded"></div>
              <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
              <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
