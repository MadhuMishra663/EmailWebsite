
const Thread = require('../models/Thread');

exports.getAllThreads = async (req, res) => {
  const threads = await Thread.find({});
  res.status(200).json(threads);
};

exports.deleteThread = async (req, res) => {
  await Thread.findByIdAndDelete(req.params.thread_id);
  res.status(200).json({ message: "Thread deleted" });
};
