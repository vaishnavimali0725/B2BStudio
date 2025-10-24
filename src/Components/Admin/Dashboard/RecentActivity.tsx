import React from 'react';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: 'Priya Sharma',
      action: 'joined Zumba class',
      time: '2 minutes ago',
      type: 'student',
      avatar: '👩'
    },
    {
      id: 2,
      user: 'Nikhil Patil',
      action: 'marked attendance',
      time: '15 minutes ago',
      type: 'instructor',
      avatar: '💃'
    },
    {
      id: 3,
      user: 'Raj Kumar',
      action: 'paid monthly fee',
      time: '1 hour ago',
      type: 'payment',
      avatar: '💰'
    },
    {
      id: 4,
      user: 'Anjali Mehta',
      action: 'booked studio for practice',
      time: '2 hours ago',
      type: 'booking',
      avatar: '🏢'
    },
    {
      id: 5,
      user: 'System',
      action: 'new class scheduled - Yoga Advanced',
      time: '3 hours ago',
      type: 'system',
      avatar: '⚙️'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'student': return 'bg-blue-100 text-blue-800';
      case 'instructor': return 'bg-green-100 text-green-800';
      case 'payment': return 'bg-purple-100 text-purple-800';
      case 'booking': return 'bg-orange-100 text-orange-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
        <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
              {activity.avatar}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-800">{activity.user}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(activity.type)}`}>
                  {activity.type}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{activity.action}</p>
              <p className="text-gray-400 text-xs">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;