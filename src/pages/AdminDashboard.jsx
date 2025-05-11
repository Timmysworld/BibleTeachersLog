import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-200 h-full">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            to="/manage-users"
            className="p-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Manage Users
          </Link>
          <Link
            to="/view-reports"
            className="p-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            View Reports
          </Link>
          <Link
            to="/settings"
            className="p-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Settings
          </Link>
          <Link
            to="/"
            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-xl font-bold">Welcome, Admin!</h2>
        <p className="mt-4 text-gray-600">
          Use the sidebar to navigate through the admin tools.
        </p>
        {/* Add dynamic content here */}
        <div className="mt-6 p-4 border rounded bg-white shadow">
          <h3 className="text-lg font-semibold">Dashboard Overview</h3>
          <p className="mt-2 text-gray-500">
            This section can display key metrics, recent activity, or other
            important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;