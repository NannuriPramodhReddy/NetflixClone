import React, { useEffect, useState } from 'react';
import { getMovies } from '../api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title} ({movie.year}) - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
