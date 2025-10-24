import React from 'react';

const StatsOverview: React.FC = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '156',
      change: '+12%',
      trend: 'up',
      icon: '👥',
      color: 'bg-blue-500',
      description: 'Active enrolled students'
    },
    {
      title: 'Total Instructors',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: '💃',
      color: 'bg-green-500',
      description: 'Teaching staff'
    },
    {
      title: 'Monthly Revenue',
      value: '₹1,42,500',
      change: '+18%',
      trend: 'up',
      icon: '💰',
      color: 'bg-purple-500',
      description: 'Current month earnings'
    },
    {
      title: 'Pending Dues',
      value: '₹24,800',
      change: '-5%',
      trend: 'down',
      icon: '⏰',
      color: 'bg-orange-500',
      description: 'Unpaid fees'
    },
    {
      title: 'Classes Today',
      value: '12',
      change: '+3',
      trend: 'up',
      icon: '🎯',
      color: 'bg-pink-500',
      description: 'Scheduled sessions'
    },
    {
      title: 'Attendance Rate',
      value: '94%',
      change: '+2%',
      trend: 'up',
      icon: '✅',
      color: 'bg-teal-500',
      description: 'This week average'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-white text-xl`}>
              {stat.icon}
            </div>
            <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
              stat.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {stat.change}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
          <p className="text-gray-600 font-medium mb-2">{stat.title}</p>
          <p className="text-sm text-gray-500">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;