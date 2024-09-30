// backend/models/Thread.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a thread
const threadSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  replies: [
    {
      from: String,
      body: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;
