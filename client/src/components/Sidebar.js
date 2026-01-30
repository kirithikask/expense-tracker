import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="fixed left-0 top-0 h-full w-60 bg-yellow-50 shadow-lg border-r border-gray-200 flex flex-col">
      {/* Top Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">👛</div>
          <h1 className="text-xl font-bold text-gray-800">Budget Bae</h1>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard/budgets"
              className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-gray-900 rounded-lg transition-colors"
            >
              Budgets
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/expenses"
              className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-gray-900 rounded-lg transition-colors"
            >
              Expenses
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/log"
              className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-gray-900 rounded-lg transition-colors"
            >
              Log
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/graph"
              className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-gray-900 rounded-lg transition-colors"
            >
              Graph
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout at Bottom */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
