import { SFC } from "@/types";
import * as S from "./Styles";
import { useState } from "react";
// import { DateObject } from "react-multi-date-picker";
// import PersianDatePicker from "@/components/datePicker";
import TextField_n2 from "@/components/textfield/TextFiled2";

const PriceCalculations: SFC = () => {
  // this state can change when the whole front logic developed
  // const [buyDate, setBuyDate] = useState(new DateObject());
  const [ytm, setYtm] = useState("");

  return (
    <>
      {/* <S.OuterFlexContainer>
        <S.RightContainer>
          <S.InnerFlexContanier>
            <div>قیمت خرید</div>
            <div>
              <TextField_n2
                value={ytm}
                onChange={(e) => setYtm(e.target.value)}
                adornmenLabel="ریال"
              />
            </div>
          </S.InnerFlexContanier>
          <S.InnerFlexContanier>
            <div>تاریخ خرید</div>
            <div>
              <PersianDatePicker
                name="buyDate"
                value={buyDate}
                onChange={(e: DateObject) =>
                  setBuyDate(new DateObject(e.unix * 1000))
                }
              />
            </div>
          </S.InnerFlexContanier>

          <S.InnerFlexContanier>
            <div></div>
            <div>
              <S.Button>تایید</S.Button>
            </div>
          </S.InnerFlexContanier>
        </S.RightContainer>

        <S.LeftContainer>
          <S.BoldBlue>قیمت خرید</S.BoldBlue>
          <S.BoldWhite> 1,020,000 ریال </S.BoldWhite>
          <div>
            <S.BoldSpan>تاریخ سررسید : </S.BoldSpan>
            <S.BoldSpan>1402/10/02</S.BoldSpan>
          </div>
        </S.LeftContainer>
      </S.OuterFlexContainer> */}
    </>
  );
};
export default PriceCalculations;
