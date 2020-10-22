import React from "react";
import styles from "./Footer.module.css";
// import logo from '../../assets/logo512.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerblock}>
        <p className={styles.footerhead}>Contact</p>
        <p className={styles.footertext}>+91 9810406219</p>
        <p className={styles.footertext}>Enquiry@kredencematerials.com</p>
      </div>

      <div className={styles.footerblock}>
        <p className={styles.footerhead}>Services</p>
        <p className={styles.footertext}>Contact US</p>
        <p className={styles.footertext}>{"Ordering & Payment"}</p>
        <p className={styles.footertext}>COA</p>
        <p className={styles.footertext}>MSDS</p>
        <p className={styles.footertext}>TREM Card</p>
      </div>

      <div className={styles.footerblock}>
        <p className={styles.footerhead}>Information</p>
        <p className={styles.footertext}>Privacy Policy</p>
        <p className={styles.footertext}>{"Terms & Condition"}</p>
      </div>

      <div className={styles.footerblock}>
        <p className={styles.footerhead}>Made by:</p>
        <img
          src={require("../../assets/logo512.png")}
          className={styles.enimlogo}
          alt=""
        />
        <p className={styles.footertext}>Enim AI</p>
        <p className={styles.footertext}>© Kredence Materials 2020</p>
      </div>
    </div>
  );
}

export default Footer;
