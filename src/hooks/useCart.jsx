import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getCartFromFirebase,
  removeFromCart,
  uploadCartFirebase,
} from '../api/firebase';
import { useUserContext } from '../context/UserContext';

console.log('hello');
export default function useCart() {
  const { user, uid } = useUserContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(
    ['carts', user || ''],
    () => getCartFromFirebase(uid),
    {
      enabled: !!uid,
    }
  );

  const addOrUpdateItem = useMutation(
    (product) => {
      uploadCartFirebase(uid, product);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['carts'], uid);
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['carts'], uid);
      },
    }
  );

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(['carts'], uid),
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
