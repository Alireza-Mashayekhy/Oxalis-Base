import { SFC } from "@/types";
import * as S from "./Styles";
import { useState } from "react";
import CashFlowBtn from "./CashFlowBtn";
import SuggestionBtn from "./SuggestionBtn";

const CashFlowCalculation: SFC = () => {
  const [cashFlowState, setCashFlowState] = useState(0);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Button
          isSelected={cashFlowState === 0}
          onClick={() => setCashFlowState(0)}
        >
          جریان نقدی بر اساس پورتفوی اوراق
        </S.Button>
        <S.Button
          isSelected={cashFlowState === 1}
          onClick={() => setCashFlowState(1)}
        >
          پیشنهاد پورتفوی اوراق بر اساس جریان نقدی
        </S.Button>
      </S.HeaderContainer>
      {cashFlowState === 0 ? <CashFlowBtn /> : <SuggestionBtn />}
    </S.Container>
  );
};
export default CashFlowCalculation;
