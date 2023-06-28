import CartItem from "../components/CartItem/CartItem";
import "../stylesheets/pages/MyCart.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";
import { useUserContext } from "../context/UserContext";
import useCart from "../hooks/useCart";

const SHIPPING = 3000;
const FREE = 109000;

export default function MyCart() {
  const { uid } = useUserContext();
  const {
    cartQuery: { isLoading, data: cartItems },
  } = useCart();
  const hasProducts = cartItems && cartItems.length > 0;
  const totalPrice =
    cartItems &&
    cartItems.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
  const charge = totalPrice >= FREE ? 0 : SHIPPING;
  return (
    <div className="common_inner">
      <h2>My Cart</h2>
      {isLoading && <p>로딩중...</p>}
      {!hasProducts && <p className="empty_cart">장바구니가 비어있습니다.</p>}
      <section className="mycart_area">
        {cartItems && (
          <ul className="mycart_items">
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} uid={uid} />
            ))}
          </ul>
        )}
        {hasProducts && (
          <>
            <div className="mycart_price_box">
              <p>
                상품총액&nbsp;<span>{totalPrice?.toLocaleString()}원</span>
              </p>
              <p>
                <AiFillPlusCircle />
              </p>
              <p>
                배송비 &nbsp;
                <span>{charge === 0 ? "무료" : charge.toLocaleString()}</span>
              </p>
              <p>
                <FaEquals />
              </p>
              <p className="total_price">
                <span>{(totalPrice + charge).toLocaleString()}원</span>
              </p>
            </div>
            <p>
              * 배송료는 {FREE.toLocaleString()}원 이상 구매시 무료로
              배송됩니다. (기본 배송료 {SHIPPING.toLocaleString()}원)
            </p>
          </>
        )}
      </section>
    </div>
  );
}
