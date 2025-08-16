import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import StatsCard from './components/StatsCard';
import UpcomingLessons from './components/UpcomingLessons';
import CircularProgress from './components/CircularProgress';
import ReferAndEarn from './components/ReferandEarn';
import Feedback from './components/Feedback';
// import { stats } from './data/stats'; // Assuming you have a stats data file

const stats = [
  { label: 'Total Active Students', value: 30 },
  { label: 'Total Active Students', value: 30 },
  { label: 'Tutor CSAT Score', value: '80%' },
  { label: 'Tutor CSAT Score', value: '80%' },
  { label: 'Assignment Completion Rate', value: '15%' },
  { label: 'Assignment Completion Rate', value: '15%' },
];



// --- Main App Component ---
export default function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 sm:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        
                        <div className="lg:col-span-1 xl:col-span-1">
                            <ProfileCard />
                        </div>

                        <div className="lg:col-span-3 xl:col-span-3 space-y-6">
                             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {stats.map((stat, index) => (
                                    <StatsCard key={index} label={stat.label} value={stat.value} />
                                ))}
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <UpcomingLessons />
                                <div className="space-y-6">
                                    <CircularProgress value={7.6} label="Overall Course Performance" color="text-yellow-500" />
                                    <CircularProgress value={6.6} label="Overall Student Performance" color="text-orange-400" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 lg:row-start-1 xl:col-span-1 xl:row-auto space-y-6">
                           <ReferAndEarn />
                           <Feedback />
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
