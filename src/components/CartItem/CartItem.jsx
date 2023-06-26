import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import styles from "./CartItem.module.css";
export default function CartItem() {
  return (
    <li className={styles.cart_list}>
      <div className={styles.cart_img}></div>
      <div className={styles.cart_info}>
        <div>
          <p className={styles.title}></p>
          <p className={styles.option}>
            Option : <span></span>
          </p>
          <p></p>
        </div>
        <div className={styles.cart_quantity}>
          <AiOutlineMinusSquare />

          <AiOutlinePlusSquare />
          <BsTrashFill />
        </div>
      </div>
    </li>
  );
}
