
import React from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

const user = {
  name: 'Sherry Wolf',
  role: 'Piano Tutor',
  avatar: 'https://placehold.co/100x100/A855F7/FFFFFF?text=SW',
};

// Header Component
const Header = ({ setSidebarOpen }) => {
    return (
        <header className="bg-white shadow-sm p-4 flex items-center justify-between w-full">
            <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-4 text-gray-600">
                    <Menu size={24} />
                </button>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search here"
                        className="bg-gray-100 rounded-lg pl-10 pr-4 py-2 w-40 sm:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>
            <div className="flex items-center">
                <button className="relative mr-4 text-gray-600">
                    <Bell size={24} />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-indigo-500 rounded-full"></span>
                </button>
                <div className="flex items-center">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <p className="font-semibold text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.role}</p>
                    </div>
                     <ChevronDown size={20} className="ml-2 text-gray-500" />
                </div>
            </div>
        </header>
    );
};

export default Header;
