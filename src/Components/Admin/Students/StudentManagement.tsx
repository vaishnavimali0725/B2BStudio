import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const students = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya@email.com',
      phone: '+91 9876543210',
      batch: 'Zumba Basic',
      joinDate: '2024-01-15',
      feeStatus: 'paid',
      attendance: '95%',
      lastActive: '2024-12-19'
    },
    {
      id: 2,
      name: 'Raj Kumar',
      email: 'raj@email.com',
      phone: '+91 9876543211',
      batch: 'Yoga Advanced',
      joinDate: '2024-02-10',
      feeStatus: 'pending',
      attendance: '88%',
      lastActive: '2024-12-18'
    },
    {
      id: 3,
      name: 'Anjali Mehta',
      email: 'anjali@email.com',
      phone: '+91 9876543212',
      batch: 'Ladies Dance',
      joinDate: '2024-03-05',
      feeStatus: 'paid',
      attendance: '92%',
      lastActive: '2024-12-19'
    },
    {
      id: 4,
      name: 'Suresh Patel',
      email: 'suresh@email.com',
      phone: '+91 9876543213',
      batch: 'Professional',
      joinDate: '2024-01-20',
      feeStatus: 'overdue',
      attendance: '85%',
      lastActive: '2024-12-17'
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.batch.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Student Management</h1>
          <p className="text-gray-600">Manage all student records and information</p>
        </div>
        <Link
          to="/admin/students/add"
          className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 flex items-center gap-2"
        >
          <span>👤</span>
          Add New Student
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-blue-500 mb-2">👥</div>
          <div className="text-2xl font-bold text-gray-800">156</div>
          <div className="text-gray-600">Total Students</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-green-500 mb-2">✅</div>
          <div className="text-2xl font-bold text-gray-800">142</div>
          <div className="text-gray-600">Active Students</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-red-500 mb-2">⏰</div>
          <div className="text-2xl font-bold text-gray-800">14</div>
          <div className="text-gray-600">Pending Fees</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-purple-500 mb-2">📊</div>
          <div className="text-2xl font-bold text-gray-800">94%</div>
          <div className="text-gray-600">Avg Attendance</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search students by name or batch..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
              <option>All Batches</option>
              <option>Morning Yoga</option>
              <option>Zumba Basic</option>
              <option>Ladies Dance</option>
              <option>Professional</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold mr-3">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {student.batch}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.joinDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.feeStatus)}`}>
                      {student.feeStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: student.attendance }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{student.attendance}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View</button>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;