import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LuTrash2 } from "react-icons/lu";

interface PopupProps {
  openPopoverId: number | null;
  itemId: number;
  setOpenPopoverId: (val: number | null) => void;
}

const DashboardPopover = ({
  openPopoverId,
  itemId,
  setOpenPopoverId,
}: PopupProps) => {
  return (
    <Popover
      open={openPopoverId === itemId}
      onOpenChange={(open) => setOpenPopoverId(open ? itemId : null)}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          className="bg-[rgb(255,64,64,0.3)] p-2 rounded w-fit cursor-pointer"
        >
          <LuTrash2 className="w-4 h-4 text-[#FF4040]" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="max-w-[90%] relative overflow-hidden border-0">
        <div className="absolute bg-[#FF4040] w-full top-0 left-0 h-1" />
        <h4 className="text-base text-[#54555D] text-center font-medium">
          آیا از حذف محصول {itemId} اطمینان دارید؟
        </h4>

        <div className="flex_center flex-nowrap gap-2 mt-3">
          <button
            className="cursor-pointer rounded text-sm text-nowrap font-medium py-1 px-4 text-white bg-[#AEAEB1]"
            type="button"
            onClick={() => setOpenPopoverId(null)}
          >
            انصراف
          </button>
          <button
            className="cursor-pointer rounded text-sm text-nowrap font-medium py-1 px-4 text-white bg-[#FF4040]"
            type="button"
          >
            حذف
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DashboardPopover;
