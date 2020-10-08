import React from "react";
import styles from "./Contact.module.css";
import Header from "../../Components/header/Header";
import GoogleMapReact from "google-map-react";

import LocationOnIcon from "@material-ui/icons/LocationOn";

const LocationPin = ({ text }) => (
  <div className={styles.pin}>
    <LocationOnIcon className={styles.pinicon} />
    <p className={styles.pintext}>{text}</p>
  </div>
);

function Contact() {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

  const zoomLevel = 17;

  return (
    <div className={styles.c}>
      <Header />
      <h2 className={styles.heading}>Contact US</h2>
      <hr className={styles.hr1} />

      <div className={styles.cform}>
        <div className={styles.adress}>
          <div>
            <img
              className={styles.image}
              src={require("../../assets/carousel/solar1.jpg")}
              alt="First slide"
            />
          </div>
          <div>
            <p>A-102 ISocn heigts, Gotri road vadodara Lorem </p>
          </div>
        </div>

        <div className={styles.form}>
          <i className="fa fa-user usericon" aria-hidden="true" />
          <input type="text" placeholder="Name" className={styles.textfield} />
          <br />
          <i className="fa fa-user usericon" aria-hidden="true" />
          <input
            type="email"
            placeholder="Email"
            className={styles.textfield}
          />
          <textarea
            id="contact"
            placeholder="Your Message...."
            className={styles.textarea}
          />
          <button className="pbutton" type="button">
            Submit
          </button>
        </div>
      </div>

      <div className={styles.map}>
        <h2 className={styles.maph2}>Come Visit Us At Our Campus</h2>

        <div className={styles.googlemap}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDWAjDA-Ju4AA3jZIEU9Rd7XRqpO1V4VU8",
            }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default Contact;
