import React from 'react';
import styles from './User.module.css';
export default function User({ user: { displayName, email, photoURL } }) {
  return (
    <div className={styles.user}>
      <div>
        <img src={photoURL} alt={displayName} />
      </div>
      <div>
        <span>{displayName}</span>
        <span> {email}</span>
      </div>
    </div>
  );
}
