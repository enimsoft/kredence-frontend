import React from "react";
import pstyles from "../product.module.css";
import styles from "./Cpc.module.css";
import Header from "../../../components/header/Header";
import black from "../../../assets/black.svg";

function Cpc() {
return (
<div>
  <Header />
  <div className={pstyles.head}>
    <h2 className={pstyles.heading}>Cpc</h2>
    <p className={pstyles.link} >
      For more info visit{" "}
      <a href="https://lab.honeywell.com" style={{ color: "black" }}>
        <u>Cpc.com</u>
      </a>
    </p>
  </div>
  <div className={pstyles.searchNcatalogue}>
    <input type="email" placeholder="Search" className={pstyles.textfield} />
    <button class="pbutton" className={pstyles.button} type="button">
      <i class="fa fa-arrow-down" aria-hidden="true" style={{ marginRight: "0.5em" }}></i>
      Catalogue
    </button>
  </div>
  <div className={styles.cpc}>
    <div className={styles.imageconatiner}>
      <div className={styles.imagecard1}>
        <img className={styles.image} alt="" src={require("../../../assets/products/cpc/drumpquickpro.jpg")} />
        <p className={styles.imagetext1}>{"DrumQuik® PRO/PUR"}</p>
      </div>

      <div className={styles.imagecard2}>
        <img className={styles.image} alt="" src={require("../../../assets/products/cpc/collage.png")} />
        <p className={styles.imagetext2}>{"Easy to use"}</p>
      </div>

      <div className={styles.imagecard3}>
        <img className={styles.image} alt="" src={require("../../../assets/products/cpc/collag1.jpg")} />
        <p className={styles.imagetext1}>{"DrumQuik® PRO/PUR"}</p>
      </div>

      <div className={styles.imagecard4}>
        <img className={styles.image} alt="" src={require("../../../assets/products/cpc/collag2.png")} />
        <p className={styles.imagetext2}>{"Easy to use"}</p>
      </div>
    </div>
  </div>
</div>
);
}

export default Cpc;