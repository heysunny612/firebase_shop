import React, { useState } from 'react';
import '../stylesheets/pages/NewProducts.scss';
import Button from '../components/Button/Button';
import { uploadImageCloudinary } from '../api/cloudinary';
import useProducts from '../hooks/useProducts';

export default function NewProducts() {
  const [file, setFile] = useState();
  const [product, setProduct] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImageCloudinary(file)
      .then((imgURL) => {
        addProduct.mutate(
          { product, imgURL },
          {
            onSuccess: () => {
              setSuccess('성공적으로 제품이 업로드 되었습니다.');
              setTimeout(() => {
                setSuccess(null);
              }, 2000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
    setProduct({});
  };
  return (
    <div className='new_product_wrap'>
      <h2>새로운 제품 등록</h2>
      {file && (
        <div className='product_img'>
          <img src={URL.createObjectURL(file)} alt='미리보기 사진' />
        </div>
      )}
      <form onSubmit={handleSubmit} className='new_product_form'>
        <input
          type='file'
          name='file'
          accept='image/*'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          onChange={handleChange}
          placeholder='제품명'
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          onChange={handleChange}
          placeholder='가격'
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          onChange={handleChange}
          placeholder='카테고리'
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          onChange={handleChange}
          placeholder='제품 설명'
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          onChange={handleChange}
          placeholder='옵션(콤마(,)로 구분)'
        />
        <Button disabled={isUploading}>
          {isUploading ? '업로드중...' : '제품 등록하기'}
        </Button>
      </form>
      {success && <p className='success_text'>{success}</p>}
    </div>
  );
}
