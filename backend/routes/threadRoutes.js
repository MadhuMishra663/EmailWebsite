// backend/routes/threadRoutes.js
const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadController');

// Get all threads
router.get('/list', threadController.getAllThreads);

// Get a specific thread by ID
router.get('/:thread_id', threadController.getThreadById);

// Create a new thread
router.post('/create', threadController.createThread);

// Reply to a thread
router.post('/:thread_id/reply', threadController.replyToThread);

// Delete a thread
router.delete('/:thread_id', threadController.deleteThread);

module.exports = router;
