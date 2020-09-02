import React from "react";
import styles from "./Honeywell.module.css";
import Header from "../../../components/header/Header";
import pstyles from '../product.module.css'

function Honeywell() {
  return (
    <div>
      <Header />
      <div className={pstyles.head}>
        <h2 className={pstyles.heading}>Honeywell</h2>
        <p style={{ fontSize: "8px", color: "black" }}>
          For more info visit{" "}
          <a href="https://lab.honeywell.com" style={{ color: "black" }}>
            <u>Honeywell.com</u>
          </a>
        </p>
      </div>
      <div className={pstyles.searchNcatalogue}>
        <input type="email" placeholder="Search" className={pstyles.textfield} />
        <button class="pbutton" className={pstyles.button} type="button">
          <i
            class="fa fa-arrow-down"
            aria-hidden="true"
            style={{ marginRight: "0.5em" }}
          ></i>
          Catalogue
        </button>
      </div>

      <div className={styles.cardContainer}>
          <div className={styles.card}>
              <a href="https://lab.honeywell.com/en/burdick-and-jackson"><img className={styles.cardimage} src={require('../../../assets/products/honeywell/honeywellBJ.jpeg')}/>
              <h2 className={styles.cardheading}>{'Burdick & Jackson™ Solvents'}</h2>
              </a>
           
            <p className={styles.cardtext}>With more than 50 years of developing high-purity solvents, Burdick & Jackson™ is a leading manufacturer of solvents and DNA/RNA reagents.</p>

          </div>
          <div className={styles.card}>
              <a href="https://lab.honeywell.com/en/fluka"><img className={styles.cardimage} src={require('../../../assets/products/honeywell/honeywellfluka.jpeg')}/>
              <h2 className={styles.cardheading}>{'Fluka™ Analytical Reagents and Standards '}</h2>
              </a>
           
            <p className={styles.cardtext}>Fluka™ standards have helped thousands of scientists accurately and consistently achieve results.</p>

          </div>
          <div className={styles.card}>
              <a href="https://lab.honeywell.com/en/riedel-de-haen"><img className={styles.cardimage} src={require('../../../assets/products/honeywell/honeywellrj.jpeg')}/>
              <h2 className={styles.cardheading}>{'Riedel-de Haen™ Solvents'}</h2>
              </a>
            
            <p className={styles.cardtext}>Riedel-de Haen™ solvents have become the standard for high-purity grades for all analytical applications. </p>

          </div>
          <div className={styles.card}>
              <a href="https://lab.honeywell.com/shop/catalogsearch/result/index/?brand=17022&search=Honeywell"><img className={styles.cardimage} src={require('../../../assets/products/honeywell/honeywell.jpeg')}/>
              <h2 className={styles.cardheading}>{'Honeywell Solvents and Inorganics'}</h2>
              </a>
           
            <p className={styles.cardtext}>Honeywell provides performance-grade solvents and inorganics for general laboratory use. </p>

          </div>
      </div>
    </div>
  );
}

export default Honeywell;
