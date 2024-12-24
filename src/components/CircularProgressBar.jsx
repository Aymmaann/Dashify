import React from "react";

const CircularProgressBar = ({ 
  size = 120, 
  strokeWidth = 10, 
  percentage = 93, 
  color = "#4caf50", 
  textLines = [] 
}) => {
  const radius = (size - strokeWidth) / 2; // Calculate the radius
  const circumference = 2 * Math.PI * radius; // Calculate the circumference
  const offset = circumference - (percentage / 100) * circumference; // Calculate the offset for the stroke-dasharray

  return (
    <div className="relative">
      {/* SVG Circle */}
      <svg width={size} height={size} className="block">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#2d2e65"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      {/* Text in the center (if provided) */}
      {textLines.length > 0 && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-gray-300">{textLines[0]}</p>
          <p className="text-3xl font-bold text-white">{textLines[1]}</p>
          <p className="text-xs text-gray-300">{textLines[2]}</p>
        </div>
      )}
    </div>
  );
};

export default CircularProgressBar;

