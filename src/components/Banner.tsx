import React from "react";
import styles from "../styles/banner.module.css";
import { useNavigate } from "react-router-dom";
import MovieContext from "../contexts/MovieContext";

function Banner() {
  const navigate = useNavigate();
  const { movieState } = React.useContext(MovieContext);
  const { topTrendings } = movieState;
  return (
    <div className={styles.banner}>
      {topTrendings.length > 1 && (
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${
            topTrendings[0]?.backdrop_path || topTrendings[0]?.poster_path
          }`}
          alt={topTrendings[0]?.title}
        />
      )}

      <div className={styles.bannerContentContainer}>
        <div className={styles.bannerContent}>
          <h1>Welcome to the weekend watch </h1>
          <p>Millions of Movies, TV Shows and many more</p>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              type="search"
              placeholder="Search for movies, tv shows, and person"
            />
            <button
              onClick={() => navigate("/search")}
              className={styles.searchButton}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
