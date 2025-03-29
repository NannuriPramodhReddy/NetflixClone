import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.imageUrl} alt={movie.title} />
          <p>{movie.description}</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetails;
