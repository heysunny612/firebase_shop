import styles from './Navbar.module.css';
import { FaStore, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import User from './User/User';
import { useUserContext } from '../../context/UserContext';

export default function Navbar() {
  const { user, login, logout } = useUserContext();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to='/'>
          <FaStore /> Sunny SideUp
        </Link>
      </h1>
      <nav className={styles.nav}>
        <Link to='/products'>Products </Link>
        {user && user.isAdmin && (
          <Link to='/'>
            <FaPen />
          </Link>
        )}
        {user && <Link to='/cart'>Carts </Link>}
        <button className={styles.loginBtn} onClick={!user ? login : logout}>
          {!user ? 'Login' : 'Logout'}
        </button>
        {user && <User user={user} />}
      </nav>
    </header>
  );
}
