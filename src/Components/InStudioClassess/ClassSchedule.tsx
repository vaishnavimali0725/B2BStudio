import React, { useEffect, useState } from 'react';

const ClassSchedule: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState<string>("No active class right now.");
  const [activeDay, setActiveDay] = useState<string>('Monday');

  useEffect(() => {
    const updateMessage = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour + minute / 60;

      if (time >= 6 && time < 7) setCurrentMessage("🧘 Yoga batch (6:00–7:00 AM) is happening now!");
      else if (time >= 7 && time < 8) setCurrentMessage("💃 Zumba batch (7:00–8:00 AM) is happening now!");
      else if (time >= 8 && time < 9) setCurrentMessage("🌿 Yoga batch (8:00–9:00 AM) is happening now!");
      else if (time >= 10 && time < 11) setCurrentMessage("👩‍🦰 Ladies Dance (10:00–11:00 AM) is happening now!");
      else if (time >= 16 && time < 17) setCurrentMessage("👩‍🦰 Ladies Dance (4:00–5:00 PM) is happening now!");
      else if (time >= 17 && time < 18) setCurrentMessage("🧒 Kids Foundation (5:00–6:00 PM) is happening now!");
      else if (time >= 18 && time < 19) setCurrentMessage("💃 Zumba (6:00–7:00 PM) is happening now!");
      else if (time >= 19 && time < 20) setCurrentMessage("🔥 Intermediate / Advance (7:00–8:00 PM) is happening now!");
      else if (time >= 20 && time < 21) setCurrentMessage("🏆 Professional Batch (8:00–9:00 PM) is happening now!");
      else setCurrentMessage("No active class right now. Please check the schedule below.");
    };

    updateMessage();
    const interval = setInterval(updateMessage, 60000);
    return () => clearInterval(interval);
  }, []);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const scheduleData = {
    Monday: [
      { time: "6:00-7:00 AM", class: "Yoga", instructor: "Arpita", type: "Wellness", level: "All Levels" },
      { time: "7:00-8:00 AM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "Beginner" },
      { time: "8:00-9:00 AM", class: "Yoga Advanced", instructor: "Arpita", type: "Wellness", level: "Intermediate" },
      { time: "10:00-11:00 AM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "4:00-5:00 PM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "5:00-6:00 PM", class: "Kids Foundation", instructor: "Kanak", type: "Dance", level: "Kids" },
      { time: "6:00-7:00 PM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "All Levels" },
      { time: "7:00-8:00 PM", class: "Intermediate/Advanced", instructor: "Santosh", type: "Dance", level: "Intermediate" },
      { time: "8:00-9:00 PM", class: "Professional Batch", instructor: "Omcar", type: "Dance", level: "Advanced" }
    ],
    Tuesday: [
      { time: "6:00-7:00 AM", class: "Yoga", instructor: "Arpita", type: "Wellness", level: "All Levels" },
      { time: "7:00-8:00 AM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "Beginner" },
      { time: "8:00-9:00 AM", class: "Yoga Advanced", instructor: "Arpita", type: "Wellness", level: "Intermediate" },
      { time: "10:00-11:00 AM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "4:00-5:00 PM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "5:00-6:00 PM", class: "Kids Foundation", instructor: "Kanak", type: "Dance", level: "Kids" },
      { time: "6:00-7:00 PM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "All Levels" },
      { time: "7:00-8:00 PM", class: "Intermediate/Advanced", instructor: "Santosh", type: "Dance", level: "Intermediate" },
      { time: "8:00-9:00 PM", class: "Professional Batch", instructor: "Omcar", type: "Dance", level: "Advanced" }
    ],
    Wednesday: [
      { time: "6:00-7:00 AM", class: "Yoga", instructor: "Arpita", type: "Wellness", level: "All Levels" },
      { time: "7:00-8:00 AM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "Beginner" },
      { time: "8:00-9:00 AM", class: "Yoga Advanced", instructor: "Arpita", type: "Wellness", level: "Intermediate" },
      { time: "10:00-11:00 AM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "4:00-5:00 PM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "5:00-6:00 PM", class: "Kids Foundation", instructor: "Kanak", type: "Dance", level: "Kids" },
      { time: "6:00-7:00 PM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "All Levels" },
      { time: "7:00-8:00 PM", class: "Intermediate/Advanced", instructor: "Santosh", type: "Dance", level: "Intermediate" },
      { time: "8:00-9:00 PM", class: "Professional Batch", instructor: "Omcar", type: "Dance", level: "Advanced" }
    ],
    Thursday: [
      { time: "6:00-7:00 AM", class: "Yoga", instructor: "Arpita", type: "Wellness", level: "All Levels" },
      { time: "7:00-8:00 AM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "Beginner" },
      { time: "8:00-9:00 AM", class: "Yoga Advanced", instructor: "Arpita", type: "Wellness", level: "Intermediate" },
      { time: "10:00-11:00 AM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "4:00-5:00 PM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "5:00-6:00 PM", class: "Kids Foundation", instructor: "Kanak", type: "Dance", level: "Kids" },
      { time: "6:00-7:00 PM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "All Levels" },
      { time: "7:00-8:00 PM", class: "Intermediate/Advanced", instructor: "Santosh", type: "Dance", level: "Intermediate" },
      { time: "8:00-9:00 PM", class: "Professional Batch", instructor: "Omcar", type: "Dance", level: "Advanced" }
    ],
    Friday: [
      { time: "6:00-7:00 AM", class: "Yoga", instructor: "Arpita", type: "Wellness", level: "All Levels" },
      { time: "7:00-8:00 AM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "Beginner" },
      { time: "8:00-9:00 AM", class: "Yoga Advanced", instructor: "Arpita", type: "Wellness", level: "Intermediate" },
      { time: "10:00-11:00 AM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "4:00-5:00 PM", class: "Ladies Dance", instructor: "Omcar", type: "Dance", level: "Women Only" },
      { time: "5:00-6:00 PM", class: "Kids Foundation", instructor: "Kanak", type: "Dance", level: "Kids" },
      { time: "6:00-7:00 PM", class: "Zumba", instructor: "Nikhil", type: "Fitness", level: "All Levels" },
      { time: "7:00-8:00 PM", class: "Intermediate/Advanced", instructor: "Santosh", type: "Dance", level: "Intermediate" },
      { time: "8:00-9:00 PM", class: "Professional Batch", instructor: "Omcar", type: "Dance", level: "Advanced" }
    ],
    Saturday: [
      { time: "7:00-9:00 AM", class: "Weekend Workshop", instructor: "Omcar", type: "Workshop", level: "All Levels" },
      { time: "10:00-12:00 PM", class: "Kids Special", instructor: "Kanak", type: "Dance", level: "Kids" },
      { time: "2:00-4:00 PM", class: "Advanced Training", instructor: "Nikhil", type: "Dance", level: "Advanced" },
      { time: "4:00-6:00 PM", class: "Yoga Intensive", instructor: "Arpita", type: "Wellness", level: "All Levels" }
    ],
    Sunday: [
      { time: "8:00-10:00 AM", class: "Sunday Zumba", instructor: "Nikhil", type: "Fitness", level: "All Levels" },
      { time: "10:00-12:00 PM", class: "Family Dance", instructor: "Santosh", type: "Dance", level: "All Levels" },
      { time: "4:00-6:00 PM", class: "Practice Session", instructor: "All", type: "Practice", level: "All Levels" }
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Wellness': return 'bg-green-100 text-green-800';
      case 'Fitness': return 'bg-pink-100 text-pink-800';
      case 'Dance': return 'bg-purple-100 text-purple-800';
      case 'Workshop': return 'bg-orange-100 text-orange-800';
      case 'Practice': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      case 'All Levels': return 'bg-blue-100 text-blue-800';
      case 'Kids': return 'bg-pink-100 text-pink-800';
      case 'Women Only': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Class Schedule</h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete timetable for all our studio classes. Find the perfect time for your practice.
          </p>
        </div>

        {/* Current Class Notification */}
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-2xl p-6 mb-8 flex items-center justify-center gap-4">
          <div className="text-2xl">⏰</div>
          <span className="text-lg font-medium">{currentMessage}</span>
        </div>

        {/* Day Selector */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition duration-200 ${
                activeDay === day
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-pink-100'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-pink-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Time</th>
                  <th className="px-6 py-4 text-left">Class</th>
                  <th className="px-6 py-4 text-left">Instructor</th>
                  <th className="px-6 py-4 text-left">Type</th>
                  <th className="px-6 py-4 text-left">Level</th>
                  <th className="px-6 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {scheduleData[activeDay as keyof typeof scheduleData]?.map((classItem, index) => (
                  <tr key={index} className="hover:bg-pink-50 transition duration-200">
                    <td className="px-6 py-4 font-semibold text-gray-800">{classItem.time}</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-800">{classItem.class}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{classItem.instructor}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(classItem.type)}`}>
                        {classItem.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(classItem.level)}`}>
                        {classItem.level}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-600 transition duration-200">
                        Join Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Class Categories Summary */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {[
            { type: "Yoga", count: 2, icon: "🧘", color: "bg-green-500" },
            { type: "Zumba", count: 2, icon: "💃", color: "bg-pink-500" },
            { type: "Dance", count: 4, icon: "⭐", color: "bg-purple-500" },
            { type: "Workshop", count: 1, icon: "🎯", color: "bg-orange-500" }
          ].map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{category.type}</h3>
              <div className="text-2xl font-bold text-pink-600">{category.count} Classes</div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">📋 Important Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">✅ Class Guidelines</h3>
              <ul className="space-y-2">
                <li>• Arrive 10 minutes before class</li>
                <li>• Wear comfortable clothing</li>
                <li>• Bring water bottle and towel</li>
                <li>• Inform instructor about injuries</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">📞 Need Help?</h3>
              <ul className="space-y-2">
                <li>• Call: +91 96372 00333</li>
                <li>• WhatsApp: +91 96372 53572</li>
                <li>• Email: beat2beatdancecrew@gmail.com</li>
                <li>• Visit: Sangli, Maharashtra</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;