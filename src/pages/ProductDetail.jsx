import "../stylesheets/pages/ProductDetail.scss";
import Button from "../components/Button/Button";

export default function ProductDetail() {
  return (
    <div className="common_inner">
      <div className="product_detail_wrap">
        <div className="detail_img">
          <p></p>
        </div>
        <div className="detail_info">
          <p className="detail_title"></p>
          <p>
            <span>판매가</span> :
          </p>
          <p className="detail_select">
            <label htmlFor="option">옵션 선택</label> :
            <select id="option"></select>
          </p>
          <p className="detail_desc"></p>
          <Button>BUY IT NOW</Button>
          <Button type="white">CART</Button>
          <p className="success_text"></p>
        </div>
      </div>
    </div>
  );
}
