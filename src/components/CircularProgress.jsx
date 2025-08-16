import React from 'react';

// Reusable Circular Progress Component
const CircularProgress = ({ value, label, color }) => {
  const percentage = (value / 10) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center">
      <h3 className="font-semibold text-gray-600 text-sm sm:text-base mb-4">{label}</h3>
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="text-gray-200"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className={color}
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="45"
            cx="50"
            cy="50"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-bold text-gray-800">
          {value.toFixed(1)}<span className="text-base font-medium text-gray-500">/10</span>
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;
