const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
    required: true,
    enum: ['Food', 'Transportation', 'Entertainment', 'Bills', 'Shopping', 'Health', 'Education', 'Other']
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  period: {
    type: String,
    required: true,
    enum: ['weekly', 'monthly', 'yearly'],
    default: 'monthly'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Budget', budgetSchema);
