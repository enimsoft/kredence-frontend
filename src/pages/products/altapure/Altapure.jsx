import React, { useState } from "react";

import styles from "./Altapure.module.css";
import Header from "../../../Components/header/Header";
import pstyles from "../product.module.css";

function Altapure() {
  const [product, setProduct] = useState("solvent");

  const solvent = [
    { text: "Acetone", value: "200 L" },
    { text: "Acetone", value: "	25 L" },
    { text: "Benzyl Alcohol", value: "	25 L" },
    { text: "n-Butanol", value: "	25 L" },
    { text: "Chloroform", value: "200 L" },
    { text: "Chloroform", value: "	25 L" },
    { text: "Dichloromethane", value: "200 L" },
    { text: "Dichloromethane", value: "	25 L" },
    { text: "Dimethyl Formamide", value: "200 L" },
    { text: "Dimethyl Formamide", value: "	25 L" },
    { text: "Dimethyl Sulphoxide", value: "200 L" },
    { text: "Dimethyl Sulphoxide", value: "	25 L" },
    { text: "Ethyl Acetate", value: "200 L" },
    { text: "Ethyl Acetate", value: "	25 L" },
    { text: "Ethylene Glycol", value: "200 L" },
    { text: "Ethylene Glycol", value: "	25 L" },
    { text: "Glycerol", value: "	25 L" },
    { text: "Hydrazine Hydrate 100%", value: "200 L" },
    { text: "Hydrazine Hydrate 100%", value: "	25 L" },
    { text: "Hydrazine Hydrate 80%", value: "200 L" },
    { text: "Hydrazine Hydrate 80%", value: "	25 L" },
    { text: "iso-Butyl Methyl Ketone", value: "	25 L" },
    { text: "iso-Propyl Alcohol", value: "200 L" },
    { text: "iso-Propyl Alcohol", value: "	25 L" },
    { text: " n-Propyl Alcohol", value: "	25 L" },
    { text: "Morpholine", value: "200 L" },
    { text: "NMP", value: "	25 L" },
    { text: "Pet Ether 40-60° C ", value: "	25 L" },
    { text: "Pet Ether 40-60° C ", value: "200 L" },
    { text: "Pet Ether 60-80° C", value: "	25 L" },
    { text: "Pet Ether 60-80° C", value: "200 L" },
    { text: "Toluene", value: "	25 L" },
    { text: "Toluene", value: "200 L" },
    { text: "Toluene (Benzene Free)", value: "	25 L" },
    { text: "Toluene (Benzene Free)", value: "200 L" },
    { text: "Xylene", value: "	25 L" },
  ];

  const acids = [
    { text: "Acetic Acid ", value: "5 L" },
    { text: "Hydrochloric Acid", value: "5 L" },
    { text: "Hydrochloric Acid", value: "25 L" },
    { text: "Hydrogen Peroxide (6%/30%/50%)", value: "5 L" },
    { text: "Hydrogen Peroxide (6%/30%/50%)", value: "25 L" },
    { text: "Hydroflouric Acid 50% EL", value: "25 L" },
    { text: "Hydroflouric Acid 50% EL", value: "200 L" },
    { text: "Lactic Acid", value: "25 L" },
    { text: "Ortho Phosphoric Acid 85%", value: "25 L" },
    { text: "Ortho Phosphoric Acid 88%", value: "25 L" },
    { text: "Nitric Acid", value: "5 L" },
    { text: "Nitric Acid", value: "25 L" },
    { text: "Nitric Acid EL", value: "5 L" },
    { text: "Nitric Acid EL", value: "25 L" },
    { text: "Potassium Hydroxide Solution 50%", value: "25 L" },
    { text: "Potassium Hydroxide Solution 50%", value: "200 L" },
    { text: "Potassium Hydroxide Solution 50% EL", value: "25 L" },
    { text: "Potassium Hydroxide Solution 50% EL", value: "200 L" },
    { text: "Sodium Hydroxide Solution 50%", value: "25 L" },
    { text: "Sodium Hydroxide Solution 50%", value: "200 L" },
    { text: "Sulphuric Acid", value: "5 L" },
    { text: "Sulphuric Acid", value: "25 L" },
  ];

  const inorganic = [
    { text: "Ammonium Dihydrogen Phosphate Monobasic" },
    { text: "Ammonium Phosphate Dibasic (Di-AmmoniumHydrogen O Phosphate)" },
    { text: "Calcium Chloride (Fused)" },
    { text: "Charcoal Activated" },
    { text: "Citric Acid Anhydrous" },
    { text: "Citric Acid Monohydrate" },
    { text: "Copper Sulphate" },
    { text: "Dextrose Anhydrous" },
    { text: "E.D.T.A. Disodium Salt Dihydrate" },
    { text: "E.D.T.A. Dipotassium Dihydrate Salt" },
    { text: "Ferric Chloride Hexahydrate" },
    { text: "Magnesium Carbonate Light" },
    { text: "Magnesium Sulphate Dihydrate" },
    { text: "Magnesium Sulphate Heptahydrate" },
    { text: "Manganous Sulphate Monohydrate" },
    { text: "Potassium Chloride" },
    { text: "Potassium Dihydrogen Orthophosphate" },
    {
      text:
        "Potassium Dihydrogen Orthophosphate (Potassium Phosphate Monobasic)",
    },
    { text: "Potassium Metabisulphite" },
    { text: "Potassium Nitrate" },
    {
      text:
        "Potassium Phosphate Dibasic Anhydrous (Dipotassium Hydrogen Phosphate)",
    },
    { text: "Sodium Acetate 3Hydrate" },
    { text: "Sodium Acetate Anhydrous" },
    { text: "Sodium Bicarbonate" },
    { text: "Sodium Carbonate Anhydrous" },
    { text: "Sodium Chloride" },
    { text: "Sodium Citrate Dihydrate" },
    { text: "Sodium Dichromate Dihydrate" },
    { text: "Sodium Hydroxide Pellets" },
    { text: "Sodium Hexametaphosphate" },
    { text: "Sodium Nitrate" },
    { text: "Sodium Phosphate mono basic dihydrate" },
    { text: "Sodium Phosphate mono basic mono hydrate" },
    { text: "Sodium Phosphate Dibasic Anhydrous" },
    { text: "Sodium Phosphate Dibasic Dihydrate" },
    { text: "Sodium Sulphate Anhydrous" },
    { text: "Sucrose" },
    { text: "Thiourea" },
    { text: "Titanium Dioxide" },
    { text: "Tris Buffer" },
    { text: "Tri-Sodium Orthophosphate (Tri Sodium Phosphate)" },
    { text: "Urea" },
    { text: "Zinc Oxide" },
    { text: "Zinc Sulphate Heptahydrate" },
  ];

  const cleaning = [
    { text: "isopropyl Alcohol 70% ", value: "	25 L" },
    { text: "isopropyl Alcohol 70% 	", value: "200 L" },
    { text: "Hydrogen Peroxide 6%", value: " 	1 L" },
    { text: "Hydrogen Peroxide 6%", value: " 	5 L" },
    { text: "Hydrogen Peroxide 6% ", value: "	25 L" },
    { text: "Hydrogen Peroxide 30%", value: " 	1 L" },
    { text: "Hydrogen Peroxide 30%", value: " 	5 L" },
    { text: "Hydrogen Peroxide 30% ", value: "	25 L" },
    { text: "Hydrogen Peroxide 35%", value: " 	1 L" },
    { text: "Hydrogen Peroxide 35%", value: " 	5 L" },
    { text: "Hydrogen Peroxide 35% ", value: "	25 L" },
    { text: "Hydrogen Peroxide 50%", value: " 	1 L" },
    { text: "Hydrogen Peroxide 50%", value: " 	5 L" },
    { text: "Hydrogen Peroxide 50% ", value: "	25 L" },
    { text: "Sodium Hypochlorite 4-6%", value: " 	5 L" },
    { text: "Sodium Hypochlorite 4-6% ", value: "	25 L" },
    { text: "Sodium Hypochlorite 10-12%", value: " 	5 L" },
    { text: "Sodium Hypochlorite 10-12% ", value: "	25 L" },
    { text: "Formaldehyde 30L ", value: "	30 L" },
    { text: "Formaldehyde 30L 	", value: "100 L" },
    { text: "Microside – SG (Biocide) 	", value: "50 kg" },
    { text: "Microside – K (Biocide) 	", value: "50 kg" },
    { text: "lodophore", value: " 	1 L" },
    { text: "lodophore", value: " 	5 L" },
  ];

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

          {data.map((item, key) => {
            return <p key={key}>{item.text}</p>;
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
            return (
              <div className={styles.productItem} key={index}>
                <p>{item.text}</p>
                <p> {item.value}</p>
              </div>
            );
          })}
        </>
      );
    }
  }

  const handleClick = (value) => {
    if (value !== product) setProduct(value);
  };

  return (
    <div className={styles.a}>
      <Header />

      <div className={pstyles.head}>
        <h2 className={pstyles.heading}>Altapure</h2>
      </div>

      <div className={pstyles.searchNcatalogue}>
        <input
          type="email"
          placeholder="Search"
          className={pstyles.textfield}
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
