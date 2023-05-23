import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { getCartFromFirebase } from '../api/firebase';
import CartItem from '../components/CartItem/CartItem';
import '../stylesheets/pages/MyCart.scss';

export default function MyCart() {
  const { user } = useUserContext();
  const [cartProducts, setCartProdcuts] = useState([]);
  const getCartProducts = () => {
    getCartFromFirebase(user).then((products) => {
      setCartProdcuts(products);
    });
  };
  useEffect(() => {
    user && getCartProducts();
  }, [user]);
  return (
    <div className='common_inner'>
      <h2>My Cart</h2>
      <ul className='mycart_items'>
        {cartProducts.map((product) => (
          <CartItem key={product.id} products={product} />
        ))}
      </ul>
    </div>
  );
}
