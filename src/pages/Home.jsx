import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../stylesheets/pages/Home.scss';
import Carousels from '../components/Carousels/Carousels';
import Product from '../components/Product/Product';
import Popup from '../components/Popup/Popup';

export default function Home() {
  return (
    <>
      <Popup />
      <Carousels />
      <section className='common_inner'>
        <h2 className='main'> NEW ARRIVALS</h2>
        <Product filter='all' />
      </section>
    </>
  );
}
