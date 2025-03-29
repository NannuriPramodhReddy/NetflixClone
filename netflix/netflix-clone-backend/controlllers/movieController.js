// controllers/movieController.js
const axios = require('axios');

const getMovies = async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies' });
  }
};

module.exports = { getMovies };
