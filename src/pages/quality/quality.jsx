import React from "react";

import Header from "../../Components/header/Header";
import quality from "../../assets/quality.jpg";
import styles from "./quality.module.css";

import CardMembershipIcon from "@material-ui/icons/CardMembership";
import Group from "@material-ui/icons/Group";
import GroupWork from "@material-ui/icons/GroupWork";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import ThumbUpAlt from "@material-ui/icons/ThumbUpAlt";
import ThumbsUpDown from "@material-ui/icons/ThumbsUpDown";

export default function Quality() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Our quality assurance system concentrates on providing</h1>

        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              Consistently zero defect, high quality products to our customers
            </p>
            <p>
              Continuous improvement to all aspects of our quality assurance
              system
            </p>
            <p>
              Quick action for shipment with best safety of our customer orders
            </p>
            <p>Economical pricing with best safety for our products</p>
            <p>
              Providing technical support to our customer for trainings on
              chemical handlings
            </p>
            <p>Vender approval system</p>
            <p>In-House testing facility</p>
            <p>Validated testing procedures</p>
            <p>Manufacturing under controlled condition</p>
          </div>
          <img src={quality} alt="" />
        </div>
      </div>

      <div className={styles.contentDark}>
        <div className={styles.textDark}>
          <h1>Quality Policy</h1>
          <p>
            To provide our customers with high quality products and to achieve
            total customer satisfactions
          </p>

          <h1>Quality System</h1>
          <p>
            Kredence Performance Materials, affirm this commitment, and have
            established a comprehensive quality assurance system, which will
            meet all customer application requirements “best practice” quality
            system standards.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <h1>Quality Objectives</h1>

        <div className={styles.contentIcon}>
          <div className={styles.imgText}>
            <CardMembershipIcon
              style={{ fontSize: "5rem", color: "#5be100" }}
            />
            <p>Quality In All Activities</p>
          </div>

          <div className={styles.imgText}>
            <Group style={{ fontSize: "5rem", color: "#5be100" }} />
            <p>Employee Involvement</p>
          </div>

          <div className={styles.imgText}>
            <GroupWork style={{ fontSize: "5rem", color: "#5be100" }} />
            <p> Respect & Team Work</p>
          </div>

          <div className={styles.imgText}>
            <VerifiedUser style={{ fontSize: "5rem", color: "#5be100" }} />
            <p> Safe Work Practices</p>
          </div>

          <div className={styles.imgText}>
            <ThumbUpAlt style={{ fontSize: "5rem", color: "#5be100" }} />
            <p> Continous Learning</p>
          </div>

          <div className={styles.imgText}>
            <ThumbsUpDown style={{ fontSize: "5rem", color: "#5be100" }} />
            <p> Supplier Partnerships</p>
          </div>
        </div>
      </div>
    </>
  );
}
