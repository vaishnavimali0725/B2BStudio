import React from 'react';

export interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

export const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'students', label: 'Students', icon: '👥' },
  { id: 'instructors', label: 'Instructors', icon: '💃' },
  { id: 'attendance', label: 'Attendance', icon: '⏰' },
  { id: 'fee-management', label: 'Fee Management', icon: '💰' },
  { id: 'pending-dues', label: 'Pending Dues', icon: '🚨' },
  { id: 'expenses', label: 'Expenses', icon: '💸' },
  { id: 'revenue', label: 'Revenue', icon: '📈' },
  { id: 'reports', label: 'Reports', icon: '📊' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 z-40">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B2B</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800">BeatToBeat</h2>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors duration-200 ${
              activeTab === item.id
                ? 'bg-pink-50 border-r-4 border-pink-500 text-pink-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">Admin User</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;