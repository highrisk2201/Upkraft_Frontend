import React from 'react';

const upcomingLessons = [
    { date: '21 July', time: '2:00 - 3:00 PM', course: 'Introduction to Piano', student: 'Eunica Robel & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 PM', course: 'Finger Warmups', student: 'Eunica Robel & Arnold Hayes' },
    { date: '23 July', time: '3:00 - 4:00 PM', course: 'Simple Chords', student: 'Eunica Robel & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 PM', course: 'Rhythm Basics', student: 'Eunica Robel & Arnold Hayes' },
    { date: '25 July', time: '2:00 - 3:00 PM', course: 'Simple Melodies', student: 'Eunica Robel & Arnold Hayes' },
    { date: '26 July', time: '7:00 - 8:00 PM', course: 'Treble & Bass Clef', student: 'Eunica Robel & Arnold Hayes' },
    { date: '24 July', time: '5:00 - 6:00 PM', course: 'Rhythm Basics', student: 'Eunica Robel & Arnold Hayes' },
    { date: '22 July', time: '4:00 - 5:00 PM', course: 'Finger Warmups', student: 'Eunica Robel & Arnold Hayes' },
];

// Upcoming Lessons Component
const UpcomingLessons = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm col-span-1 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Upcoming Lessons</h2>
                <a href="#" className="text-sm text-indigo-600 font-semibold">View All</a>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-gray-500">
                            <th className="font-normal py-2 pr-2">Date</th>
                            <th className="font-normal py-2 px-2">Time</th>
                            <th className="font-normal py-2 px-2">Course</th>
                            <th className="font-normal py-2 pl-2">Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingLessons.map((lesson, index) => (
                            <tr key={index} className="border-t border-gray-100">
                                <td className="py-3 pr-2 font-medium text-gray-800">{lesson.date}</td>
                                <td className="py-3 px-2 text-gray-600">{lesson.time}</td>
                                <td className="py-3 px-2 text-gray-600">{lesson.course}</td>
                                <td className="py-3 pl-2 text-gray-600">{lesson.student}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpcomingLessons;
