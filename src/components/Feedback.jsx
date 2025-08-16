import React from 'react';

// Feedback Component
const Feedback = () => {
    const feedbackPending = 12;
    const progress = (feedbackPending / 20) * 100; // Assuming max 20 for calculation
    const circumference = 2 * Math.PI * 55;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
            <h3 className="font-semibold text-gray-600 mb-4">Feedback Pending</h3>
            <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 120 120">
                    <circle className="text-gray-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="55" cx="60" cy="60" />
                    <circle
                        className="text-red-500"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="55"
                        cx="60"
                        cy="60"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        transform="rotate(-90 60 60)"
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-800">
                    {feedbackPending}
                </span>
            </div>
            <button className="mt-6 bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-800 transition-colors w-full">
                Give Feedback
            </button>
        </div>
    );
};

export default Feedback;
