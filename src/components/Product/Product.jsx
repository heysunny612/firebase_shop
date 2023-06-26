import ProductCard from "./ProductCard/ProductCard";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <section className="common_inner">
      <ul className={styles.products}>
        <ProductCard />
      </ul>
    </section>
  );
}
