import { SFC } from "@/types";

import * as S from "./Styles";

interface TextAreaInterface {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  disabled?: boolean;
}

const PrimeTextArea: SFC<TextAreaInterface> = ({
  value,
  onChange,
  rows,
  disabled = false,
}) => {
  return (
    <>
      <S.StyledText
        autoResize
        value={value}
        onChange={onChange}
        rows={rows}
        disabled={disabled}
      />
    </>
  );
};

export default PrimeTextArea;
