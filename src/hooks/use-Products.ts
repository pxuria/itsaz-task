import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";

const fetchProducts = async () => {
  const { data } = await axiosInstance.get("products?limit=20&skip=20");
  return data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
