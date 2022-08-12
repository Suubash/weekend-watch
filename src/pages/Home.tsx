import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Category from "../components/Category";
import styles from "../styles/home.module.css";
import classNames from "classnames";

function Home() {
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
        <Category />
      </div>
    </Layout>
  );
}

export default Home;
