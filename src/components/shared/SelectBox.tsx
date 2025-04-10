import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  data: string[];
  isLoading?: boolean;
  error?: Error | null;
  onValueChange: (value: string | number) => void;
}

const SelectBox = ({
  label,
  placeholder,
  value,
  onValueChange,
  data,
  isLoading,
  error,
}: Props) => {
  if (isLoading) return <LoadingSpinner color="#F67C2D" loading={isLoading} />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {data.map((item, index) => (
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
