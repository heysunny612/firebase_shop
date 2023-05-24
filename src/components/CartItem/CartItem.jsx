import React from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import { removeFromCart, uploadCartFirebase } from '../../api/firebase';
import styles from './CartItem.module.css';
export default function CartItem({
  uid,
  product,
  product: { id, title, price, imgURL, options, quantity },
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    uploadCartFirebase(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    uploadCartFirebase(uid, { ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className={styles.cart_list}>
      <div className={styles.cart_img}>
        <img src={imgURL} alt={title} className={styles.img} />
      </div>
      <div className={styles.cart_info}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.option}>
            Option : <span>{options}</span>
          </p>
          <p>{`${price.toLocaleString()}원`}</p>
        </div>
        <div className={styles.cart_quantity}>
          <AiOutlineMinusSquare onClick={handleMinus} />
          {quantity}
          <AiOutlinePlusSquare onClick={handlePlus} />
          <BsTrashFill onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
