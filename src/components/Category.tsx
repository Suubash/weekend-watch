import React from "react";
import useMovies from "../hooks/fetch-movies-hook";
import { Movie } from "../types/typings";
import styles from "../styles/category.module.css";
import Thumbnail from "../components/Thumbnail";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import classnames from "classnames";

const Category = () => {
  const API_KEY = import.meta.env.VITE_PUBLIC_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  const { movies } = useMovies(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
  );

  console.log(movies);

  return (
    <div className={styles.container}>
      <div
        className={classnames(styles.iconContainer, styles.iconLeftContainer)}
      >
        <FaCaretLeft className={styles.icon} />
      </div>
      <div className={styles.moviesContainer}>
        {movies.results.map((movie: Movie) => (
          <Thumbnail key={movie.id} {...movie} />
        ))}
      </div>
      <div
        className={classnames(styles.iconContainer, styles.iconRightContainer)}
      >
        <FaCaretRight className={styles.icon} />
      </div>
    </div>
  );
};

export default Category;
