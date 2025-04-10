import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import LoadingSpinner from "./LoadingSpinner";
import DashboardPopover from "./DashboardPopover";
import { IProducts } from "@/types";
import { dashboardTableHeaders } from "@/constants";

interface Props {
  products: IProducts[];
  error: Error | null;
  isLoading: boolean;
}

const DashboardTable = ({ products, error, isLoading }: Props) => {
  const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);
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
              <DashboardPopover
                openPopoverId={openPopoverId}
                itemId={Number(item.id)}
                setOpenPopoverId={setOpenPopoverId}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashboardTable;
