import React from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { BsTrashFill } from 'react-icons/bs';
import styles from './CartItem.module.css';
import useCart from '../../hooks/useCart';
export default function CartItem({
  product,
  product: { id, title, price, imgURL, options, quantity },
}) {
  const { addOrUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => removeItem.mutate(id);
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
