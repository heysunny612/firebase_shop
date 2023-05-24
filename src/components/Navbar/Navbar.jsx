import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { logout } from '../../api/firebase';
import { useState } from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useCartContext } from '../../context/CartContext';
import { useEffect } from 'react';
import { getCartFromFirebase } from '../../api/firebase';

export default function Navbar() {
  const { user, uid } = useUserContext();
  const { cartNum, setCartNum } = useCartContext();
  const [toggleBtn, setToggleBtn] = useState(false);
  const closeToggleMenu = () => setToggleBtn(false);
  useEffect(() => {
    uid &&
      getCartFromFirebase(uid).then((products) => {
        setCartNum(products ? products.length : 0);
      });
  }, [uid, setCartNum]);
  return (
    <header className={styles.header}>
      <div className={styles.top_bar_wrap}>
        <div className={styles.top_bar}>
          <div className={styles.mode}>
            <button>
              <MdDarkMode /> <MdLightMode />
            </button>
          </div>
          <div className={styles.user_info}>
            {user && (
              <>
                {user.isAdmin && <Link to='/products/new'>[상품등록]</Link>}
                <span className={styles.user_txt}>환영합니다.</span>
                <span>{user.displayName || user.email}</span>님
                <button onClick={logout}>Logout</button>
              </>
            )}
            {!user && (
              <>
                로그인하고 더 많은 것을 즐겨보세요!
                <button>
                  <Link to='/login'>Login</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link to='/' onClick={closeToggleMenu}>
            Sunny React Shop
          </Link>
        </h1>
        <ul
          className={
            toggleBtn ? `${styles.nav} ${styles.active}` : `${styles.nav}`
          }
        >
          <li>
            <Link to='/'>All Products</Link>
          </li>
          <li>
            <Link to='/'>Clothing</Link>
          </li>
          <li>
            <Link to='/'>Acc</Link>
          </li>
        </ul>
        <div
          className={
            toggleBtn ? `${styles.my_nav} ${styles.active}` : `${styles.my_nav}`
          }
        >
          <button>Search</button>
          <button>
            <Link to='/cart'>
              Cart
              <span className={styles.cart_num}>{user ? `${cartNum}` : 0}</span>
            </Link>
          </button>
        </div>
        <button
          className={styles.toggle_button}
          onClick={() => setToggleBtn(!toggleBtn)}
        >
          {toggleBtn ? <GrClose /> : <GrMenu />}
        </button>
      </div>
    </header>
  );
}
