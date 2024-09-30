// backend/controllers/threadController.js
const Thread = require('../models/Thread');

// Fetch all threads
exports.getAllThreads = async (req, res) => {
  try {
    const threads = await Thread.find();
    res.status(200).json(threads);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching threads', error });
  }
};

// Get a single thread by ID
exports.getThreadById = async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.thread_id);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    res.status(200).json(thread);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching thread', error });
  }
};

// Create a new thread
exports.createThread = async (req, res) => {
  const { subject, body, from, to } = req.body;
  try {
    const newThread = new Thread({
      subject,
      body,
      from,
      to,
    });
    await newThread.save();
    res.status(201).json(newThread);
  } catch (error) {
    res.status(500).json({ message: 'Error creating thread', error });
  }
};

// Reply to a thread
exports.replyToThread = async (req, res) => {
  const { from, body } = req.body;
  try {
    const thread = await Thread.findById(req.params.thread_id);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }

    // Add the reply to the thread's replies array
    thread.replies.push({ from, body });
    await thread.save();

    res.status(200).json({ message: 'Reply added', thread });
  } catch (error) {
    res.status(500).json({ message: 'Error replying to thread', error });
  }
};

// Delete a thread
exports.deleteThread = async (req, res) => {
  try {
    const thread = await Thread.findByIdAndDelete(req.params.thread_id);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    res.status(200).json({ message: 'Thread deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting thread', error });
  }
};
