import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartNum, setCartNum] = useState(0);

  return (
    <CartContext.Provider value={{ cartNum, setCartNum }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
