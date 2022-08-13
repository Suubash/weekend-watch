import React from "react";
import MovieContext from "../contexts/MovieContext";
import styles from "../styles/search-results.module.css";

const SearchResults = () => {
  const { movieState } = React.useContext(MovieContext);

  console.log({ movieState });
  return (
    <div className={styles.container}>
      <h1>Search Results For</h1>
      {movieState.topTrendings.map((movie) => (
        <h1>{movie.title || movie.name}</h1>
      ))}
    </div>
  );
};

export default SearchResults;
