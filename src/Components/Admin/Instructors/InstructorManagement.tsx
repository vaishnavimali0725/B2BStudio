import React, { useState } from 'react';

const InstructorManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const instructors = [
    {
      id: 1,
      name: 'Omcar Rokade',
      email: 'omcar@beat2beat.com',
      phone: '+91 9637200333',
      specialization: ['Bollywood', 'Contemporary'],
      experience: '16 years',
      salary: '₹45,000',
      status: 'active',
      classes: ['Professional', 'Intermediate']
    },
    {
      id: 2,
      name: 'Nikhil Patil',
      email: 'nikhil@beat2beat.com',
      phone: '+91 9604111001',
      specialization: ['HipHop', 'Street Dance'],
      experience: '8 years',
      salary: '₹35,000',
      status: 'active',
      classes: ['Zumba Basic', 'Zumba Advanced']
    },
    {
      id: 3,
      name: 'Arpita Patil',
      email: 'arpita@beat2beat.com',
      phone: '+91 9822012345',
      specialization: ['Yoga', 'Meditation'],
      experience: '6 years',
      salary: '₹30,000',
      status: 'active',
      classes: ['Morning Yoga', 'Advanced Yoga']
    }
  ];

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Instructor Management</h1>
          <p className="text-gray-600">Manage instructor profiles and assignments</p>
        </div>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 flex items-center gap-2">
          <span>💃</span>
          Add New Instructor
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-purple-500 mb-2">💃</div>
          <div className="text-2xl font-bold text-gray-800">8</div>
          <div className="text-gray-600">Total Instructors</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-green-500 mb-2">✅</div>
          <div className="text-2xl font-bold text-gray-800">7</div>
          <div className="text-gray-600">Active Instructors</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-blue-500 mb-2">🎯</div>
          <div className="text-2xl font-bold text-gray-800">15</div>
          <div className="text-gray-600">Weekly Classes</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-orange-500 mb-2">💰</div>
          <div className="text-2xl font-bold text-gray-800">₹2,45,000</div>
          <div className="text-gray-600">Monthly Salary</div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search instructors by name or specialization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInstructors.map((instructor) => (
          <div key={instructor.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                {instructor.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">{instructor.name}</h3>
                <p className="text-gray-600 text-sm">{instructor.experience} experience</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium">{instructor.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Salary:</span>
                <span className="font-bold text-green-600">{instructor.salary}</span>
              </div>
              <div>
                <span className="text-gray-600">Specialization:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {instructor.specialization.map((spec, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-gray-600">Classes:</span>
                <div className="text-sm text-gray-800 mt-1">
                  {instructor.classes.join(', ')}
                </div>
              </div>
            </div>

            <div className="flex space-x-2 pt-4 border-t border-gray-200">
              <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-pink-600">
                View Profile
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorManagement;