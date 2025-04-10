import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  label?: string;
  placeholder: string;
  value: string;
  data: string[];
  isLoading?: boolean;
  error?: Error | null;
  triggerClass?: string;
  onValueChange: (value: string | number) => void;
}

const SelectBox = ({
  label,
  placeholder,
  value,
  onValueChange,
  data,
  triggerClass = "w-[220px]",
  isLoading,
  error,
}: Props) => {
  if (isLoading) return <LoadingSpinner color="#F67C2D" loading={isLoading} />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-[#3C3D45] text-nowrap">
          {label}
        </label>
      )}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={triggerClass}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {data.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBox;
