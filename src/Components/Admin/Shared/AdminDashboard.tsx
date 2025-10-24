import React, { useState } from 'react';
import AdminSidebar from '../Shared/AdminSidebar';
import AdminHeader from '../Shared/AdminHeader';
import StatsOverview from '../Dashboard/StatsOverview';
import RecentActivity from '../Dashboard/RecentActivity';
import QuickActions from '../Dashboard/QuickActions';
import StudentManagement from '../Students/StudentManagement';
import AddStudent from '../Students/AddStudent';
import FeeManagement from '../Students/FeeManagement';
import StudentHistory from '../Students/StudentHistory';
import InstructorManagement from '../Instructors/InstructorManagement';
import AttendanceTracker from '../Instructors/AttendanceTracker';
import InstructorHistory from '../Instructors/InstructorHistory';
import ExpenseTracker from '../Finance/ExpenseTracker';
import RevenueOverview from '../Finance/RevenueOverview';
import PendingDues from '../Finance/PendingDues';

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
        return <StudentManagement />;
      case 'add-student':
        return <AddStudent />;
      case 'fee-management':
        return <FeeManagement />;
      case 'student-history':
        return <StudentHistory />;
      case 'instructors':
        return <InstructorManagement />;
      case 'attendance':
        return <AttendanceTracker />;
      case 'instructor-history':
        return <InstructorHistory />;
      case 'expenses':
        return <ExpenseTracker />;
      case 'revenue':
        return <RevenueOverview />;
      case 'pending-dues':
        return <PendingDues />;
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
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;