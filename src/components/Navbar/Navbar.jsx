import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';
import { logout } from '../../api/firebase';
import { useUserContext } from '../../context/UserContext';
import useCart from '../../hooks/useCart';

const category = [
  { name: 'All', path: 'all' },
  { name: 'Women', path: 'women' },
  { name: 'Men', path: 'men' },
  { name: 'Shoes', path: 'shoes' },
];

export default function Navbar() {
  const { user } = useUserContext();
  const [toggleBtn, setToggleBtn] = useState(false);
  const closeToggleMenu = () => setToggleBtn(false);
  const navigate = useNavigate();
  const {
    cartQuery: { data: cartItems },
  } = useCart();
  return (
    <header className={styles.header}>
      <div className={styles.top_bar_wrap}>
        <div className={styles.top_bar}>
          <div className={styles.user_info}>
            {user?.isAdmin && <Link to='/products/new'>[상품등록]</Link>}
            {user ? (
              <>
                <span className={styles.user_txt}>환영합니다.</span>
                <span>{user.displayName || user.email}</span>님
                <button onClick={() => logout()}>Logout</button>
              </>
            ) : (
              <>
                로그인하고 더 많은 것을 즐겨보세요!
                <button onClick={() => navigate('/login')}>Login</button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link to='/' onClick={closeToggleMenu}>
            Sunny Shoppy
          </Link>
        </h1>
        <ul
          className={
            toggleBtn ? `${styles.nav} ${styles.active}` : `${styles.nav}`
          }
        >
          {category.map(({ path, name }) => (
            <li key={name}>
              <Link
                to={`/products/${path}`}
                onClick={() => setToggleBtn(!toggleBtn)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={
            toggleBtn ? `${styles.my_nav} ${styles.active}` : `${styles.my_nav}`
          }
        >
          <button>
            <Link to='/search'> Search</Link>
          </button>
          {user && (
            <button>
              <Link to='/cart'>
                Cart
                {cartItems && (
                  <span className={styles.cart_num}>{cartItems.length}</span>
                )}
              </Link>
            </button>
          )}
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
