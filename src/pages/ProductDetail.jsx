import "../stylesheets/pages/ProductDetail.scss";
import Button from "../components/Button/Button";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useCart from "../hooks/useCart";

export default function ProductDetail() {
  const [cartText, setCartText] = useState("");
  const {
    state: {
      product,
      product: { image, title, price, options, description },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleChage = (e) => setSelected(e.target.value);
  const { updateCart } = useCart();
  const handleAddCart = () => {
    const cartItem = { ...product, options: selected, quantity: 1 };
    updateCart.mutate(cartItem, {
      onSuccess: () => {
        setCartText("장바구니에 추가되었습니다");
        setTimeout(() => {
          setCartText("");
        }, 3000);
      },
    });
  };
  return (
    <div className="common_inner">
      <section className="product_detail_wrap">
        <div className="detail_img">
          <p>
            <img src={image} alt={title} />
          </p>
        </div>
        <div className="detail_info">
          <p className="detail_title">{title}</p>
          <p>
            <span>판매가</span> : {price.toLocaleString()}원
          </p>
          <p className="detail_select">
            <label htmlFor="option">옵션 선택</label> :
            <select id="option" value={selected} onChange={handleChage}>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </p>
          <p className="detail_desc">"{description}"</p>
          <Button>BUY IT NOW</Button>
          <Button type="white" onClick={handleAddCart}>
            CART
          </Button>
          {cartText && <p className="success_text">{cartText}</p>}
        </div>
      </section>
    </div>
  );
}
