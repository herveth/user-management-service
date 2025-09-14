// Express app setup
const express = require('express');
const app = express();

// Middleware setup
app.use(express.json());

// Import routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Error handling middleware
const errorHandler = require('./middlewares/error.middleware');
app.use(errorHandler);

module.exports = app;
