import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";
import logo from "../assets/logo.svg";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.linksWrapper}>
        <div className={styles.leftLinks}>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img className={styles.logo} src={logo} alt="Weekend Watch" />
            </Link>
          </div>
          <nav className={styles.navLinks}>
            <Link to="/movies">Movies</Link>
            <Link to="/tv-show">TV Show</Link>
            <Link to="/people">People</Link>
            <Link to="/more">More</Link>
          </nav>
        </div>
        <div className={styles.rightNavLinks}>
          <Link to="/login">Log In</Link>
          <Link to="/join-us">Join Us</Link>
          <BsSearch className={styles.searchIcon} />
        </div>
      </div>
    </header>
  );
}

export default Header;
