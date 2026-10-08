const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (_req, res) => res.json({ message: 'Week 2 User Authentication API' }));
app.use('/api/auth', authRoutes);
app.use((err, _req, res, _next) => {
  if (err?.code === 11000) return res.status(409).json({ message: 'Email already registered' });
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/week2_auth';
if (!process.env.JWT_SECRET) { console.error('JWT_SECRET is required. Copy .env.example to .env and set a secret.'); process.exit(1); }

mongoose.connect(MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch((error) => { console.error('MongoDB connection failed:', error.message); process.exit(1); });
