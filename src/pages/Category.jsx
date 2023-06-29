import React from 'react';
import Product from '../components/Product/Product';
import { useParams } from 'react-router-dom';

export default function Category() {
  const { category } = useParams();
  return (
    <section className='common_inner'>
      <h2 className='main'>{category}</h2>
      <Product filter={category} />
    </section>
  );
}
