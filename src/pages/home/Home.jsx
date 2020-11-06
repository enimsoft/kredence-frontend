import React from "react";
import styles from "./Home.module.css";
import HomeCarousel from "../../Components/homecarousel/homecarousel";
import Header from "../../Components/header/Header";
import cpc from "../../assets/products/cpc/cpc.svg";
import beaker from "../../assets/beaker.jpeg";
import quality from "../../assets/quality.svg";
import setting from "../../assets/setting.svg";

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

        <div className={styles.expcont}>
          <div className={styles.expcard}>
            <img
              className={styles.eimage}
              src={require("../../assets/p1.jpeg")}
              alt=""
            />
            <div className={styles.cont}>
              <h2
                style={{
                  color: "black",
                  fontSize: "1.4rem",
                  margin: "0 0 1rem",
                }}
              >
                Mr Bharat Bhatnagar
              </h2>
              <p>
                He has more than 20 years of experience in Performance Chemicals
                Industry and having worked with Glaxo, Ranbaxy & Avantor
                Performance Materials India Limited. He worked at various sales
                positions and was Business Head-Lab Product at Avantor, his last
                assignment. Awarded M.Phil (Organic Chemistry) degree from
                Kurukshetra University . Bharat loves to explore new challenges
                and always having an customer focus approach.
              </p>

              <ul style={{ padding: "0", listStyle: "none" }}>
                <li>
                  &#10003; &nbsp; Strategic role in Avantor Performance
                  Materials & part of M&A team of RFCL at the time when Avantor
                  acquire the company.
                </li>
                <li>
                  &#10003; &nbsp; Established Rankem and J.T Baker brand in
                  India by creating a dedicated network of distributors and
                  loyal customers.
                </li>
                <li>
                  &#10003; &nbsp; Developed a effective indigenous solution to
                  Solar cell manufacturing companies for their performance
                  chemicals both in terms of logistic and cost effectiveness.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.expcard}>
            <img
              className={styles.eimage2}
              src={require("../../assets/p1.jpeg")}
              alt=""
            />
            <div className={styles.cont}>
              <h2
                style={{
                  color: "black",
                  fontSize: "1.4rem",
                  margin: "0 0 1rem",
                }}
              >
                Mr Snadeep Mathur
              </h2>
              <p>
                He has more than 23 years experience in various functions
                related to Quality Assurance, Quality Control, Production and
                Technical Services in performance chemical industry. A holder of
                Master degree in Chemistry from Kanpur University. He always
                believe to provide best quality product to customers through
                quality system and process.
              </p>

              <ul style={{ padding: "0", listStyle: "none" }}>
                <li>
                  &#10003; &nbsp; Established quality perception of Rankem Brand
                  against EM and TF through Quality systems.
                </li>
                <li>
                  &#10003; &nbsp; Developed loyal customers through sales and
                  marketing team by providing technical inputs and performance
                  of product at customer end.
                </li>
                <li>
                  &#10003; &nbsp; Developed the indigenous source of all
                  photovoltaic performance chemicals for solar cell
                  manufacturing customers.
                </li>
              </ul>
            </div>
          </div>
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
