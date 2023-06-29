import React from 'react';
import '../stylesheets/pages/Search.scss';
import Product from '../components/Product/Product';
import useProducts from '../hooks/useProducts';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ProductCard from '../components/Product/ProductCard/ProductCard';

export default function Search() {
  const {
    productsQuery: { data: products },
  } = useProducts();
  const [searchItems, setSearchItems] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!data.title && !data.low && !data.high) {
      setSearchItems([]);
      return;
    }

    const filteredProducts = products.filter((product) => {
      const isTitleMatch = !data.title || product.title.includes(data.title);
      const isPriceMatch =
        (!data.low || data.low <= product.price) &&
        (!data.high || product.price <= data.high);

      return isTitleMatch && isPriceMatch;
    });

    setSearchItems(filteredProducts);
  };

  return (
    <section className='common_inner'>
      <h2 className='main'>ITEM SEARCH</h2>
      <form className='search_box' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='title'>상품명</label>
          <input type='text' id='title' {...register('title')} />
        </div>
        <div>
          <label htmlFor='price'>판매가격대</label>
          <input type='text' id='price' {...register('low')} />
          <span> ~ </span>
          <input type='text' id='price' {...register('high')} />
        </div>
        <div>
          <button type='submit'>검색</button>
        </div>
      </form>
      <p className='search_count'>
        총 {searchItems.length}개의 상품이 검색되었습니다.
      </p>
      {searchItems.length > 0 ? (
        <Product searchItem={searchItems} />
      ) : (
        <p className='no_result'>
          검색결과가 없습니다. <br />
          정확한 검색어 인지 확인하시고 다시 검색해 주세요.
        </p>
      )}
    </section>
  );
}
