import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategories } from "@/hooks/useCategory";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  label: string;
  placeholder: string;
}

const SelectBox = ({ label, placeholder }: Props) => {
  const { data: selectItems, isLoading, error } = useCategories();

  if (isLoading) return <LoadingSpinner color="#F67C2D" loading={isLoading} />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {selectItems.map((item: string, index: number) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectBox;
