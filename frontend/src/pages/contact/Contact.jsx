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
      <div className={styles.adress}>
        <div>
          <img
            className={styles.image}
            src={require("../../assets/solar1.jpg")}
            alt="First slide"
          />
        </div>
        <div>
          <p>A-102 ISocn heigts, Gotri road vadodara Lorem </p>
        </div>
      </div>

      <div className={styles.form}>
      <i class="fa fa-user" aria-hidden="true"><span> <input type="text" placeholder="Name" className={styles.textfield} /></span></i>
      <i class="fa fa-user" aria-hidden="true"><span> <input type="email" placeholder="Email" className={styles.textfield} /></span></i>
      <textarea id='contact' placeholder="Your Message...." className={styles.textarea}/>
      <button class='pbutton' type="button">Submit</button>
      
      </div>
    </div>
  );
}

export default Contact;
