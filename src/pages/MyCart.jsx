import CartItem from "../components/CartItem/CartItem";
import { useCartContext } from "../context/CartContext";
import "../stylesheets/pages/MyCart.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";

export default function MyCart() {
  const { cartItems } = useCartContext();

  return (
    <div className="common_inner">
      <h2>My Cart</h2>
      <div className="mycart_area">
        <ul className="mycart_items">
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>
        <div className="mycart_price_box">
          <p>
            상품총액 <span>{totalPrice(cartItems)}원</span>
          </p>
          <p>
            <AiFillPlusCircle />
          </p>
          <p>
            배송비 <span>원</span>
          </p>
          <p>
            <FaEquals />
          </p>
          <p className="total_price">
            <span>원</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const totalPrice = (cartItems) => {
  return cartItems.reduce((prev, next) => {
    console.log(prev, next.price);
    return prev + next.price;
  }, 0);
};
