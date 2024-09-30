// backend/app.js
const express = require('express');
const passport = require('passport');
const session = require('cookie-session');
const connectDB = require('./config/db');
const uploadRoutes = require('./routes/uploadRoutes');
require('dotenv').config(); // Ensure environment variables are loaded

const app = express();

// Parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup using cookie-session
app.use(
  session({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV === 'production',
  })
);

// Initialize passport for authentication
app.use(passport.initialize());
app.use(passport.session());

// File upload route
app.use('/upload', uploadRoutes);

// Connect to MongoDB
connectDB();

// Routes for authentication, onebox, thread, and reply
app.use('/auth', require('./routes/authRoutes'));
app.use('/onebox', require('./routes/oneboxRoutes'));
app.use('/reply', require('./routes/replyRoutes'));
app.use('/thread', require('./routes/threadRoutes')); // Add thread routes

module.exports = app;
