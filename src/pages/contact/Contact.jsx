import React, { useState } from "react";
import styles from "./Contact.module.css";
import Header from "../../Components/header/Header";
import GoogleMapReact from "google-map-react";

import LocationOnIcon from "@material-ui/icons/LocationOn";

import axios from "axios";

const LocationPin = ({ text }) => (
  <div className={styles.pin}>
    <LocationOnIcon className={styles.pinicon} />
    <p className={styles.pintext}>{text}</p>
  </div>
);

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const location = {
    address:
      "TF-301, Block-C, C-square, Sarabhai Campus, Near Genda Circle, Subhanpura, Vadodara, Gujarat, India 390023",
    lat: 22.318451,
    lng: 73.169398,
  };

  const zoomLevel = 17;

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("All Fields Are Required !");
      return;
    }

    const data = {
      name,
      email,
      message,
    };

    axios
      .post("http://localhost:8080/file/contactUs", data)
      .then((res) => {
        alert("Your Form has been submitted successfylly !");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        alert("Error submitting the response");
      });
  };

  return (
    <div className={styles.c}>
      <Header />
      <h2 className={styles.heading}>Contact US</h2>
      <hr className={styles.hr1} />

      <div className={styles.cform}>
        <div className={styles.adress}>
          <div>
            <div className={styles.image}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyCZW5hs5IfSLxFIMyEIqrKsclSnLRxOxWg",
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
          <div>
            <p>
              301 c-square sarabhai compound near ganda circle vadodara Gujarat
              39007
            </p>
          </div>
        </div>

        <div className={styles.form}>
          <i className="fa fa-user usericon" aria-hidden="true" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className={styles.textfield}
          />
          <br />
          <i className="fa fa-user usericon" aria-hidden="true" />
          <input
            type="email"
            placeholder="Email"
            className={styles.textfield}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            id="contact"
            placeholder="Your Message...."
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="pbutton"
            style={{ cursor: "pointer" }}
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
