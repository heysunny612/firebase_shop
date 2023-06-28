import ProductCard from "./ProductCard/ProductCard";
import styles from "./Product.module.css";
import useProducts from "../../hooks/useProducts";

export default function Product({ filter }) {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  const filteredItems = products && filterItems(filter, products);
  console.log();
  return (
    <section className="common_inner">
      {isLoading && <p>로딩중입니다.</p>}
      {error && <p>Oops something is wrong</p>}
      {products && (
        <ul className={styles.products}>
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}

const filterItems = (filter, products) => {
  switch (filter) {
    case "all":
      return products;
    case filter:
      return products.filter(
        (product) => product.category.toLowerCase() === filter.toLowerCase()
      );
    default:
      break;
  }
};
