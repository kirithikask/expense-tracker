import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ExpenseList from '../components/ExpenseList';
import AddExpense from '../components/AddExpense';

const Expenses = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 flex-1 bg-gray-50 min-h-screen">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Expenses</h1>
            <button
              onClick={() => setShowAddExpense(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              Add Expense
            </button>
          </div>
          <ExpenseList />
          {showAddExpense && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
                <AddExpense onClose={() => setShowAddExpense(false)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
