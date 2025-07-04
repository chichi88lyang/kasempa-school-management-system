const express = require('express');

const dotenv = require('dotenv');
const mongoose = require('mongoose'); dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Use built-in express.json() middleware to parse JSON bodies
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes'); // Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api/users', userRoutes);
app.use('/api/students', studentRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);});