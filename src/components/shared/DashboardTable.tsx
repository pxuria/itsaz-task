import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dashboardTableHeaders } from "@/constants";
import { IProducts } from "@/types";
import { LuTrash2 } from "react-icons/lu";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  products: IProducts[];
  error: Error | null;
  isLoading: boolean;
}

const DashboardTable = ({ products, error, isLoading }: Props) => {
  console.log(products);
  if (isLoading) return <LoadingSpinner color="#F67C2D" loading={isLoading} />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-[#1E1E6E]! h-16">
          {dashboardTableHeaders.map((item, index) => (
            <TableHead className="" key={index}>
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody className="max-h-[50vh]">
        {products.map((item: IProducts, index: number) => (
          <TableRow key={index} className="h-16 w-full even:bg-[#E8E8E8]!">
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.brand || "-"}</TableCell>
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
