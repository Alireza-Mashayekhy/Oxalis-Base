import { v4 as uuidv4 } from "uuid";

import { SFC } from "@/types";

import * as S from "./Styles";

interface StockTypeBtn {
  selectedButtons: boolean[];
  handleButtonClick: (index: number) => void;
  buttonPerLine: number;
  btnLabels: {
    label: string;
    index: number;
    action: string;
  }[];
}
const BondPaperTypesButtons: SFC<StockTypeBtn> = ({
  selectedButtons,
  handleButtonClick,
  btnLabels,
  buttonPerLine,
}) => {
  return (
    <S.Container buttonPerLine={buttonPerLine}>
      {btnLabels.map((btn, index) => (
        <S.Button
          key={uuidv4()}
          isSelected={selectedButtons[index] === true}
          onClick={() => handleButtonClick(index)}
        >
          {btn.label}
        </S.Button>
      ))}
    </S.Container>
  );
};

export default BondPaperTypesButtons;
