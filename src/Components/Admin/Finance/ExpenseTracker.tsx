import React, { useState } from 'react';

const ExpenseTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);

  const expenses = [
    {
      id: 1,
      category: 'Studio Rent',
      description: 'Monthly studio rental',
      amount: 25000,
      date: '2024-12-01',
      paymentMethod: 'Bank Transfer',
      status: 'paid'
    },
    {
      id: 2,
      category: 'Instructor Salary',
      description: 'Omcar Rokade - December',
      amount: 45000,
      date: '2024-12-05',
      paymentMethod: 'Bank Transfer',
      status: 'paid'
    },
    {
      id: 3,
      category: 'Utilities',
      description: 'Electricity and Water Bill',
      amount: 8500,
      date: '2024-12-10',
      paymentMethod: 'GPay',
      status: 'paid'
    },
    {
      id: 4,
      category: 'Equipment',
      description: 'New sound system',
      amount: 18000,
      date: '2024-12-15',
      paymentMethod: 'Cash',
      status: 'pending'
    }
  ];

  const categories = [
    { name: 'Studio Rent', budget: 25000, spent: 25000 },
    { name: 'Salaries', budget: 150000, spent: 145000 },
    { name: 'Utilities', budget: 10000, spent: 8500 },
    { name: 'Equipment', budget: 20000, spent: 18000 },
    { name: 'Marketing', budget: 15000, spent: 12000 }
  ];

  const filteredExpenses = activeTab === 'all' 
    ? expenses 
    : expenses.filter(expense => expense.status === activeTab);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Expense Tracker</h1>
          <p className="text-gray-600">Track and manage studio expenses</p>
        </div>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 flex items-center gap-2"
        >
          <span>➕</span>
          Add Expense
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-red-500 mb-2">💰</div>
          <div className="text-2xl font-bold text-gray-800">₹1,96,500</div>
          <div className="text-gray-600">Total Expenses</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-green-500 mb-2">✅</div>
          <div className="text-2xl font-bold text-gray-800">₹1,78,500</div>
          <div className="text-gray-600">Paid Expenses</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-yellow-500 mb-2">⏰</div>
          <div className="text-2xl font-bold text-gray-800">₹18,000</div>
          <div className="text-gray-600">Pending Payments</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-blue-500 mb-2">📊</div>
          <div className="text-2xl font-bold text-gray-800">89%</div>
          <div className="text-gray-600">Budget Utilization</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Expenses List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Recent Expenses</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeTab === 'all' 
                        ? 'bg-pink-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveTab('paid')}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeTab === 'paid' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Paid
                  </button>
                  <button
                    onClick={() => setActiveTab('pending')}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activeTab === 'pending' 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Pending
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {filteredExpenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
                        💸
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{expense.category}</div>
                        <div className="text-sm text-gray-500">{expense.description}</div>
                        <div className="text-xs text-gray-400">{expense.date} • {expense.paymentMethod}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-red-600">₹{expense.amount.toLocaleString()}</div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        expense.status === 'paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {expense.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Budget Overview */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Overview</h3>
            <div className="space-y-4">
              {categories.map((category, index) => {
                const percentage = (category.spent / category.budget) * 100;
                return (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{category.name}</span>
                      <span className="text-gray-600">₹{category.spent.toLocaleString()} / ₹{category.budget.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          percentage > 90 ? 'bg-red-500' : 
                          percentage > 75 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Add Form */}
          {showAddForm && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Expense</h3>
              <form className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Studio Rent</option>
                    <option>Salaries</option>
                    <option>Utilities</option>
                    <option>Equipment</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
                  <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
                </div>
                <div className="flex space-x-2">
                  <button 
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-pink-500 text-white py-2 rounded-lg text-sm font-semibold"
                  >
                    Add Expense
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;