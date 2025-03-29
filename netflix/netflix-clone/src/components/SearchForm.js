import React, { useState } from 'react';
import { searchMovies } from '../api';

const SearchForm = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await searchMovies(query);
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error searching movies', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
