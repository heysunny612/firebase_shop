import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addCart, deleteCartItem, getCartItems } from "../api/firebase";
import { useUserContext } from "../context/UserContext";

export default function useCart() {
  const { uid } = useUserContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(["cart", uid || ""], () => getCartItems(uid), {
    enabled: !!uid, //uid가 없는 경우, 쿼리가 수행되지 않도록함
  });

  const updateCart = useMutation((cartItem) => addCart(uid, cartItem), {
    onSuccess: () => queryClient.invalidateQueries(["cart", uid]),
  });

  const removeCart = useMutation((id) => deleteCartItem(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(["cart", uid]),
  });
  return { cartQuery, updateCart, removeCart };
}
