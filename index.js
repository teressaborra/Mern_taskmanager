const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', taskRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the Task Manager API!");
});

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
