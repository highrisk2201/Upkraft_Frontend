import React from 'react';

// Refer and Earn Component
const ReferAndEarn = () => {
    return (
        <div className="bg-indigo-700 text-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
            <img src="https://placehold.co/150x150/FFFFFF/A855F7?text=Gift" alt="Referral" className="w-24 h-24 rounded-full mb-4 -mt-16 border-4 border-white" />
            <h3 className="text-lg font-bold">Refer and Earn</h3>
            <p className="text-sm text-indigo-200 mt-2 mb-4">Invite friends and earn exclusive rewards for every successful referral.</p>
            <button className="bg-white text-indigo-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Refer Now &rarr;
            </button>
        </div>
    );
};

export default ReferAndEarn;
