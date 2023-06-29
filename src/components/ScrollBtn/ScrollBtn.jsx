import React from 'react';
import styles from './ScrollBtn.module.css';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ScrollBtn() {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const threshold = 200;
    scrollTop > threshold ? setShowButton(true) : setShowButton(false);
  };
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleScrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <>
      {showButton ? (
        <div className={styles.scroll_btn}>
          <button onClick={handleScrollToTop}>
            <AiOutlineArrowUp />
          </button>
          <button>
            <AiOutlineArrowDown onClick={handleScrollToBottom} />
          </button>
        </div>
      ) : null}
    </>
  );
}
