const express = require('express');
const Budget = require('../models/Budget');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/budgets
// @desc    Get all budgets for user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(budgets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/budgets
// @desc    Add new budget
// @access  Private
router.post('/', auth, async (req, res) => {
  const { category, amount } = req.body;

  try {
    const newBudget = new Budget({
      user: req.user.id,
      category,
      amount
    });

    const budget = await newBudget.save();
    res.json(budget);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT /api/budgets/:id
// @desc    Update budget
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { category, amount } = req.body;

  try {
    let budget = await Budget.findById(req.params.id);
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }

    if (budget.user && budget.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    budget = await Budget.findByIdAndUpdate(
      req.params.id,
      { $set: { category, amount } },
      { new: true }
    );

    res.json(budget);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE /api/budgets/:id
// @desc    Delete budget
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let budget = await Budget.findById(req.params.id);
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }

    if (budget.user && budget.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Budget.findByIdAndDelete(req.params.id);
    res.json({ message: 'Budget removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
