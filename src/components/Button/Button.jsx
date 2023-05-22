import React from 'react';
import styles from './Button.module.css';

export default function Button({ type, disabled, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${type && styles[type]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
