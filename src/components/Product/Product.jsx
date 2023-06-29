import ProductCard from './ProductCard/ProductCard';
import styles from './Product.module.css';
import useProducts from '../../hooks/useProducts';

export default function Product({ filter, searchItem }) {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  const filteredItems = filter && products && filterItems(filter, products);
  return (
    <>
      {isLoading && <p>로딩중입니다.</p>}
      {error && <p>Oops something is wrong</p>}
      {!isLoading && (
        <ul className={styles.products}>
          {(filter ? filteredItems : searchItem).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </>
  );
}

const filterItems = (filter, products) => {
  switch (filter) {
    case 'all':
      return products;
    case filter:
      return products.filter(
        (product) => product.category.toLowerCase() === filter.toLowerCase()
      );
    default:
      break;
  }
};
