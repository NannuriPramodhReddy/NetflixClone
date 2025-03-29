// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON requests

app.use('/api/auth', authRoutes);
app.use('/api', movieRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Add this log
});
