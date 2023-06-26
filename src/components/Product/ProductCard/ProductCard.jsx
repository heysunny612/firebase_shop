import React from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  return (
    <li className={styles.product} ole="button">
      <div className={styles.img_box}>
        <img />
        <p className={styles.description}></p>
      </div>
      <h3 className={styles.h3}></h3>
      <p></p>
      <p className={styles.category}></p>
    </li>
  );
}
