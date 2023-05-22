import '../stylesheets/pages/ProductDetail.scss';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button/Button';
import { useState } from 'react';

export default function ProductDetail() {
  const {
    state: {
      productInfo: { title, price, description, imgURL, category, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    //장바구니에 추가해주면됨
  };
  return (
    <div className='common_inner'>
      <div className='product_detail_wrap'>
        <div className='detail_img'>
          <p>
            <img src={imgURL} alt={title} />
          </p>
        </div>
        <div className='detail_info'>
          <p className='detail_title'>
            [{category}] {title}
          </p>
          <p>
            <span>판매가</span> : {`${price.toLocaleString()}원`}
          </p>
          <p className='detail_select'>
            <label htmlFor='option'>옵션 선택</label> :
            <select onChange={handleSelect} value={selected} id='option'>
              {options &&
                options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </p>
          <p className='detail_desc'>{description}</p>
          <Button>BUY IT NOW</Button>
          <Button type='white' onClick={handleClick}>
            CART
          </Button>
        </div>
      </div>
    </div>
  );
}
