import React from 'react';
import { Home, User, BookOpen, Calendar, Clipboard, Music, Mic, DollarSign, Gift, Settings, LogOut, X } from 'lucide-react';

// Sidebar Component
const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
    const menuItems = [
        { icon: Home, label: 'Home' },
        { icon: User, label: 'My Students' },
        { icon: BookOpen, label: 'My Courses' },
        { icon: Calendar, label: 'Calendar' },
        { icon: Clipboard, label: 'Assignment' },
        { icon: Music, label: 'Music Library' },
        { icon: Mic, label: 'Practice Studio' },
        { icon: DollarSign, label: 'Payment Summary' },
        { icon: Gift, label: 'Refer & Earn' },
        { icon: Settings, label: 'Settings' },
    ];

    return (
        <>
            {/* Overlay for mobile */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>
            
            <aside className={`fixed top-0 left-0 h-full bg-indigo-700 text-white w-64 transform transition-transform z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:w-64 flex-shrink-0`}>
                <div className="p-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">UPKRAFT</h1>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col justify-between h-[calc(100%-120px)] px-4">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a href="#" className={`flex items-center p-3 my-1 rounded-lg transition-colors ${item.label === 'Home' ? 'bg-white text-indigo-700' : 'hover:bg-indigo-600'}`}>
                                    <item.icon className="mr-3" size={20} />
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div>
                         <a href="#" className="flex items-center p-3 my-1 rounded-lg hover:bg-indigo-600">
                            <LogOut className="mr-3" size={20} />
                            <span>Logout</span>
                        </a>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
