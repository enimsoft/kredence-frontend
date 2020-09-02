import React from "react";
import styles from "./Elementum.module.css";
import Header from "../../../components/header/Header";
import pstyles from "../product.module.css";

function Elementum() {
  return (
    <div>
      <Header />
      <div className={pstyles.head}>
      <h2 className={pstyles.heading}>Elementum</h2>
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
      <div className={styles.container}>
        <h3 style={{ color: "black" }}> PV Grade </h3>
        <p>
          Available in Bulk packs & in IBC (along with Dip tube for safe
          dispensing)
        </p>
        <p className={styles.content}>Boron Tri Bromide 7 N</p>
        <p className={styles.content}>Calcium Chloride ≥ 30%</p>
        <p className={styles.content}>Calcium Chloride ≥ 33%</p>
        <p className={styles.content}>Hydrochloric Acid ≥ 36%</p>
        <p className={styles.content}>Hydrofluoric Acid ≥ 20%</p>
        <p className={styles.content}>Hydrofluoric Acid ≥49%</p>
        <p className={styles.content}>Hydrofluoric Acid ≥70%</p>
        <p className={styles.content}>Hydrogen Peroxide ≥ 30%</p>
        <p className={styles.content}>Hydrogen Peroxide ≥ 35%</p>
        <p className={styles.content}>Hydrogen Peroxide ≥ 50%</p>
        <p className={styles.content}>Hydrogen Peroxide ≥ 6%</p>
        <p className={styles.content}>Iso Propyl Alcohol ≥ 99.9%</p>
        <p className={styles.content}>Nitric Acid ≥65%</p>
        <p className={styles.content}>Phosphorous Oxy Chloride (POCl3) 7 N</p>
        <p className={styles.content}>Potassium Hydroxide Solution ≥ 45%</p>
        <p className={styles.content}>CSodium Hydroxide Solution ≥ 40%</p>
        <p className={styles.content}>CSulphuric Acid ≥ 95%</p>
        <p className={styles.content}>
          Tetra Methyl Ammonium Hydroxide solution ( in Water) ≥ 10%
        </p>
      </div>
      <div className={styles.imagecontainer}>
        <img
          src={require("../../../assets/products/elementum/elmt1.png")}
          alt=""
          className={styles.image}
        />
        <img
          src={require("../../../assets/products/elementum/elmt1.png")}
          alt=""
          className={styles.image}
        />
        <img
          src={require("../../../assets/products/elementum/elmt1.png")}
          alt=""
          className={styles.image}
        />
        <img
          src={require("../../../assets/products/elementum/elmt1.png")}
          alt=""
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default Elementum;
