import React, { useState } from 'react';

const AttendanceTracker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [activeTab, setActiveTab] = useState('instructors');

  const instructors = [
    {
      id: 1,
      name: 'Omcar Rokade',
      morningIn: '09:00 AM',
      morningOut: '12:00 PM',
      eveningIn: '04:00 PM',
      eveningOut: '09:00 PM',
      status: 'present'
    },
    {
      id: 2,
      name: 'Nikhil Patil',
      morningIn: '08:00 AM',
      morningOut: '11:00 AM',
      eveningIn: '05:00 PM',
      eveningOut: '08:00 PM',
      status: 'present'
    },
    {
      id: 3,
      name: 'Arpita Patil',
      morningIn: '06:00 AM',
      morningOut: '09:00 AM',
      eveningIn: '-',
      eveningOut: '-',
      status: 'half-day'
    }
  ];

  const students = [
    {
      id: 1,
      name: 'Priya Sharma',
      batch: 'Zumba Basic',
      inTime: '06:45 PM',
      outTime: '07:45 PM',
      status: 'present'
    },
    {
      id: 2,
      name: 'Raj Kumar',
      batch: 'Yoga Advanced',
      inTime: '07:50 AM',
      outTime: '08:50 AM',
      status: 'present'
    },
    {
      id: 3,
      name: 'Anjali Mehta',
      batch: 'Ladies Dance',
      inTime: '-',
      outTime: '-',
      status: 'absent'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'half-day': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Attendance Tracker</h1>
        <p className="text-gray-600">Track instructor and student attendance</p>
      </div>

      {/* Date Selector and Stats */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">24</div>
              <div className="text-sm text-gray-600">Present</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">2</div>
              <div className="text-sm text-gray-600">Absent</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <div className="text-sm text-gray-600">Half Day</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('instructors')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'instructors'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Instructors Attendance
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'students'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Students Attendance
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'instructors' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Instructor Attendance - {selectedDate}</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Instructor</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Morning In</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Morning Out</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Evening In</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Evening Out</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {instructors.map((instructor) => (
                      <tr key={instructor.id}>
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-800">{instructor.name}</div>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{instructor.morningIn}</td>
                        <td className="px-4 py-3 text-gray-600">{instructor.morningOut}</td>
                        <td className="px-4 py-3 text-gray-600">{instructor.eveningIn}</td>
                        <td className="px-4 py-3 text-gray-600">{instructor.eveningOut}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(instructor.status)}`}>
                            {instructor.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Attendance - {selectedDate}</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Batch</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">In Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Out Time</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {students.map((student) => (
                      <tr key={student.id}>
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-800">{student.name}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {student.batch}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{student.inTime}</td>
                        <td className="px-4 py-3 text-gray-600">{student.outTime}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                            {student.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 flex items-center justify-center gap-2">
            <span>📝</span>
            Mark Today's Attendance
          </button>
          <button className="border border-pink-500 text-pink-500 py-3 rounded-lg font-semibold hover:bg-pink-50 flex items-center justify-center gap-2">
            <span>📊</span>
            Generate Report
          </button>
          <button className="border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center gap-2">
            <span>📧</span>
            Send Reminders
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;