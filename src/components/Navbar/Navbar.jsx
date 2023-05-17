import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { FaStore, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../../api/firebase';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const handleLogin = async () => {
    login().then(setUser);
  };
  const handleLogout = async () => {
    logout().then(setUser);
  };

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to='/'>
          <FaStore /> Sunny SideUp
        </Link>
      </h1>
      <nav className={styles.nav}>
        <Link to='/products'>Products </Link>
        <Link to='/'>
          <FaPen />
        </Link>
        <Link to='/cart'>Carts </Link>
        <button onClick={!user ? handleLogin : handleLogout}>
          {!user ? 'Login' : 'Logout'}
        </button>
        {user && (
          <div>
            {user.displayName} {user.email}
            <img src={user.photoURL} alt={user.displayName} />
          </div>
        )}
      </nav>
    </header>
  );
}
