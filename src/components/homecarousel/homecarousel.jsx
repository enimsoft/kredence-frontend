import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./homecarousel.module.css";
import black from "../../assets/carousel/black.svg";
import Iframe from "react-iframe";

function HomeCarousel() {
return (
<div className={styles.photocontainer}>
  <Carousel>
    {/* <Carousel.Item>
      <img className={styles.image} src={require("../../assets/carousel/solar1.jpg")} alt="First slide" />
    </Carousel.Item> */}
    <Carousel.Item>
      <img className={styles.image} src={require("../../assets/carousel/solar.jpg")} alt="second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className={styles.image} src={require("../../assets/carousel/solar.jpg")} alt="second slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className={styles.image} src={require("../../assets/carousel/solar.jpg")} alt="second slide" />
    </Carousel.Item>
    
  </Carousel>

  <img className={styles.overlayimage} src={black} alt="" />
  <h1 className={styles.overlayheading}>Kredence
  </h1>

  <p className={styles.overlaytext}>performance<span style={{ color: "#6CB3EA" }}>materials</span>{" "}
  </p>
</div>

);
}

export default HomeCarousel;