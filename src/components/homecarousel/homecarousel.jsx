import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./homecarousel.module.css";
import black from '../../assets/carousel/black.svg';
import Iframe from 'react-iframe';

function HomeCarousel() {
  return (
    <div>
      {/* <div className={styles.videocontainer}>
        <Iframe title='main'
          className={styles.video}
          url={"https://www.youtube.com/embed/FGDYnmzYhI4?autoplay=1&loop=1&autopause=0&mute=1"}
          allow='autoplay; encrypted-media'
          frameborder="0" />

        <img
          className={styles.overlayimage}
          src={black}
          alt=""
        />
        <h1 className={styles.overlayheading}>Kredence</h1>
        <p
          style={{
            position: "absolute",
            top: "22%",
            left: "5%",
            color: "white",
          }}
        >
          performance <span style={{ color: "#6CB3EA" }}>materials</span>
        </p>
      </div> */}

      <div className={styles.photocontainer}>

     

      <Carousel>
        <Carousel.Item>
          <img
            className={styles.image}
            src={require("../../assets/carousel/solar1.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.image}
            src={require("../../assets/carousel/solar.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.image}
            src={require("../../assets/carousel/solar2.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <img
          className={styles.overlayimage}
          src={black}
          alt=""
        />
        <h1 className={styles.overlayheading}>Kredence</h1>
        <p className={styles.overlaytext}>performance<span style={{ color: "#6CB3EA" }}>materials</span>
        </p>
      </div>
    </div>
  );
}

export default HomeCarousel;
