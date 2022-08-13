import React from "react";
import styles from "../styles/loader.module.css";
import { RiLoader2Fill } from "react-icons/ri";

const Loader = () => {
  return (
    <div className={styles.container}>
      <RiLoader2Fill className={styles.iconLoader} />
    </div>
  );
};

export default Loader;
