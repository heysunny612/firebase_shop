import { getProductFromFirebase } from '../../api/firebase';
import ProductCard from './ProductCard/ProductCard';
import { useQuery } from '@tanstack/react-query';
import styles from './Product.module.css';

export default function Product() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], getProductFromFirebase);

  return (
    <section className='common_inner'>
      {isLoading && <p>로딩중입니다</p>}
      {error && <p>{error}</p>}
      <ul className={styles.products}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} productInfo={product} />
          ))}
      </ul>
    </section>
  );
}
