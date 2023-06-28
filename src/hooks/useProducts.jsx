import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNewProduct, getProducts } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();
  //데이터 읽어오기
  const productsQuery = useQuery(["products"], getProducts, {
    staleTime: 1000 * 60,
  });

  //데이터 업데이트
  const addProduct = useMutation(
    ({ product, url }) => createNewProduct(product, url),
    { onSuccess: () => queryClient.invalidateQueries(["products"]) }
  );

  return { productsQuery, addProduct };
}
