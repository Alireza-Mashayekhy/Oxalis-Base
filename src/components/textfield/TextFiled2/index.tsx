import { fonts } from "@/styles";
import { SFC } from "@/types";
import { InputAdornment } from "@mui/material";
import * as S from "./Styles";

interface TextFieldProps {
  name?: string;
  adornmenLabel?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField_n2: SFC<TextFieldProps> = ({
  name,
  adornmenLabel,
  value,
  onChange,
}) => {
  return (
    <S.TextField
      fullWidth
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <S.Span
              style={{
                fontFamily: `${fonts.family.default}`,
                fontSize: `${fonts.size.s}`,
                fontWeight: `${fonts.weight.semiBold}`,
              }}
            >
              {adornmenLabel}
            </S.Span>
          </InputAdornment>
        ),
      }}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default TextField_n2;
