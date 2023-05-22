import React from 'react';
import styles from './ProductCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({
  productInfo,
  productInfo: { id, title, price, description, imgURL, category },
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${id}`, {
      state: { productInfo },
    });
  };
  return (
    <li className={styles.product} onClick={handleClick} role='button'>
      <div className={styles.img_box}>
        <img src={imgURL} alt={title} />
        <p className={styles.description}>{description}</p>
      </div>
      <h3 className={styles.h3}>{title}</h3>
      <p>{`${price.toLocaleString()}원`}</p>
      <p className={styles.category}>{category}</p>
    </li>
  );
}
