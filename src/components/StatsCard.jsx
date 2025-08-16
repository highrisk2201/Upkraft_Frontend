import React from 'react';

// Stats Card Component
const StatsCard = ({ label, value }) => {
    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm">
            <p className="text-3xl font-bold text-gray-800">{value}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
        </div>
    );
};

export default StatsCard;
