import React, { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import styles from "./CartItem.module.css";
import { useUserContext } from "../../context/UserContext";
import { addCart, deleteCartItem } from "../../api/firebase";
export default function CartItem({
  product,
  product: { id, image, options, price, quantity },
}) {
  const { uid } = useUserContext();
  const [count, setCount] = useState(quantity);
  const handleMinus = () => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
    addCart(uid, {
      ...product,
      quantity: count - 1,
    });
  };
  const handlePlus = () => {
    setCount((prev) => prev + 1);
    addCart(uid, {
      ...product,
      quantity: count + 1,
    });
  };
  console.log(count);
  return (
    <li className={styles.cart_list}>
      <div className={styles.cart_img}>
        <img src={image} alt="" width="100%" />
      </div>
      <div className={styles.cart_info}>
        <div>
          <p className={styles.title}></p>
          <p className={styles.option}>
            Option : <span>{options}</span>
          </p>
          <p>{(price * quantity).toLocaleString()}원</p>
        </div>
        <div className={styles.cart_quantity}>
          <AiOutlineMinusSquare onClick={handleMinus} />
          {count}
          <AiOutlinePlusSquare onClick={handlePlus} />
          <BsTrashFill onClick={() => deleteCartItem(uid, id)} />
        </div>
      </div>
    </li>
  );
}
