import React from "react";
import styles from "./Contact.module.css";
import Header from "../../components/header/Header";
import {Form} from 'react-bootstrap';
// import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

function Contact() {
return (
<div>
  <Header />
  <h2 className={styles.heading}>Contact US</h2>
  <hr className={styles.hr1} />

  <div className={styles.cform}>

  <div className={styles.adress}>
    <div>
      <img className={styles.image} src={require("../../assets/carousel/solar1.jpg")} alt="First slide" />
    </div>
    <div>
      <p>A-102 ISocn heigts, Gotri road vadodara Lorem </p>
    </div>
  </div>

  <div className={styles.form}>
    <i class="fa fa-user usericon" aria-hidden="true" />
    <input type="text" placeholder="Name" className={styles.textfield} /><br />
    <i class="fa fa-user usericon" aria-hidden="true" />
    <input type="email" placeholder="Email" className={styles.textfield} />
    <textarea id='contact' placeholder="Your Message...." className={styles.textarea} />
    <button class='pbutton' type="button">Submit</button>
      
      </div>

  </div>
 
    </div>
  );
}

export default Contact;