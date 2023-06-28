import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="common_inner">
        <div className={styles.footer_info}>
          <article>
            <h3>ABOUT US</h3>
            <p>
              company. (주)써니샤피 owner. 황수연 personal info manager. 황수연
            </p>
            <p>
              email. sunnyshoppy@sunnyshoppy.co.kr business no. 123-45-67890
              mail order license.
            </p>
            <p>
              2023-서울서초-1111 [사업자정보확인] address. [00000] 서울특별시
              중구
            </p>
            <p>장충단로1길 2 (을지로6가) </p>
          </article>
          <article>
            <h3>CUSTOMER CENTER</h3>
            <p>mon - fri am10:00 - pm5:30</p>
            <p>lunch pm12:00-pm1:00</p>
            <p>sat, sun, holiday off</p>
          </article>
          <article>
            <h3>BANK ACCOUNT</h3>
            <p>기업 986-016196-04-015</p>
            <p>예금주:주식회사 이로아</p>
          </article>
          <article>
            <h3>SHOP INFO</h3>
            <p>회사소개</p>
            <p>이용약관안내</p>
            <p>개인정보취급방침</p>
            <p>이용안내</p>
          </article>
        </div>
      </div>
      <div className={styles.copyright}>
        copyright © 써니샤피 all rights reserved / published by sunny dev
      </div>
    </footer>
  );
}
