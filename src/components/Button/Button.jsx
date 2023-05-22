import React from 'react';
import styles from './Button.module.css';

export default function Button({ type, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${type && styles[type]}`}
    >
      {children}
    </button>
  );
}
