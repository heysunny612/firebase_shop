import CartItem from "../components/CartItem/CartItem";
import "../stylesheets/pages/MyCart.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaEquals } from "react-icons/fa";

export default function MyCart() {
  return (
    <div className="common_inner">
      <h2>My Cart</h2>
      <div className="mycart_area">
        <ul className="mycart_items">
          {/* {cartProducts.map((product) => (
            <CartItem key={product.id} product={product} />
          ))} */}
        </ul>
        <div className="mycart_price_box">
          <p>
            상품총액 <span>원</span>
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
      )}
    </div>
  );
}
