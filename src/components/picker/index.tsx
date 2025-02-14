import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface PickerProps {
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
    className?: string;
    children: React.ReactNode;
}

const Picker = ({className, value, placeholder, children, onChange}: PickerProps) => {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {children}
      </SelectContent>
    </Select>
  );
};

export default Picker;