import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useProducts } from "@/hooks/use-Products";
import { IProducts } from "@/types";
import { LuTrash2 } from "react-icons/lu";

const DashboardTable = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#1E1E6E]! h-16">
          <TableHead className="">ردیف</TableHead>
          <TableHead className="">نام</TableHead>
          <TableHead className="">دسته بندی</TableHead>
          <TableHead className="">قیمت</TableHead>
          <TableHead className="">برند</TableHead>
          <TableHead className="">حذف کردن</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.products.map((item: IProducts, index: number) => (
          <TableRow key={item._id} className="h-16 w-full">
            <TableCell className="">{index + 1}</TableCell>
            <TableCell className="">{item.title}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.brand}</TableCell>
            <TableCell className="flex_center">
              <button
                type="button"
                className="bg-[rgb(255,64,64,0.3)] p-2 rounded w-fit cursor-pointer"
              >
                <LuTrash2 className="w-4 h-4 text-[#FF4040]" />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashboardTable;
