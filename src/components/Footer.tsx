import React from "react";
import styles from "../styles/footer.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import flagIndia from "../assets/flag-india.png";
import logo from "../assets/logo-white.png";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.upperContentContainer}>
        <div className={styles.leftContent}>
          <div>
            <Link to="/">
              <img className={styles.logo} src={logo} alt="Logo White" />
            </Link>
          </div>
          <div className={styles.address}>
            <MdLocationOn className={styles.iconLocation} />
            <p>
              24, Vaishnavi Centre, Raja Park, 51, Dhanana, Panipat, Haryana,
              Pincode-154419
            </p>
          </div>
        </div>
        <div>
          <h3>THE BASICS</h3>
          <ul className={styles.links}>
            <li>About Weekend Watch</li>
            <li>Contact Us</li>
            <li>Support</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <h3>GET INVOLVED</h3>
          <ul className={styles.links}>
            <li>Contribution Guideline</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>
        <div>
          <h3>COMMUNITY</h3>
          <ul className={styles.links}>
            <li>Guidelines</li>
            <li>Discussion</li>
            <li>Leaderboard</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h3>LEGAL</h3>
          <ul className={styles.links}>
            <li>Terms of use</li>
            <li>API Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className={styles.lowerContentContainer}>
        <div className={styles.lowerContent}>
          <p>
            © 2022 STAR. All Rights Reserved. Weekend watch&apos;s all related
            Movies and TV Shoes are part of copyright.
          </p>
          <div className={styles.countrySelector}>
            <img className={styles.flag} src={flagIndia} alt="Indian Flag" />
            <p>India</p>
            <AiFillCaretDown />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
