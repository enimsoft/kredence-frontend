import React, { useState } from "react";
import styles from "./Downloads.module.css";
import Header from "../../Components/header/Header";
import cpc from "../../assets/products/cpc/cpc.svg";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import axios from "axios";

const filename = "test.pdf";
function Msds() {
  const [productName, setProductName] = useState();
  const [buttonName, setButtonName] = useState();
  const [buttonURL, setButtonURL] = useState();

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName) return;

    const form = new FormData();

    form.append("type", "MSDS");
    form.append("productName", productName);

    axios
      .post("http://localhost:8080/file/get-document", form)
      .then((res) => {
        if (res.status !== 200) throw new Error();

        setButtonName(res.data.fileName);
        setButtonURL(res.data.fileLink);
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
      <h2 className={styles.heading}>MSDS</h2>
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
            value={productName}
            placeholder="Product Name"
            onChange={handleChange}
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
          <p className={styles.para}>
            The product and lot number are found on the product label, as
            indicated in the diagram on the right. If your search returns no
            results, please contact us for further assistance.{" "}
          </p>
        </div>
      </div>
      <h2 className={styles.heading}>Other MSDS</h2>
      <div className={styles.other}>
        <div>
          <a href="https://lab.honeywell.com/en/sds">
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

export default Msds;
