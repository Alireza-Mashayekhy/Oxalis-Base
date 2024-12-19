import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

import { SFC } from "@/types";

interface PrimeDropdown {
  value: string;
  onChange: (event: DropdownChangeEvent) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  filter?: boolean;
  editable?: boolean;
}

const PrimeDropdown: SFC<PrimeDropdown> = ({
  value,
  onChange,
  options,
  placeholder,
  filter,
  editable,
}) => {
  return (
    <Dropdown
      value={value}
      onChange={onChange}
      options={options}
      optionLabel="label"
      editable={editable}
      filter={filter}
      placeholder={placeholder}
    />
  );
};
export default PrimeDropdown;
