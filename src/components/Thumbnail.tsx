import React from "react";
import { Movie } from "../types/typings";
import styles from "../styles/thumbnail.module.css";
import { Rating } from "react-simple-star-rating";

const Thumbnail = (movie: Movie) => {
  const base_url = "https://image.tmdb.org/t/p/w440_and_h660_face";
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          className={styles.posterImage}
          src={`${base_url}/${movie.poster_path || movie.backdrop_path}`}
          alt={movie.title || movie.name}
        />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.title}>{movie.title || movie.name}</p>
        <p className={styles.releaseDate}>
          {movie.release_date || "Date Unavailable"}
        </p>
        <div className={styles.ratingComponent}>
          <Rating
            initialValue={0}
            readonly
            allowHalfIcon
            size={16}
            fillColor="#ECCD22"
            ratingValue={Number(movie.vote_average) * 10}
          />
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
// {movie.title || movie.name}
