import '../stylesheets/pages/ProductDetail.scss';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button/Button';
import { useState } from 'react';
import { uploadCartFirebase } from '../api/firebase';
import { useUserContext } from '../context/UserContext';
import { useCartContext } from '../context/CartContext';

export default function ProductDetail() {
  const { setCartNum } = useCartContext();
  const { user, uid } = useUserContext();
  const {
    state: {
      productInfo,
      productInfo: { title, price, description, imgURL, category, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const [success, setSuccess] = useState();
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    //장바구니에 추가해주면됨
    const product = { ...productInfo, options: selected, quantity: 1 };
    uploadCartFirebase(uid, product).then(() => {
      setSuccess('장바구니에 제품이 추가되었습니다.');
      setTimeout(() => {
        setSuccess(null);
      }, 2000);
    });
    setCartNum((prev) => prev + 1);
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
          <Button onClick={() => window.alert('준비중입니다.')}>
            BUY IT NOW
          </Button>
          {user && (
            <Button type='white' onClick={handleClick}>
              CART
            </Button>
          )}
          {success && <p className='success_text'>{success}</p>}
        </div>
      </div>
    </div>
  );
}
