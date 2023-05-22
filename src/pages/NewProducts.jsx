import React, { useRef, useState } from 'react';
import '../stylesheets/pages/NewProducts.scss';
import { writeNewProduct } from '../api/firebase';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryImage } from '@cloudinary/url-gen';

export default function NewProducts() {
  const [form, setForm] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    option: '',
  });
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    writeNewProduct(form);
    setForm({
      title: '',
      price: '',
      category: '',
      description: '',
      option: '',
    });
  };

  const handleImage = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    console.log(file);
    reader.onloadend = () => {
      const myImage = new CloudinaryImage(file, {
        cloudName: 'dazupkved',
      }).resize(fill().width(100).height(150));
      setImgFile(myImage);
    };
  };

  return (
    <div className='new_product_wrap'>
      <h2>새로운 제품 등록</h2>
      <img src={imgFile} alt='' width='300' />
      <form onSubmit={handleSubmit} className='new_product_form'>
        <input
          type='file'
          name=''
          placeholder='제품 사진'
          accept='image/*'
          onChange={handleImage}
          ref={imgRef}
        />
        <input
          type='text'
          name='title'
          value={form.title}
          onChange={handleChange}
          placeholder='제품명'
        />
        <input
          type='number'
          name='price'
          value={form.price}
          onChange={handleChange}
          placeholder='가격'
        />
        <input
          type='text'
          name='category'
          value={form.category}
          onChange={handleChange}
          placeholder='카테고리'
        />
        <input
          type='text'
          name='description'
          value={form.description}
          onChange={handleChange}
          placeholder='제품 설명'
        />
        <input
          type='text'
          name='option'
          value={form.option}
          onChange={handleChange}
          placeholder='옵션(콤마(,)로 구분)'
        />
        <button>등록</button>
      </form>
    </div>
  );
}
