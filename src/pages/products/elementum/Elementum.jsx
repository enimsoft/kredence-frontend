import React, { useState } from "react";
import styles from "./Elementum.module.css";
import Header from "../../../Components/header/Header";
import pstyles from "../product.module.css";

function Elementum() {
  const [content, setContent] = useState([
    {
      text: "Boron Tri Bromide 7 N",
      glow: false,
    },
    {
      text: "Calcium Chloride ≥ 30%",
      glow: false,
    },
    {
      text: "Calcium Chloride ≥ 33%",
      glow: false,
    },
    {
      text: "Hydrochloric Acid ≥ 36%",
      glow: false,
    },
    {
      text: "Hydrofluoric Acid ≥ 20%",
      glow: false,
    },
    {
      text: "Hydrofluoric Acid ≥49%",
      glow: false,
    },
    {
      text: "Hydrofluoric Acid ≥70%",
      glow: false,
    },
    {
      text: "Hydrogen Peroxide ≥ 30%",
      glow: false,
    },
    {
      text: "Hydrogen Peroxide ≥ 35%",
      glow: false,
    },
    {
      text: "Hydrogen Peroxide ≥ 50%",
      glow: false,
    },
    {
      text: "Hydrogen Peroxide ≥ 6%",
      glow: false,
    },
    {
      text: "Iso Propyl Alcohol ≥ 99.9%",
      glow: false,
    },
    {
      text: "Nitric Acid ≥65%",
      glow: false,
    },
    {
      text: "Phosphorous Oxy Chloride (POCl3) 7 N",
      glow: false,
    },
    {
      text: "Potassium Hydroxide Solution ≥ 45%",
      glow: false,
    },
    {
      text: "CSodium Hydroxide Solution ≥ 40%",
      glow: false,
    },
    {
      text: "CSulphuric Acid ≥ 95%",
      glow: false,
    },
    {
      text: "Tetra Methyl Ammonium Hydroxide solution ( in Water) ≥ 10%",
      glow: false,
    },
  ]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    const newContent = content;

    newContent.map((item) => {
      if (
        item.text.toLowerCase().startsWith(newSearch.toLowerCase()) &&
        newSearch.length > 0
      )
        item.glow = true;
      else item.glow = false;
      return;
    });

    setContent(newContent);
  };

  return (
    <div>
      <Header />
      <div className={pstyles.head}>
        <h2 className={pstyles.heading}>Elementum</h2>
      </div>

      <div className={pstyles.searchNcatalogue}>
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={handleSearch}
          className={pstyles.textfield}
        />
        <button className={pstyles.button} type="button">
          <i
            className="fa fa-arrow-down"
            aria-hidden="true"
            style={{ marginRight: "0.5em" }}
          ></i>
          Catalogue
        </button>
      </div>
      <div className={styles.elmt}>
        <div className={styles.container}>
          <div></div>
          <h3 style={{ color: "black" }}> PV Grade </h3>
          <p>
            Available in Bulk packs & in IBC (along with Dip tube for safe
            dispensing)
          </p>
          {content.map((item, index) => {
            if (item.glow)
              return (
                <p className={styles.contentGlow} key={index}>
                  {item.text}
                </p>
              );
            else
              return (
                <p className={styles.content} key={index}>
                  {item.text}
                </p>
              );
          })}
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
    </div>
  );
}

export default Elementum;
