import React, { useState } from 'react';

const PendingDues: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const pendingDues = [
    {
      id: 1,
      studentName: 'Raj Kumar',
      batch: 'Yoga Advanced',
      amount: 1200,
      dueDate: '2024-12-20',
      daysOverdue: 0,
      contact: '+91 9876543211',
      lastReminder: '2024-12-18'
    },
    {
      id: 2,
      studentName: 'Suresh Patel',
      batch: 'Professional',
      amount: 1500,
      dueDate: '2024-12-18',
      daysOverdue: 2,
      contact: '+91 9876543213',
      lastReminder: '2024-12-17'
    },
    {
      id: 3,
      studentName: 'Mohan Das',
      batch: 'Zumba Basic',
      amount: 1000,
      dueDate: '2024-12-25',
      daysOverdue: -5,
      contact: '+91 9876543214',
      lastReminder: 'Never'
    },
    {
      id: 4,
      studentName: 'Priya Singh',
      batch: 'Ladies Dance',
      amount: 1200,
      dueDate: '2024-12-15',
      daysOverdue: 5,
      contact: '+91 9876543215',
      lastReminder: '2024-12-16'
    }
  ];

  const filteredDues = filter === 'all' 
    ? pendingDues 
    : filter === 'overdue' 
    ? pendingDues.filter(due => due.daysOverdue > 0)
    : pendingDues.filter(due => due.daysOverdue <= 0);

  const totalPending = pendingDues.reduce((sum, due) => sum + due.amount, 0);
  const totalOverdue = pendingDues.filter(due => due.daysOverdue > 0).reduce((sum, due) => sum + due.amount, 0);

  const getStatusColor = (daysOverdue: number) => {
    if (daysOverdue > 0) return 'bg-red-100 text-red-800';
    if (daysOverdue === 0) return 'bg-yellow-100 text-yellow-800';
    return 'bg-blue-100 text-blue-800';
  };

  const getStatusText = (daysOverdue: number) => {
    if (daysOverdue > 0) return `Overdue by ${daysOverdue} days`;
    if (daysOverdue === 0) return 'Due Today';
    return `Due in ${Math.abs(daysOverdue)} days`;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Pending Dues</h1>
        <p className="text-gray-600">Manage and track pending fee payments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-yellow-500 mb-2">⏰</div>
          <div className="text-2xl font-bold text-gray-800">₹{totalPending.toLocaleString()}</div>
          <div className="text-gray-600">Total Pending</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-red-500 mb-2">🚨</div>
          <div className="text-2xl font-bold text-gray-800">₹{totalOverdue.toLocaleString()}</div>
          <div className="text-gray-600">Overdue Amount</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-blue-500 mb-2">👥</div>
          <div className="text-2xl font-bold text-gray-800">{pendingDues.length}</div>
          <div className="text-gray-600">Students with Dues</div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'all' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              All Dues
            </button>
            <button
              onClick={() => setFilter('overdue')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'overdue' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Overdue
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === 'upcoming' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              Upcoming
            </button>
          </div>
          
          <div className="text-sm text-gray-600">
            Showing {filteredDues.length} of {pendingDues.length} records
          </div>
        </div>
      </div>

      {/* Dues List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Reminder</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDues.map((due) => (
                <tr key={due.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold mr-3">
                        {due.studentName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{due.studentName}</div>
                        <div className="text-sm text-gray-500">{due.contact}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {due.batch}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-red-600">₹{due.amount}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{due.dueDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(due.daysOverdue)}`}>
                      {getStatusText(due.daysOverdue)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{due.lastReminder}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                        Mark Paid
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Remind
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 flex items-center justify-center gap-2">
          <span>📧</span>
          Send Bulk Reminders
        </button>
        <button className="border border-pink-500 text-pink-500 py-3 rounded-lg font-semibold hover:bg-pink-50 flex items-center justify-center gap-2">
          <span>📊</span>
          Generate Report
        </button>
        <button className="border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center gap-2">
          <span>💳</span>
          Record Payment
        </button>
      </div>
    </div>
  );
};

export default PendingDues;