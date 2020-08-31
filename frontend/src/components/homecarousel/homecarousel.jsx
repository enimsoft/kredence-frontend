import React from 'react'
import {Carousel} from 'react-bootstrap'
import styles from './homecarousel.module.css'

function HomeCarousel(){
    return(
        <Carousel  indicators='false'>
  <Carousel.Item >
    <img
    className={styles.image}
      
      src={require("../../assets/solar1.jpg")}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={styles.image}
      src={require("../../assets/solar.jpg")}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={styles.image}
      src={require("../../assets/solar2.jpg")}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )

}


export default HomeCarousel