import { createContext } from "react";
import { useUserContext } from "./UserContext";
import { getCartItems } from "../api/firebase";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const { uid } = useUserContext();
  const { isLoading, data: cartItems } = useQuery(["cart"], () =>
    getCartItems(uid)
  );
  console.log(isLoading);
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
