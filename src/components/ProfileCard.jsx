import React from 'react';

const user = {
  name: 'Sherry Wolf',
  role: 'Piano Tutor',
  avatar: 'https://placehold.co/100x100/A855F7/FFFFFF?text=SW',
};

// Profile Card Component
const ProfileCard = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-indigo-400">
            <h2 className="text-lg font-semibold mb-4">Profile</h2>
            <div className="flex flex-col items-center text-center">
                <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-xl font-bold">{user.name}</h3>
                <p className="text-gray-500">{user.role}</p>
            </div>
            <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                    <span className="text-gray-600">Students</span>
                    <span className="font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">30</span>
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                    <span className="text-gray-600">Course</span>
                    <span className="font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">6</span>
                </div>
                <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                    <span className="text-gray-600">Reward</span>
                    <span className="font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded">3</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
