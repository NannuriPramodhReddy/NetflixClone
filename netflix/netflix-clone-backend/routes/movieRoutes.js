// routes/movieRoutes.js
const express = require('express');
const { getMovies } = require('../controllers/movieController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/movies', protect, getMovies); // Protected route to fetch movies

module.exports = router;
