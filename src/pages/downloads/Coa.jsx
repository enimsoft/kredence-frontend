import React, { useState } from "react";
import styles from "./Downloads.module.css";
import Header from "../../Components/header/Header";
import cpc from "../../assets/products/cpc/cpc.svg";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const filename = "test.pdf";
function Coa(props) {
  const [productNumber, setProductNumber] = useState(null);
  const [batchNumber, setBatchNumber] = useState(null);

  const handleChange = (e) => {
    setProductNumber(e.target.value);
  };
  const handleBatchNumber = (e) => {
    setBatchNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productNumber || !batchNumber) return;

    const form = new FormData();

    form.append("type", "COA");
    form.append("productName", productNumber);
    form.append("batchNumber", batchNumber);

    axios
      .post("https://apikredence.herokuapp.com/file/get-document", form)
      .then((res) => {
        if (res.status !== 200) throw new Error();

        window.location.assign(res.data.fileLink);
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.Message);
        }
      });
  };
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
            value={productNumber}
            onChange={handleChange}
            placeholder="Product Code"
            className={styles.textfield}
          />
          <br />
          <input
            type="text"
            value={batchNumber}
            onChange={handleBatchNumber}
            placeholder="Batch Number"
            className={styles.textfield}
          />
          <br />

          <Button
            variant="contained"
            style={{
              background: "#358ed3",
              color: "white",
              padding: "9px 16px",
            }}
            onClick={handleSubmit}
          >
            <i
              class="fa fa-arrow-down"
              aria-hidden="true"
              style={{ marginRight: "0.5em" }}
            ></i>
            Download File
          </Button>

          <p className={styles.para}>
            The product and lot number are found on the product label, as
            indicated in the diagram on the right. If your search returns no
            results, please contact us for further assistance.
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
