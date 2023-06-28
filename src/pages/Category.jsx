import React from "react";
import Product from "../components/Product/Product";
import { useLocation, useParams } from "react-router-dom";

export default function Category() {
  const { category } = useParams();
  console.log(category);
  return (
    <>
      <h2 className="main">{category}</h2>
      <Product filter={category} />
    </>
  );
}
