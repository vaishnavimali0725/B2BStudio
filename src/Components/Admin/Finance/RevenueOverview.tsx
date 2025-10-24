import React, { useState } from 'react';

interface RevenueData {
  month?: string;
  week?: string;
  revenue: number;
  expenses: number;
  profit: number;
}

const RevenueOverview: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'monthly' | 'weekly'>('monthly');

  const revenueData: Record<'monthly' | 'weekly', RevenueData[]> = {
    monthly: [
      { month: 'Dec 2024', revenue: 142500, expenses: 96500, profit: 46000 },
      { month: 'Nov 2024', revenue: 138000, expenses: 92000, profit: 46000 },
      { month: 'Oct 2024', revenue: 135000, expenses: 89000, profit: 46000 },
      { month: 'Sep 2024', revenue: 128000, expenses: 85000, profit: 43000 }
    ],
    weekly: [
      { week: 'Week 1', revenue: 38000, expenses: 24000, profit: 14000 },
      { week: 'Week 2', revenue: 42000, expenses: 25000, profit: 17000 },
      { week: 'Week 3', revenue: 35000, expenses: 23000, profit: 12000 },
      { week: 'Week 4', revenue: 27500, expenses: 24500, profit: 3000 }
    ]
  };

  const revenueSources = [
    { source: 'Class Fees', amount: 112000, percentage: 78.6, color: 'bg-pink-500' },
    { source: 'Studio Booking', amount: 18500, percentage: 13.0, color: 'bg-blue-500' },
    { source: 'Workshops', amount: 8000, percentage: 5.6, color: 'bg-green-500' },
    { source: 'Events', amount: 4000, percentage: 2.8, color: 'bg-purple-500' }
  ];

  const currentData = revenueData[timeRange];

  const getPeriodLabel = (period: RevenueData) => {
    return period.month || period.week || 'Unknown';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Revenue Overview</h1>
        <p className="text-gray-600">Track revenue, expenses, and profitability</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-green-500 mb-2">💰</div>
          <div className="text-2xl font-bold text-gray-800">₹1,42,500</div>
          <div className="text-gray-600">Monthly Revenue</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-red-500 mb-2">💸</div>
          <div className="text-2xl font-bold text-gray-800">₹96,500</div>
          <div className="text-gray-600">Monthly Expenses</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-blue-500 mb-2">📈</div>
          <div className="text-2xl font-bold text-gray-800">₹46,000</div>
          <div className="text-gray-600">Monthly Profit</div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <div className="text-2xl text-purple-500 mb-2">🎯</div>
          <div className="text-2xl font-bold text-gray-800">32%</div>
          <div className="text-gray-600">Profit Margin</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Revenue Trend</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setTimeRange('weekly')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    timeRange === 'weekly' 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setTimeRange('monthly')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    timeRange === 'monthly' 
                      ? 'bg-pink-500 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {currentData.map((period, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="font-medium text-gray-800 w-24">{getPeriodLabel(period)}</div>
                  
                  <div className="flex-1 mx-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-green-600">Revenue: ₹{period.revenue.toLocaleString()}</span>
                      <span className="text-red-600">Expenses: ₹{period.expenses.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="h-3 rounded-full bg-gradient-to-r from-green-500 to-red-500"
                        style={{ 
                          width: '100%',
                          background: `linear-gradient(90deg, green ${(period.revenue/(period.revenue+period.expenses))*100}%, red 0%)` 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`font-bold ${
                      period.profit > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ₹{period.profit.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">Profit</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Revenue Sources */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Sources</h3>
            <div className="space-y-4">
              {revenueSources.map((source, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-700">{source.source}</span>
                    <span className="text-gray-600">₹{source.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{source.percentage}% of total</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Avg. Revenue/Student</span>
                <span className="font-semibold">₹913</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Collection Rate</span>
                <span className="font-semibold text-green-600">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Revenue Growth</span>
                <span className="font-semibold text-green-600">+8.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expense Ratio</span>
                <span className="font-semibold text-red-600">67.7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueOverview;