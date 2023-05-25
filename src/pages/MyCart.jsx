import CartItem from '../components/CartItem/CartItem';
import '../stylesheets/pages/MyCart.scss';
import { AiFillPlusCircle } from 'react-icons/ai';
import { FaEquals } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import { useUserContext } from '../context/UserContext';

const SHIPPING = 3000;
export default function MyCart() {
  const { user } = useUserContext();
  const {
    cartQuery: { isLoading, data: cartProducts },
  } = useCart();
  const hasProducts = cartProducts && cartProducts.length > 0;

  const totalPrice =
    cartProducts &&
    cartProducts.reduce((prev, curr) => (prev + curr.price) * curr.quantity, 0);
  return (
    <div className='common_inner'>
      <h2>My Cart</h2>
      {user && isLoading && <p>Loading...</p>}
      {!hasProducts && <p>장바구니에 상품이 없습니다</p>}
      {cartProducts && (
        <div className='mycart_area'>
          <ul className='mycart_items'>
            {cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div className='mycart_price_box'>
            <p>
              상품총액 <span>{totalPrice.toLocaleString()}원</span>
            </p>
            <p>
              <AiFillPlusCircle />
            </p>
            <p>
              배송비 <span>{SHIPPING.toLocaleString()}원</span>
            </p>
            <p>
              <FaEquals />
            </p>
            <p className='total_price'>
              <span>{`${(totalPrice + SHIPPING).toLocaleString()}`}원</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
