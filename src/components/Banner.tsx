import React from "react";
import godzilla from "../assets/godzilla.png";
import styles from "../styles/banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <img src={godzilla} alt="Godzila vs Kong" />

      <div className={styles.bannerContentContainer}>
        <div className={styles.bannerContent}>
          <h1>Welcome to the weekend watch</h1>
          <p>Millions of Movies, TV Shows and many more</p>
          <div className={styles.searchContainer}>
            <input
              className={styles.searchInput}
              type="search"
              placeholder="Search for movies, tv shows, and person"
            />
            <button className={styles.searchButton}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
