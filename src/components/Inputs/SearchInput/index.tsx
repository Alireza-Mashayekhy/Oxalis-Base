import { SFC } from '@/types';
import * as S from './Styles';
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
    placeholder = 'جستجو...',
}) => {
    return (
        <S.StyledInput
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
};

export default SearchInput;
