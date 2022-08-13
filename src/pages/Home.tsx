import React from "react";
import Banner from "../components/Banner";
import styles from "../styles/home.module.css";
import classNames from "classnames";
import Loader from "../components/Loader";
import requests from "../utils/request-movies";

const Category = React.lazy(() => import("../components/Category"));

const Home = () => {
  return (
    <>
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
        <React.Suspense fallback={<Loader />}>
          <Category url={requests.fetchTrending} />

          {/* <Category title="Top Horrors" url={requests.fetchRomanceMovies} /> */}
        </React.Suspense>
      </div>
    </>
  );
};

export default Home;
