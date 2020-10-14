import React, { useState } from "react";

import styles from "./Altapure.module.css";
import Header from "../../../Components/header/Header";
import pstyles from "../product.module.css";

function Altapure() {
  const [product, setProduct] = useState("solvent");
  const [search, setSearch] = useState("");

  const [solvent, setSolvent] = useState([
    { text: "Acetone", value: "200 L", glow: false },
    { text: "Acetone", value: "	25 L", glow: false },
    { text: "Benzyl Alcohol", value: "	25 L", glow: false },
    { text: "n-Butanol", value: "	25 L", glow: false },
    { text: "Chloroform", value: "200 L", glow: false },
    { text: "Chloroform", value: "	25 L", glow: false },
    { text: "Dichloromethane", value: "200 L", glow: false },
    { text: "Dichloromethane", value: "	25 L", glow: false },
    { text: "Dimethyl Formamide", value: "200 L", glow: false },
    { text: "Dimethyl Formamide", value: "	25 L", glow: false },
    { text: "Dimethyl Sulphoxide", value: "200 L", glow: false },
    { text: "Dimethyl Sulphoxide", value: "	25 L", glow: false },
    { text: "Ethyl Acetate", value: "200 L", glow: false },
    { text: "Ethyl Acetate", value: "	25 L", glow: false },
    { text: "Ethylene Glycol", value: "200 L", glow: false },
    { text: "Ethylene Glycol", value: "	25 L", glow: false },
    { text: "Glycerol", value: "	25 L", glow: false },
    { text: "Hydrazine Hydrate 100%", value: "200 L", glow: false },
    { text: "Hydrazine Hydrate 100%", value: "	25 L", glow: false },
    { text: "Hydrazine Hydrate 80%", value: "200 L", glow: false },
    { text: "Hydrazine Hydrate 80%", value: "	25 L", glow: false },
    { text: "iso-Butyl Methyl Ketone", value: "	25 L", glow: false },
    { text: "iso-Propyl Alcohol", value: "200 L", glow: false },
    { text: "iso-Propyl Alcohol", value: "	25 L", glow: false },
    { text: " n-Propyl Alcohol", value: "	25 L", glow: false },
    { text: "Morpholine", value: "200 L", glow: false },
    { text: "NMP", value: "	25 L", glow: false },
    { text: "Pet Ether 40-60° C ", value: "	25 L", glow: false },
    { text: "Pet Ether 40-60° C ", value: "200 L", glow: false },
    { text: "Pet Ether 60-80° C", value: "	25 L", glow: false },
    { text: "Pet Ether 60-80° C", value: "200 L", glow: false },
    { text: "Toluene", value: "	25 L", glow: false },
    { text: "Toluene", value: "200 L", glow: false },
    { text: "Toluene (Benzene Free)", value: "	25 L", glow: false },
    { text: "Toluene (Benzene Free)", value: "200 L", glow: false },
    { text: "Xylene", value: "	25 L", glow: false },
  ]);

  const [acids, setAcid] = useState([
    { text: "Acetic Acid ", value: "5 L", glow: false },
    { text: "Hydrochloric Acid", value: "5 L", glow: false },
    { text: "Hydrochloric Acid", value: "25 L", glow: false },
    { text: "Hydrogen Peroxide (6%/30%/50%)", value: "5 L", glow: false },
    { text: "Hydrogen Peroxide (6%/30%/50%)", value: "25 L", glow: false },
    { text: "Hydroflouric Acid 50% EL", value: "25 L", glow: false },
    { text: "Hydroflouric Acid 50% EL", value: "200 L", glow: false },
    { text: "Lactic Acid", value: "25 L", glow: false },
    { text: "Ortho Phosphoric Acid 85%", value: "25 L", glow: false },
    { text: "Ortho Phosphoric Acid 88%", value: "25 L", glow: false },
    { text: "Nitric Acid", value: "5 L", glow: false },
    { text: "Nitric Acid", value: "25 L", glow: false },
    { text: "Nitric Acid EL", value: "5 L", glow: false },
    { text: "Nitric Acid EL", value: "25 L", glow: false },
    { text: "Potassium Hydroxide Solution 50%", value: "25 L", glow: false },
    { text: "Potassium Hydroxide Solution 50%", value: "200 L", glow: false },
    { text: "Potassium Hydroxide Solution 50% EL", value: "25 L", glow: false },
    {
      text: "Potassium Hydroxide Solution 50% EL",
      value: "200 L",
      glow: false,
    },
    { text: "Sodium Hydroxide Solution 50%", value: "25 L", glow: false },
    { text: "Sodium Hydroxide Solution 50%", value: "200 L", glow: false },
    { text: "Sulphuric Acid", value: "5 L", glow: false },
    { text: "Sulphuric Acid", value: "25 L", glow: false },
  ]);

  const [inorganic, setInorganic] = useState([
    { text: "Ammonium Dihydrogen Phosphate Monobasic", glow: false },
    {
      text: "Ammonium Phosphate Dibasic (Di-AmmoniumHydrogen O Phosphate)",
      glow: false,
    },
    { text: "Calcium Chloride (Fused)", glow: false },
    { text: "Charcoal Activated", glow: false },
    { text: "Citric Acid Anhydrous", glow: false },
    { text: "Citric Acid Monohydrate", glow: false },
    { text: "Copper Sulphate", glow: false },
    { text: "Dextrose Anhydrous", glow: false },
    { text: "E.D.T.A. Disodium Salt Dihydrate", glow: false },
    { text: "E.D.T.A. Dipotassium Dihydrate Salt", glow: false },
    { text: "Ferric Chloride Hexahydrate", glow: false },
    { text: "Magnesium Carbonate Light", glow: false },
    { text: "Magnesium Sulphate Dihydrate", glow: false },
    { text: "Magnesium Sulphate Heptahydrate", glow: false },
    { text: "Manganous Sulphate Monohydrate", glow: false },
    { text: "Potassium Chloride", glow: false },
    { text: "Potassium Dihydrogen Orthophosphate", glow: false },
    {
      text:
        "Potassium Dihydrogen Orthophosphate (Potassium Phosphate Monobasic)",
    },
    { text: "Potassium Metabisulphite", glow: false },
    { text: "Potassium Nitrate", glow: false },
    {
      text:
        "Potassium Phosphate Dibasic Anhydrous (Dipotassium Hydrogen Phosphate)",
    },
    { text: "Sodium Acetate 3Hydrate", glow: false },
    { text: "Sodium Acetate Anhydrous", glow: false },
    { text: "Sodium Bicarbonate", glow: false },
    { text: "Sodium Carbonate Anhydrous", glow: false },
    { text: "Sodium Chloride", glow: false },
    { text: "Sodium Citrate Dihydrate", glow: false },
    { text: "Sodium Dichromate Dihydrate", glow: false },
    { text: "Sodium Hydroxide Pellets", glow: false },
    { text: "Sodium Hexametaphosphate", glow: false },
    { text: "Sodium Nitrate", glow: false },
    { text: "Sodium Phosphate mono basic dihydrate", glow: false },
    { text: "Sodium Phosphate mono basic mono hydrate", glow: false },
    { text: "Sodium Phosphate Dibasic Anhydrous", glow: false },
    { text: "Sodium Phosphate Dibasic Dihydrate", glow: false },
    { text: "Sodium Sulphate Anhydrous", glow: false },
    { text: "Sucrose", glow: false },
    { text: "Thiourea", glow: false },
    { text: "Titanium Dioxide", glow: false },
    { text: "Tris Buffer", glow: false },
    { text: "Tri-Sodium Orthophosphate (Tri Sodium Phosphate)", glow: false },
    { text: "Urea", glow: false },
    { text: "Zinc Oxide", glow: false },
    { text: "Zinc Sulphate Heptahydrate", glow: false },
  ]);

  const [cleaning, setCleaning] = useState([
    { text: "isopropyl Alcohol 70% ", value: "	25 L", glow: false },
    { text: "isopropyl Alcohol 70% 	", value: "200 L", glow: false },
    { text: "Hydrogen Peroxide 6%", value: " 	1 L", glow: false },
    { text: "Hydrogen Peroxide 6%", value: " 	5 L", glow: false },
    { text: "Hydrogen Peroxide 6% ", value: "	25 L", glow: false },
    { text: "Hydrogen Peroxide 30%", value: " 	1 L", glow: false },
    { text: "Hydrogen Peroxide 30%", value: " 	5 L", glow: false },
    { text: "Hydrogen Peroxide 30% ", value: "	25 L", glow: false },
    { text: "Hydrogen Peroxide 35%", value: " 	1 L", glow: false },
    { text: "Hydrogen Peroxide 35%", value: " 	5 L", glow: false },
    { text: "Hydrogen Peroxide 35% ", value: "	25 L", glow: false },
    { text: "Hydrogen Peroxide 50%", value: " 	1 L", glow: false },
    { text: "Hydrogen Peroxide 50%", value: " 	5 L", glow: false },
    { text: "Hydrogen Peroxide 50% ", value: "	25 L", glow: false },
    { text: "Sodium Hypochlorite 4-6%", value: " 	5 L", glow: false },
    { text: "Sodium Hypochlorite 4-6% ", value: "	25 L", glow: false },
    { text: "Sodium Hypochlorite 10-12%", value: " 	5 L", glow: false },
    { text: "Sodium Hypochlorite 10-12% ", value: "	25 L", glow: false },
    { text: "Formaldehyde 30L ", value: "	30 L", glow: false },
    { text: "Formaldehyde 30L 	", value: "100 L", glow: false },
    { text: "Microside – SG (Biocide) 	", value: "50 kg", glow: false },
    { text: "Microside – K (Biocide) 	", value: "50 kg", glow: false },
    { text: "lodophore", value: " 	1 L", glow: false },
    { text: "lodophore", value: " 	5 L", glow: false },
  ]);

  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    let newContent;
    switch (product) {
      case "solvent":
        newContent = solvent;
        break;
      case "acid":
        newContent = acids;
        break;
      case "inorganic":
        newContent = inorganic;
        break;
      default:
        newContent = cleaning;
    }

    newContent.map((item) => {
      if (
        item.text.toLowerCase().startsWith(newSearch.toLowerCase()) &&
        newSearch.length > 0
      )
        item.glow = true;
      else item.glow = false;
      return;
    });

    switch (product) {
      case "solvent":
        setSolvent(newContent);
        break;
      case "acid":
        setAcid(newContent);
        break;
      case "inorganic":
        setInorganic(newContent);
        break;
      default:
        setCleaning(newContent);
    }
  };

  function displayProduct() {
    let data = null;

    switch (product) {
      case "solvent":
        data = solvent;
        break;
      case "acid":
        data = acids;
        break;
      case "inorganic":
        data = inorganic;
        break;
      default:
        data = cleaning;
    }

    if (product === "inorganic") {
      return (
        <>
          <h5 style={{ fontWeight: "800", marginBottom: "40px" }}>
            Products are available in 25kgs & 50kgs pack size
          </h5>

          {data.map((item, index) => {
            if (item.glow || !search.length)
              return (
                <p className={styles.content} key={index}>
                  {item.text}
                </p>
              );
          })}
        </>
      );
    } else {
      return (
        <>
          <div className={styles.productItem} style={{ marginBottom: "40px" }}>
            <h5 style={{ fontWeight: "800" }}>Product Name</h5>
            <h5 style={{ fontWeight: "800" }}> Pack Size</h5>
          </div>
          {data.map((item, index) => {
            if (item.glow || !search.length)
              return (
                <div className={styles.productItem} key={index}>
                  <p className={styles.content}>{item.text}</p>
                  <p className={styles.content}> {item.value}</p>
                </div>
              );
          })}
        </>
      );
    }
  }

  const handleClick = (value) => {
    if (value !== product) {
      setProduct(value);
      setSearch("");

      let content = solvent;
      content.map((text) => (text.glow = false));
      setSolvent(content);

      content = acids;
      content.map((text) => (text.glow = false));
      setAcid(content);

      content = inorganic;
      content.map((text) => (text.glow = false));
      setInorganic(content);

      content = cleaning;
      content.map((text) => (text.glow = false));
      setCleaning(content);
    }
  };

  return (
    <div className={styles.a}>
      <Header />

      <div className={pstyles.head}>
        <h2 className={pstyles.heading}>Altapure</h2>
      </div>

      <div className={pstyles.searchNcatalogue}>
        <input
          type="text"
          placeholder="Search"
          className={pstyles.textfield}
          value={search}
          onChange={handleSearch}
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

      <div className={styles.alt}>
        <div className={styles.list}>
          <h4>Products</h4>
          <p
            className={product === "solvent" ? styles.select : styles.product}
            onClick={() => handleClick("solvent")}
          >
            solvent
          </p>
          <p
            className={product === "acid" ? styles.select : styles.product}
            onClick={() => handleClick("acid")}
          >
            Acid
          </p>
          <p
            className={product === "inorganic" ? styles.select : styles.product}
            onClick={() => handleClick("inorganic")}
          >
            Inorganic Solvent
          </p>
          <p
            className={product === "cleaning" ? styles.select : styles.product}
            onClick={() => handleClick("cleaning")}
          >
            Cleaning and Disinfectant agent
          </p>
        </div>

        <div className={styles.table}>{displayProduct()}</div>
      </div>
    </div>
  );
}

export default Altapure;
