import React from "react";
import styles from "./Downloads.module.css";
import Header from "../../Components/header/Header";
import cpc from "../../assets/products/cpc/cpc.svg";

const filename = "test.pdf";
function Coa() {
  return (
    <div>
      <Header />
      <h2 className={styles.heading}>Certificate of Analysis</h2>
      <hr className={styles.hr1} />
      <div className={styles.dpage}>
        <div className={styles.dimage}>
          <img
            src={require("../../assets/downloads/coa.jpeg")}
            className={styles.image}
            alt=""
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Product Number"
            className={styles.textfield}
          />
          <br />
          <input
            type="text"
            placeholder="Batch Number"
            className={styles.textfield}
          />
          <br />
          <button class={styles.pbutton} type="button">
            <i
              class="fa fa-arrow-down"
              aria-hidden="true"
              style={{ marginRight: "0.5em" }}
            ></i>
            {filename}
          </button>
          <p className={styles.para}>
            The product and lot number are found on the product label, as
            indicated in the diagram on the right. If your search returns no
            results, please contact us for further assistance.{" "}
          </p>
        </div>
      </div>
      <h2 className={styles.heading}>Other COAs</h2>
      <div className={styles.other}>
        <div>
          <a href="https://lab.honeywell.com/en/coa">
            <img
              className={styles.logos}
              href="https://www.google.com"
              src={require("../../assets/products/honeywell/honeywell.png")}
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="">
            <img className={styles.logos} src={cpc} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Coa;
