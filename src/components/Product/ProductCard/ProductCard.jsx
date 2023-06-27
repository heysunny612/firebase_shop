import React from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, title, price, category, image },
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`, { state: { product } });
  };
  return (
    <li className={styles.product} ole="button" onClick={handleClick}>
      <div className={styles.img_box}>
        <img src={image} alt={title} />
        <p className={styles.description}>구매하기</p>
      </div>
      <h3 className={styles.h3}>{title}</h3>
      <p>{price.toLocaleString()}원</p>
      <p className={styles.category}>{category}</p>
    </li>
  );
}
