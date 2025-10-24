import React, { useState } from 'react';

const FeeManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const feeRecords = [
    {
      id: 1,
      studentName: 'Raj Kumar',
      batch: 'Yoga Advanced',
      amount: 1200,
      dueDate: '2024-12-20',
      status: 'pending',
      phone: '+91 9876543211'
    },
    {
      id: 2,
      studentName: 'Suresh Patel',
      batch: 'Professional',
      amount: 1500,
      dueDate: '2024-12-18',
      status: 'overdue',
      phone: '+91 9876543213'
    },
    {
      id: 3,
      studentName: 'Mohan Das',
      batch: 'Zumba Basic',
      amount: 1000,
      dueDate: '2024-12-25',
      status: 'pending',
      phone: '+91 9876543214'
    }
  ];

  const paymentHistory = [
    {
      id: 1,
      studentName: 'Priya Sharma',
      batch: 'Zumba Basic',
      amount: 1200,
      paymentDate: '2024-12-15',
      method: 'GPay',
      receiptNo: 'RCP001'
    },
    {
      id: 2,
      studentName: 'Anjali Mehta',
      batch: 'Ladies Dance',
      amount: 1200,
      paymentDate: '2024-12-14',
      method: 'Cash',
      receiptNo: 'RCP002'
    }
  ];

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
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Fee Management</h1>
        <p className="text-gray-600">Manage student fees and payment records</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-red-500 mb-2">⏰</div>
          <div className="text-2xl font-bold text-gray-800">₹24,800</div>
          <div className="text-gray-600">Total Pending Dues</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-green-500 mb-2">💰</div>
          <div className="text-2xl font-bold text-gray-800">₹1,42,500</div>
          <div className="text-gray-600">Monthly Collection</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-blue-500 mb-2">👥</div>
          <div className="text-2xl font-bold text-gray-800">14</div>
          <div className="text-gray-600">Students with Pending Fees</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'pending'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Pending Dues
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'history'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Payment History
            </button>
            <button
              onClick={() => setActiveTab('collect')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'collect'
                  ? 'border-pink-500 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Collect Payment
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'pending' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Fee Dues</h3>
              <div className="space-y-4">
                {feeRecords.map((record) => (
                  <div key={record.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold">
                        {record.studentName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{record.studentName}</div>
                        <div className="text-sm text-gray-500">{record.batch} • {record.phone}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-800">₹{record.amount}</div>
                      <div className="text-sm text-gray-500">Due: {record.dueDate}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                      <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600">
                        Mark Paid
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Payments</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {paymentHistory.map((payment) => (
                      <tr key={payment.id}>
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-800">{payment.studentName}</div>
                          <div className="text-sm text-gray-500">{payment.batch}</div>
                        </td>
                        <td className="px-4 py-3 font-semibold text-green-600">₹{payment.amount}</td>
                        <td className="px-4 py-3 text-gray-600">{payment.paymentDate}</td>
                        <td className="px-4 py-3">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {payment.method}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{payment.receiptNo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'collect' && (
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Collect Payment</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Student</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                    <option>Select student</option>
                    <option>Raj Kumar</option>
                    <option>Suresh Patel</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount (₹)</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                    <option>Cash</option>
                    <option>GPay</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600">
                  Record Payment
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeeManagement;