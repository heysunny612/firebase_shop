import React, { useState } from "react";
import "../stylesheets/pages/NewProducts.scss";
import Button from "../components/Button/Button";

export default function NewProducts() {
  return (
    <div className="new_product_wrap">
      <h2>새로운 제품 등록</h2>

      <div className="product_img"></div>

      <form className="new_product_form">
        <input type="file" name="file" accept="image/*" />
        <input type="text" name="title" />
        <input type="number" name="price" />
        <input type="text" name="category" />
        <input type="text" name="description" />
        <input type="text" name="options" />
        <Button></Button>
      </form>
      <p className="success_text"></p>
    </div>
  );
}
