import React from 'react';

const StudentHistory: React.FC = () => {
  const student = {
    id: 1,
    name: 'Priya Sharma',
    email: 'priya@email.com',
    phone: '+91 9876543210',
    joinDate: '2024-01-15',
    batch: 'Zumba Basic',
    totalClasses: 45,
    attended: 43,
    attendance: '95%'
  };

  const history = [
    {
      id: 1,
      date: '2024-12-19',
      activity: 'Attended Zumba class',
      instructor: 'Nikhil Patil',
      status: 'present'
    },
    {
      id: 2,
      date: '2024-12-18',
      activity: 'Fee payment received',
      amount: 1200,
      status: 'payment'
    },
    {
      id: 3,
      date: '2024-12-17',
      activity: 'Attended Zumba class',
      instructor: 'Nikhil Patil',
      status: 'present'
    },
    {
      id: 4,
      date: '2024-12-15',
      activity: 'Missed class',
      reason: 'Personal work',
      status: 'absent'
    },
    {
      id: 5,
      date: '2024-12-12',
      activity: 'Batch changed to Zumba Basic',
      from: 'Yoga Morning',
      status: 'update'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present': return '✅';
      case 'absent': return '❌';
      case 'payment': return '💰';
      case 'update': return '🔄';
      default: return '📝';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'text-green-600 bg-green-100';
      case 'absent': return 'text-red-600 bg-red-100';
      case 'payment': return 'text-purple-600 bg-purple-100';
      case 'update': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Student History</h1>
        <p className="text-gray-600">Detailed history and activity for individual students</p>
      </div>

      {/* Student Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
            {student.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="font-medium">{student.phone}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Batch</div>
                <div className="font-medium">{student.batch}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Join Date</div>
                <div className="font-medium">{student.joinDate}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Attendance</div>
                <div className="font-medium text-green-600">{student.attendance}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity History */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Activity History</h3>
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${getStatusColor(item.status)}`}>
                    {getStatusIcon(item.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-medium text-gray-800">{item.activity}</div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                    {item.instructor && (
                      <div className="text-sm text-gray-600">Instructor: {item.instructor}</div>
                    )}
                    {item.amount && (
                      <div className="text-sm text-green-600 font-semibold">Amount: ₹{item.amount}</div>
                    )}
                    {item.reason && (
                      <div className="text-sm text-gray-600">Reason: {item.reason}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Attendance Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Classes</span>
                <span className="font-semibold">{student.totalClasses}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Attended</span>
                <span className="font-semibold text-green-600">{student.attended}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Absent</span>
                <span className="font-semibold text-red-600">{student.totalClasses - student.attended}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Attendance Rate</span>
                <span className="font-semibold">{student.attendance}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Fee History</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-green-800">December 2024</div>
                  <div className="text-sm text-green-600">Paid on 15 Dec</div>
                </div>
                <div className="font-bold text-green-800">₹1,200</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-medium text-green-800">November 2024</div>
                  <div className="text-sm text-green-600">Paid on 14 Nov</div>
                </div>
                <div className="font-bold text-green-800">₹1,200</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600">
                Mark Attendance
              </button>
              <button className="w-full border border-pink-500 text-pink-500 py-2 rounded-lg font-semibold hover:bg-pink-50">
                Send Message
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHistory;