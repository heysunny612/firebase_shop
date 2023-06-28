import ProductCard from "./ProductCard/ProductCard";
import styles from "./Product.module.css";
import useProducts from "../../hooks/useProducts";

export default function Product() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
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
