import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
