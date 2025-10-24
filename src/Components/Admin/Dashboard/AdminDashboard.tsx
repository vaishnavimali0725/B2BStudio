import React, { useState } from 'react';
import AdminSidebar from '../Shared/AdminSidebar';
import AdminHeader from '../Shared/AdminHeader';
import StatsOverview from './StatsOverview';
import RecentActivity from './RecentActivity';
import QuickActions from './QuickActions';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <StatsOverview />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity />
              <QuickActions />
            </div>
          </div>
        );
      case 'students':
        return <div>Student Management</div>;
      case 'instructors':
        return <div>Instructor Management</div>;
      case 'finance':
        return <div>Finance Management</div>;
      default:
        return <StatsOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your studio efficiently</p>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;