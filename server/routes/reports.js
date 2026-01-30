const express = require('express');
const Expense = require('../models/Expense');
const Budget = require('../models/Budget');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/reports/summary
// @desc    Get expense summary for user
// @access  Private
router.get('/summary', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    const budgets = await Budget.find({ user: req.user.id });

    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const categorySummary = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});

    const budgetComparison = budgets.map(budget => {
      const spent = categorySummary[budget.category] || 0;
      return {
        category: budget.category,
        budgeted: budget.amount,
        spent,
        remaining: budget.amount - spent
      };
    });

    res.json({
      totalExpenses,
      categorySummary,
      budgetComparison
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/reports/monthly
// @desc    Get monthly expense report
// @access  Private
router.get('/monthly', auth, async (req, res) => {
  try {
    const { year, month } = req.query;
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    const expenses = await Expense.find({
      user: req.user.id,
      date: { $gte: startDate, $lt: endDate }
    });

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const categoryBreakdown = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});

    res.json({
      year: parseInt(year),
      month: parseInt(month),
      total,
      categoryBreakdown,
      expenses
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
