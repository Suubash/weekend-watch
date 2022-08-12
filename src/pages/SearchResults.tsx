import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/search-results.module.css";

const SearchResults = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Search Results For</h1>
      </div>
    </Layout>
  );
};

export default SearchResults;
