import React from 'react';

const InstructorHistory: React.FC = () => {
  const instructor = {
    id: 1,
    name: 'Omcar Rokade',
    email: 'omcar@beat2beat.com',
    phone: '+91 9637200333',
    joinDate: '2010-01-15',
    specialization: ['Bollywood', 'Contemporary', 'Folk'],
    experience: '16 years',
    salary: '₹45,000',
    classes: ['Professional Batch', 'Intermediate/Advanced'],
    totalStudents: 45,
    attendance: '98%'
  };

  const history = [
    {
      id: 1,
      date: '2024-12-19',
      activity: 'Conducted Professional Batch class',
      students: 12,
      duration: '1 hour',
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-12-19',
      activity: 'Choreography session for G20 event',
      students: 8,
      duration: '2 hours',
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-12-18',
      activity: 'Conducted Intermediate class',
      students: 15,
      duration: '1 hour',
      status: 'completed'
    },
    {
      id: 4,
      date: '2024-12-17',
      activity: 'Workshop - Contemporary Dance',
      students: 25,
      duration: '3 hours',
      status: 'completed'
    },
    {
      id: 5,
      date: '2024-12-15',
      activity: 'Salary credited',
      amount: 45000,
      status: 'payment'
    }
  ];

  const performance = [
    { metric: 'Classes Taken', value: '245', change: '+12' },
    { metric: 'Student Satisfaction', value: '96%', change: '+2%' },
    { metric: 'Attendance Rate', value: '98%', change: '+1%' },
    { metric: 'New Choreographies', value: '18', change: '+3' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Instructor History</h1>
        <p className="text-gray-600">Detailed profile and activity history</p>
      </div>

      {/* Instructor Profile */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
            {instructor.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{instructor.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
              <div>
                <div className="text-sm text-gray-500">Experience</div>
                <div className="font-medium">{instructor.experience}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Join Date</div>
                <div className="font-medium">{instructor.joinDate}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Salary</div>
                <div className="font-medium text-green-600">{instructor.salary}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Attendance</div>
                <div className="font-medium text-green-600">{instructor.attendance}</div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="text-sm text-gray-500 mb-2">Specialization</div>
              <div className="flex flex-wrap gap-2">
                {instructor.specialization.map((spec, index) => (
                  <span key={index} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity History */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {history.map((item) => (
                <div key={item.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    ✅
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-medium text-gray-800">{item.activity}</div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                    {item.students && (
                      <div className="text-sm text-gray-600">
                        Students: {item.students} • Duration: {item.duration}
                      </div>
                    )}
                    {item.amount && (
                      <div className="text-sm text-green-600 font-semibold">
                        Amount: ₹{item.amount}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              {performance.map((metric, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-800">{metric.metric}</div>
                    <div className="text-2xl font-bold text-pink-600">{metric.value}</div>
                  </div>
                  <div className="text-green-600 font-semibold">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Class Schedule</h3>
            <div className="space-y-3">
              {instructor.classes.map((cls, index) => (
                <div key={index} className="flex justify-between items-center p-3 border border-gray-200 rounded-lg">
                  <div className="font-medium text-gray-800">{cls}</div>
                  <div className="text-sm text-gray-500">Mon-Fri</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600">
                View Full Schedule
              </button>
              <button className="w-full border border-pink-500 text-pink-500 py-2 rounded-lg font-semibold hover:bg-pink-50">
                Send Message
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHistory;