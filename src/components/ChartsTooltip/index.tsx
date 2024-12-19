import { SFC } from "@/types";

import * as S from "./Styles";

interface ChTooltip {
  tooltipType: number;
  label: string;
  value: number | string;
  label2?: string;
  value2?: number | string;
  label3?: string;
  value3?: number | string;
}

const ChartsTooltip: SFC<ChTooltip> = ({
  tooltipType,
  label,
  value,
  label2,
  value2,
  label3,
  value3,
}) => {
  return (
    <>
      {tooltipType === 1 && (
        <S.Container>
          <S.TitleText>{label} </S.TitleText>
          <S.Value>{value}</S.Value>
        </S.Container>
      )}
      {tooltipType === 2 && (
        <S.SecondContainer>
          <S.FlexContainer>
            <div>{label}</div>
            <div> : {value}</div>
          </S.FlexContainer>
          <div> {label2}</div>
          <div>{value2}</div>
        </S.SecondContainer>
      )}
      {tooltipType === 3 && (
        <S.ThirdContainer>
          <S.FlexContainer>
            <div>{label}</div>
            <div> : {value}</div>
          </S.FlexContainer>
          <S.FlexContainer>
            <div>{label2}</div>
            <div> : {value2}</div>
          </S.FlexContainer>
          <S.FlexContainer>
            <div>{label3}</div>
            <div> : {value3}</div>
          </S.FlexContainer>
        </S.ThirdContainer>
      )}
    </>
  );
};

export default ChartsTooltip;
