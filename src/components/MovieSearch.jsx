import React, { useState } from "react";

function MovieSearch({ setMovies }) {
  const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (searchTerm && searchTerm !== "") {
      setMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    } else {
      window.location.reload();
    }
  };

  return (
    <form id="form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="search"
        className="search"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}

export default MovieSearch;
