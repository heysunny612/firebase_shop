import "../stylesheets/pages/ProductDetail.scss";
import Button from "../components/Button/Button";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {
  const {
    state: {
      product: { image, title, id, price, options, description },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleChage = (e) => setSelected(e.target.value);
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
          <Button type="white">CART</Button>
          <p className="success_text"></p>
        </div>
      </section>
    </div>
  );
}
