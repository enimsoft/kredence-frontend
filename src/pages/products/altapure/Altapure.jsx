import React from "react";
import styles from "./Altapure.module.css";
import Header from "../../../Components/header/Header";
import pstyles from "../product.module.css";

function Altapure() {
  return (
    <div className={styles.a}>
      <Header />
      <div className={pstyles.head}>
        <h2 className={pstyles.heading}>Altapure</h2>
      </div>
      <div className={pstyles.searchNcatalogue}>
        <input
          type="email"
          placeholder="Search"
          className={pstyles.textfield}
        />
        <button class="pbutton" className={pstyles.button} type="button">
          <i
            class="fa fa-arrow-down"
            aria-hidden="true"
            style={{ marginRight: "0.5em" }}
          ></i>
          Catalogue
        </button>
      </div>
      <div className={styles.alt}>
        <div className={styles.list}>
          <h4>Products</h4>
          <a href="#">solvent</a>

          <a href="#">Acid</a>
          <a href="#">Inorganic Solvent</a>
          <a href="#">Cleaning and Disinfectant agent</a>
        </div>

        <div className={styles.table}>
          <h1>products</h1>
        </div>
      </div>
    </div>
  );
}

export default Altapure;
