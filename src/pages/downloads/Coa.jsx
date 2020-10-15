import React, { useState } from "react";
import styles from "./Downloads.module.css";
import Header from "../../Components/header/Header";
import cpc from "../../assets/products/cpc/cpc.svg";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

const filename = "test.pdf";
function Coa() {
  const [productNumber, setProductNumber] = useState();
  const [batchNumber, setBatchNumber] = useState(null);
  const [buttonName, setButtonName] = useState(null);
  const [buttonURL, setButtonURL] = useState();
  const [official, setOfficial] = useState();

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

    form.append("type", "Trump");
    form.append("productNumber", productNumber);
    form.append("batchNumber", batchNumber);

    axios
      .post("https://kredence-upload.herokuapp.com/file/get-document", form)
      .then((res) => {
        if (res.status !== 200) throw new Error();

        setButtonName(res.data.fileName);
        setButtonURL(res.data.fileLink);
        setOfficial(res.data.officialName);
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
            placeholder="Product Number"
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
          <SearchIcon
            style={{ color: "#2699fb", position: "absolute" }}
            onClick={handleSubmit}
          />
          <br />

          <Button
            variant="contained"
            disabled={buttonName ? false : true}
            href={buttonURL}
            style={{
              background: "#358ed3",
              color: "white",
              padding: "9px 16px",
            }}
          >
            <i
              class="fa fa-arrow-down"
              aria-hidden="true"
              style={{ marginRight: "0.5em" }}
            ></i>
            {buttonName ? buttonName : "Select File"}
          </Button>
          {official && (
            <h4
              style={{
                fontSize: "20px",
                marginTop: "1rem",
                fontFamily: "Roboto",
                fontWeight: "400",
              }}
            >
              {official}
            </h4>
          )}
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
