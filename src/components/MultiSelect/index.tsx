import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";

import { SFC } from "@/types";
interface PMultiSelect {
  value: string[];
  onChange: (e: MultiSelectChangeEvent) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
}

const PrimeMultiSelect: SFC<PMultiSelect> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <MultiSelect
      value={value}
      onChange={onChange}
      options={options}
      optionLabel="label"
      filter
      placeholder={placeholder}
      maxSelectedLabels={2}
      selectedItemsLabel="بیش از 2 مورد انتخاب شده است"
      emptyFilterMessage="موردی یافت نشد"
    />
  );
};

export default PrimeMultiSelect;
