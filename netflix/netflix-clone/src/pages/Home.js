import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Movie App</h1>
      <SearchForm onSearchResults={handleSearchResults} />
      <MovieList movies={searchResults.length > 0 ? searchResults : []} />
    </div>
  );
};

export default Home;
