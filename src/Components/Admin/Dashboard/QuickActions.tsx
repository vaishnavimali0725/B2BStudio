import React from 'react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      title: 'Add Student',
      description: 'Register new student',
      icon: '👤',
      color: 'bg-blue-500 hover:bg-blue-600',
      link: '/admin/students/add'
    },
    {
      title: 'Mark Attendance',
      description: 'Record today\'s attendance',
      icon: '✅',
      color: 'bg-green-500 hover:bg-green-600',
      link: '/admin/attendance'
    },
    {
      title: 'Collect Payment',
      description: 'Process fee payment',
      icon: '💰',
      color: 'bg-purple-500 hover:bg-purple-600',
      link: '/admin/finance/payments'
    },
    {
      title: 'Schedule Class',
      description: 'Create new class schedule',
      icon: '🎯',
      color: 'bg-orange-500 hover:bg-orange-600',
      link: '/admin/classes/schedule'
    },
    {
      title: 'Send Notification',
      description: 'Notify students/instructors',
      icon: '📢',
      color: 'bg-pink-500 hover:bg-pink-600',
      link: '/admin/notifications'
    },
    {
      title: 'Generate Report',
      description: 'Create financial report',
      icon: '📊',
      color: 'bg-teal-500 hover:bg-teal-600',
      link: '/admin/reports'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`${action.color} text-white rounded-xl p-4 text-left transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <h3 className="font-semibold text-sm mb-1">{action.title}</h3>
            <p className="text-white/80 text-xs">{action.description}</p>
          </button>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">Today's Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Classes:</span>
            <span className="font-semibold ml-2">12/15 completed</span>
          </div>
          <div>
            <span className="text-gray-600">Payments:</span>
            <span className="font-semibold ml-2">₹8,500 collected</span>
          </div>
          <div>
            <span className="text-gray-600">Attendance:</span>
            <span className="font-semibold ml-2">94% rate</span>
          </div>
          <div>
            <span className="text-gray-600">New Students:</span>
            <span className="font-semibold ml-2">3 registered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;