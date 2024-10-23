import { SFC } from "@/types";
import * as S from "./Styles";
import SpecificationOfTheBonds from "./SpecificationOfTheBonds";
import YTMHistory from "./YTMHistory";
import TradingHistory from "./TradingHistory";
import TrandingInformation from "./TradingInformation";

interface FixedIncomeFundMarket {
  selectedRow: any;
  buttonNo: number;
  setButtonNo: (value: number) => void;
}

const FixedIncomeFundMarketDialog: SFC<FixedIncomeFundMarket> = ({
  selectedRow,
  buttonNo,
  setButtonNo,
}) => {
  return (
    <>
      <S.ButtonContainer>
        <S.Button onClick={() => setButtonNo(1)}>مشخصات اوراق</S.Button>
        <S.Button onClick={() => setButtonNo(2)}>اطلاعات معاملات</S.Button>
        <S.Button onClick={() => setButtonNo(3)}>تاریخچه معاملات</S.Button>
        <S.Button onClick={() => setButtonNo(4)}>تاریخچه YTM</S.Button>
      </S.ButtonContainer>
      {buttonNo === 1 && <SpecificationOfTheBonds selectedRow={selectedRow} />}
      {buttonNo === 2 && <TrandingInformation />}
      {buttonNo === 3 && <TradingHistory />}
      {buttonNo === 4 && <YTMHistory />}
    </>
  );
};
export default FixedIncomeFundMarketDialog;
