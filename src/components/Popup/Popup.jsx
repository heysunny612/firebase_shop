import React from 'react';
import styles from './Popup.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Popup() {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    const isPopupHidden = localStorage.getItem('hidePopup');
    if (isPopupHidden) {
      const hidePopupTime = new Date(isPopupHidden);
      const currentTime = new Date();
      if (currentTime < hidePopupTime) {
        setShowPopup(false);
      }
    }
  }, []);
  const handleHidePopup = () => {
    const currentTime = new Date();
    const hidePopupTime = new Date(currentTime.getTime() + 24 * 60 * 60 * 1000);
    localStorage.setItem('hidePopup', hidePopupTime);
    setShowPopup(false);
  };
  return (
    <>
      {showPopup ? (
        <article className={styles.popup}>
          <img
            src='https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            alt='팝업이미지'
            width='700'
          />
          <div className={styles.content}>
            <p className={styles.text}>
              2021.10.31 이후 유선 상담 서비스 종료로 통화연결이 불가한 점 양해
              부탁드립니다. 감사합니다.
            </p>
            <button className={styles.button} onClick={handleHidePopup}>
              오늘 하루 안보기
            </button>
          </div>
        </article>
      ) : null}
    </>
  );
}
