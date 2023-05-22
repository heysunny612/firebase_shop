import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { logout } from '../../api/firebase';

export default function Navbar() {
  const { user } = useUserContext();
  return (
    <header className={styles.header}>
      <div className={styles.top_bar_wrap}>
        <div className={styles.top_bar}>
          <div className={styles.mode}>
            <button>Dark Mode</button>
          </div>
          <div className={styles.user_info}>
            {user && (
              <>
                {user.isAdmin && <Link to='/products/new'>[상품등록]</Link>}
                환영합니다.
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
          <Link to='/'>Sunny React Shop</Link>
        </h1>
        <nav>
          <ul className={styles.nav}>
            <li>All Products</li>
            <li>Clothing</li>
            <li>Acc</li>
          </ul>
        </nav>
        <div className={styles.my_nav}>
          <button>Search</button>
          <button>
            <Link to='/cart'>
              Cart <span className={styles.cart_num}>5</span>
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
