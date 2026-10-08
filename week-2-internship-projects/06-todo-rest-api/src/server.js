const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (_req, res) => res.json({ message: 'Week 2 To-Do REST API' }));
app.use('/api/tasks', taskRoutes);
app.use((err, _req, res, _next) => res.status(500).json({ message: err.message }));

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/week2_todos';

mongoose.connect(MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((error) => { console.error('MongoDB connection failed:', error.message); process.exit(1); });
