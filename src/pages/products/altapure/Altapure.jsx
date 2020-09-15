import React from "react";
import styles from "./Altapure.module.css";
import Header from "../../../components/header/Header";
import pstyles from '../product.module.css'

function Altapure() {
return (
<div>
  <Header />
  <div className={pstyles.head}>
    <h2 className={pstyles.heading}>Altapure</h2>

  </div>
  <div className={pstyles.searchNcatalogue}>
    <input type="email" placeholder="Search" className={pstyles.textfield} />
    <button class="pbutton" className={pstyles.button} type="button">
      <i class="fa fa-arrow-down" aria-hidden="true" style={{ marginRight: "0.5em" }}></i>
      Catalogue
    </button>
  </div>
  <div className={styles.alt}>
    <div className={styles.list}>
      <h4>Products</h4>
      <a>solvent</a>

      <a>Acid</a>
      <a>Inorganic Solvent</a>
      <a>Cleaning and Disinfectant agent</a>

    </div>

    <div className={styles.table}>
      <h1>products</h1>
    </div>

  </div>
</div>
);
}

export default Altapure;