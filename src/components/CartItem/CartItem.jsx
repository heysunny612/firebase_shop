import React from 'react';

export default function CartItem({
  products: { title, price, imgURL, options },
}) {
  return (
    <li>
      <div>
        <div>
          <img src={imgURL} alt={title} width='100' />
        </div>
        <div>
          {title} <br />
          {options}
          {price}
        </div>
      </div>
    </li>
  );
}
