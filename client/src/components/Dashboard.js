import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to budgets page as default
    navigate('/dashboard/budgets');
  }, [navigate]);

  return null;
};

export default Dashboard;
