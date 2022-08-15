import React from "react";
import styles from "../styles/search-results.module.css";
import { useLocation } from "react-router-dom";
import { Movie } from "../types/typings";
import Loader from "../components/Loader";
import Thumbnail from "../components/Thumbnail";
import { ErrorBoundary } from "react-error-boundary";

const SearchResults = () => {
  const API_KEY = import.meta.env.VITE_PUBLIC_TMDB_API_KEY;
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("query");

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const url: string = `
    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`;
    const response = await fetch(url).then((res) => res.json());
    setMovies(response.results);
  };

  if (searchTerm === "")
    return (
      <div className={styles.container}>
        <h1>Please provide search query to search!</h1>
      </div>
    );

  return (
    <div className={styles.container}>
      <h1>Search results for `{searchTerm}`</h1>
      <div className={styles.moviesContainer}>
        {movies?.map((movie: Movie) => (
          <Thumbnail {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
