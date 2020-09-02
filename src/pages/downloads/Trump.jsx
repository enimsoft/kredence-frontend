import React from "react";
import styles from "./Downloads.module.css";
import Header from "../../components/header/Header";

const filename = "test.pdf";
function TrumpCard() {
  return (
    <div>
      <Header />
      <h2 className={styles.heading}>Trump Card</h2>
      <hr className={styles.hr1} />
      <div className={styles.dpage}>
        <img
          src={require("../../assets/downloads/coa.jpeg")}
          className={styles.image}
          alt=""
        />
        <input
          type="text"
          placeholder="Batch Number"
          className={styles.textfield}
        />
        <br />
        <button class="pbutton" type="button">
        <i class="fa fa-arrow-down" aria-hidden="true" style={{marginRight: '0.5em'}}></i>{filename}
        </button>
        <p className={styles.para}>
          The product and lot number are found on the product label, as
          indicated in the diagram on the right. If your search returns no
          results, please contact us for further assistance.{" "}
        </p>
      </div>
    </div>
  );
}

export default TrumpCard;
