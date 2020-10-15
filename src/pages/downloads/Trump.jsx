import React, { useState } from "react";
import styles from "./Downloads.module.css";
import Header from "../../Components/header/Header";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import axios from "axios";

function TrumpCard() {
  const [productName, setProductName] = useState();

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName) return;

    const form = new FormData();

    form.append("type", "Trump");
    form.append("productName", productName);

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
    <div className={styles.t}>
      <Header />
      <h2 className={styles.heading}>Trump Card</h2>
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
    </div>
  );
}

export default TrumpCard;
