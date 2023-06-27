import ProductCard from "./ProductCard/ProductCard";
import styles from "./Product.module.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/firebase";

export default function Product() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);

  return (
    <section className="common_inner">
      {isLoading && <p>로딩중입니다.</p>}
      {error && <p>Oops something is wrong</p>}
      {products && (
        <ul className={styles.products}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}
