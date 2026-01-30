import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Budgets from './pages/Budgets';
import Expenses from './pages/Expenses';
import Log from './pages/Log';
import Graph from './pages/Graph';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/budgets" element={<Budgets />} />
        <Route path="/dashboard/expenses" element={<Expenses />} />
        <Route path="/dashboard/log" element={<Log />} />
        <Route path="/dashboard/graph" element={<Graph />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
