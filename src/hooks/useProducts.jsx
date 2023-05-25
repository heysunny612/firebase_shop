import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProductFromFirebase, uploadProductFirebase } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();
  const productsQuery = useQuery(['products'], getProductFromFirebase, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, imgURL }) => uploadProductFirebase(product, imgURL),
    { onSuccess: () => queryClient.invalidateQueries(['products']) }
  );

  return { productsQuery, addProduct };
}
