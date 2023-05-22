import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../stylesheets/pages/Home.scss';
import Carousels from '../components/Carousels/Carousels';
import Product from '../components/Product/Product';

export default function Home() {
  return (
    <>
      <Carousels />
      <h2 className='main'> NEW ARRIVALS</h2>
      <Product />
    </>
  );
}
