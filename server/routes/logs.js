const express = require('express');
const Log = require('../models/Log');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/logs
// @desc    Get all logs for user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const logs = await Log.find({ user: req.user.id }).sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST /api/logs
// @desc    Add new log
// @access  Private
router.post('/', auth, async (req, res) => {
  const { action, details } = req.body;

  try {
    const newLog = new Log({
      user: req.user.id,
      action,
      details
    });

    const log = await newLog.save();
    res.json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
