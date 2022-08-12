import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Category from "../components/Category";
import styles from "../styles/home.module.css";
import classNames from "classnames";

function Home() {
  const API_KEY = import.meta.env.VITE_PUBLIC_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  return (
    <Layout>
      <Banner />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>What&apos;s popular</h2>
          <div className={styles.buttonSlider}>
            <button className={classNames(styles.button, styles.buttonActive)}>
              Streaming
            </button>
            <button className={styles.button}>On TV</button>
          </div>
        </div>
      </div>

      {/* Movie section */}
      <div className={styles.category}>
        <React.Suspense fallback="Loading!!">
          <Category
            url={`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`}
          />

          {/* <Category
            title="Top Horrors"
            url={`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27&page=3`}
          /> */}
        </React.Suspense>
      </div>
    </Layout>
  );
}

export default Home;
