import { SFC } from "@/types";
import * as S from "./Styles";
// import { debounce } from "lodash";
// import { useCallback } from "react";
interface searchInputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  placeholder?: string;
}
const SearchInput: SFC<searchInputProps> = ({
  value,
  handleChange,
  handleKeyDown,
  placeholder = "جستجو...",
}) => {
  // if it was asked to handle search on valuechange
  // and not on enter key press use this solution

  // const debouncedHandleChange = useCallback(
  //   debounce((value) => {
  //     // Perform side effects here, like filtering or fetching data
  //     console.log("Debounced value:", value);
  //   }, 300),
  //   []
  // );

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setValue(value); // Update state immediately
  //   debouncedHandleChange(value); // Call debounced function
  // };

  return (
    <S.StyledInput
      placeholder={placeholder}
      // placeholder="🔍جستجو..."
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
