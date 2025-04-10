import { useCategories } from "@/hooks/useCategory";
import SelectBox from "./SelectBox";

interface FilterProps {
  handleClearFilter: () => void;
  handleApplyFilter: () => void;
  selectedCategory: string | null;
  setSelectedCategory: (value: string) => void;
}

const DashboardFilter = ({
  handleClearFilter,
  handleApplyFilter,
  selectedCategory,
  setSelectedCategory,
}: FilterProps) => {
  const { data, error, isLoading } = useCategories();

  return (
    <>
      <SelectBox
        placeholder="انتخاب دسته بندی"
        label="دسته بندی"
        value={selectedCategory || ""}
        onValueChange={(value) => setSelectedCategory(value as string)}
        data={data}
        error={error}
        isLoading={isLoading}
      />

      <div className="flex items-center flex-wrap w-full md:w-fit lg:flex-nowrap gap-2">
        <button
          type="button"
          onClick={handleApplyFilter}
          className="text-white text-base text-nowrap font-semibold bg-[#FF7B2D] py-2 px-6 rounded w-full md:min-w-[250px] text-center cursor-pointer"
        >
          اعمال فیلتر
        </button>

        <button
          type="button"
          onClick={handleClearFilter}
          className="text-white text-base text-nowrap font-semibold bg-[#FF4040] py-2 px-6 rounded w-full md:min-w-[80px] text-center cursor-pointer"
        >
          حذف فیلتر
        </button>
      </div>
    </>
  );
};

export default DashboardFilter;
