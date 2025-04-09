import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axiosInstance";

const fetchCategory = async () => {
  const { data } = await axiosInstance.get("/category");
  return data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategory,
  });
};
