import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function Carousels() {
  return (
    <Carousel autoPlay showArrows={true}>
      <div>
        <img
          alt=''
          src='https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg'
        />
        <p className='legend'>Legend 1</p>
      </div>
      <div>
        <img
          alt=''
          src='https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg'
        />
        <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img
          alt=''
          src='https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg'
        />
        <p className='legend'>Legend 3</p>
      </div>
    </Carousel>
  );
}
