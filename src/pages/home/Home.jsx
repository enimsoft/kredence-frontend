import React from "react";
import styles from "./Home.module.css";
import HomeCarousel from "../../components/homecarousel/homecarousel";
import Header from "../../components/header/Header";
import cpc from "../../assets/products/cpc/cpc.svg";
import beaker from "../../assets/beaker.svg";
import quality from "../../assets/quality.svg";
import setting from "../../assets/setting.svg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <>
      <Header/>
      <div className={styles.section1}></div>
      <HomeCarousel />

      <div className={styles.product}>
        <div className={styles.headings}>
          <h2>Products</h2>
          <hr />
        </div>

        <div className={styles.products}>
          <div>
            <a as={Link} to="/products/honeywell">
              <img
                className={styles.pimage}
                src={require("../../assets/products/honeywell/honeywell.png")}
                alt=""
              />
            </a>
          </div>

          <div>
            <a>
              <img className={styles.pimage} src={cpc} alt="" />
            </a>
          </div>

          <div>
            <a>
              <img
                className={styles.pimage}
                src={require("../../assets/products/elementum/elment.png")}
                alt=""
              />
            </a>
          </div>

          <div>
            <a>
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
        <div className={styles.headings} style={{ padding: "0px" }}>
          <h2 style={{ color: "#707070" }}>Our Experience</h2>
          <hr style={{ backgroundColor: "#707070" }} />
        </div>

        <div className="expcard">
          <img
            style={{
              maxWidth: "100%",
              borderRadius: "20px",
              boxShadow: "0px 6px 20px 0px rgba(0,0,0,0.38)",
            }}
            src={require("../../assets/p1.jpeg")}
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, voluptatum laudantium? Ipsum obcaecati magni earum,
            dolorem eius, autem tenetur recusandae iusto vero vitae at odit
            quibusdam tempora similique fugiat dicta.
          </p>
        </div>

        <div className="expcard">
          <img
            style={{
              maxWidth: "100%",
              borderRadius: "20px",
              boxShadow: "0px 6px 20px 0px rgba(0,0,0,0.38)",
            }}
            src={require("../../assets/p1.jpeg")}
            alt=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, voluptatum laudantium? Ipsum obcaecati magni earum,
            dolorem eius, autem tenetur recusandae iusto vero vitae at odit
            quibusdam tempora similique fugiat dicta.
          </p>
        </div>
      </div>

      <div className={styles.headings}>
        <h2>What Makes us Different</h2>
        <hr />
      </div>

      <div className={styles.diff}>
        <img className={styles.dimg} src={beaker} alt=""></img>
        <h2 className={styles.diffhead}>Performance Chemicals</h2>
        <p className={styles.difftext}>Supply Of High Purity Chemicals</p>
        <img className={styles.dimg} src={setting} alt=""></img>
        <h2 className={styles.diffhead}>{"Services & Reliabilitys"}</h2>
        <p className={styles.difftext}>
          Our Team Professionals Are Highly Trained To Provide You Non Stop
          Servicess
        </p>
        <img className={styles.dimg} src={quality} alt=""></img>
        <h2 className={styles.diffhead}>{"Quality Products"}</h2>
        <p className={styles.difftext}>
          We Provide Consistently Zero Defect High Quality Products
        </p>
      </div>
    </>
  );
}

export default Home;
