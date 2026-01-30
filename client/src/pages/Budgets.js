import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import BudgetTracker from '../components/BudgetTracker';

const Budgets = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 flex-1 bg-gray-50 min-h-screen">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Budgets</h1>
          <BudgetTracker />
        </div>
      </div>
    </div>
  );
};

export default Budgets;
