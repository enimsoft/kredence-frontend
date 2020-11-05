import React from "react";
import styles from "./Home.module.css";
import HomeCarousel from "../../Components/homecarousel/homecarousel";
import Header from "../../Components/header/Header";
import cpc from "../../assets/products/cpc/cpc.svg";
import beaker from "../../assets/beaker.svg";
import quality from "../../assets/quality.svg";
import setting from "../../assets/setting.svg";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.section1}></div>
      <HomeCarousel />

      <div>
        <div className={styles.headings}>
          <h2>Products</h2>
          <hr />
        </div>

        <div className={styles.products}>
          <div>
            <a href="/products/honeywell">
              <img
                className={styles.pimage}
                src={require("../../assets/products/honeywell/honeywell.png")}
                alt=""
              />
            </a>
          </div>

          <div>
            <a href="/products/cpc">
              <img className={styles.pimage} src={cpc} alt="" />
            </a>
          </div>

          <div>
            <a href="/products/elementum">
              <img
                className={styles.pimage}
                src={require("../../assets/products/elementum/elment.png")}
                alt=""
              />
            </a>
          </div>

          <div>
            <a href="/products/altapure">
              <img
                className={styles.pimage}
                src={require("../../assets/products/altapure/alta.png")}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.exp}>
        <div
          className={styles.headings}
          style={{ padding: "0px", marginTop: "0px" }}
        >
          <h2 style={{ color: "#707070" }}>Our Experience</h2>
          <hr style={{ backgroundColor: "#707070" }} />
        </div>

        <div className={styles.expcard}>
          <img
            className={styles.eimage}
            src={require("../../assets/p1.jpeg")}
            alt=""
          />
          <p>
            Having more than 20 years of experience in Performance Chemicals
            Industry and having worked with Glaxo, Ranbaxy & Avantor Performance
            Materials India Limited. He worked at various sales positions and
            was Business Head-Lab Product at Avantor, his last assignment.
            Awarded M.Phil (Organic Chemistry) degree from Kurukshetra
            University . Bharat loves to explore new challenges and always
            having an customer focus approach.
          </p>
        </div>

        <div className={styles.expcard}>
          <img
            className={styles.eimage2}
            src={require("../../assets/p1.jpeg")}
            alt=""
          />
          <p>
            Having more than 23 years experience in various functions related to
            Quality Assurance, Quality Control, Production and Technical
            Services in performance chemical industry. A holder of Master degree
            in Chemistry from Kanpur University. He always believe to provide
            best quality product to customers through quality system and
            process.
          </p>
        </div>
      </div>

      <div className={styles.headings}>
        <h2>What Makes us Different</h2>
        <hr />
      </div>

      <div className={styles.diff}>
        <div>
          <img className={styles.dimg} src={beaker} alt=""></img>
          <h2 className={styles.diffhead}>Performance Chemicals</h2>
          <p className={styles.difftext}>Supply Of High Purity Chemicals</p>
        </div>

        <div>
          <img className={styles.dimg} src={setting} alt=""></img>
          <h2 className={styles.diffhead}>{"Services & Reliabilitys"}</h2>
          <p className={styles.difftext}>
            Our Team Professionals Are Highly Trained To Provide You Non Stop
            Servicess
          </p>
        </div>

        <div>
          <img className={styles.dimg} src={quality} alt=""></img>
          <h2 className={styles.diffhead}>{"Quality Products"}</h2>
          <p className={styles.difftext}>
            We Provide Consistently Zero Defect High Quality Products
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
