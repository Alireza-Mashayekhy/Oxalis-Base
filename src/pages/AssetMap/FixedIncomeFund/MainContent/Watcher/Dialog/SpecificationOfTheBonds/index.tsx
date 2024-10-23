import { SFC } from "@/types";
import * as S from "./Styles";

const bondsTitlesFirstColumn = [
  { label: "نماد", name: "symbol" },
  { label: "بازار", name: "market" },
  { label: "صنعت", name: "industry" },
  { label: "زیرگروه صنعت", name: "sub_industry" },
  { label: "نام", name: "name" },
  { label: "نرخ سوداسمی", name: "nominal_interest_rate", type: "percent" },
  { label: "تعداد کل اوراق", name: "total_units", type: "number" },
  { label: "تعداد اوراق پذیرفته‌شده", name: "accepted_units", type: "number" },
  { label: "تاریخ سررسید", name: "maturity_date" },
  { label: "مواعد پرداخت سود", name: "interest_payment_schedule" },
  {
    label: "مبلغ اسمی هر ورقه",
    name: "nominal_amount_per_unit",
    type: "number",
  },
  { label: "مبلغ کل اوراق", name: "total_nominal_amount", type: "number" },
  { label: "مبلغ پذیرفته‌شده", name: "accepted_amount", type: "number" },
  { label: "تاریخ انتشار", name: "publish_date" },
  { label: "مدت(ماه)", name: "duration_months" },
  { label: "ناشر", name: "issuer" },
];
const bondsTitlesSecondColumn = [
  { label: "ناشر", name: "issuer" },
  { label: "متعهد پذیره‌نویسی", name: "subscription_guarantor" },
  { label: "ضامن", name: "guarantor" },
  { label: "عامل پرداخت سود", name: "interest_payment_agent" },
  { label: "بانی", name: "sponsor" },
  { label: "بازارگردان", name: "market_maker" },
  { label: "عامل فروش", name: "sales_agent" },
  { label: "حسابرس", name: "auditor" },
  { label: "وضعیت نماد", name: "symbol_status" },
  { label: "اجازه معاملات بلوک", name: "block_trade_permission" },
  { label: "موضوع", name: "subject" },
];

const SpecificationOfTheBonds: SFC = ({ selectedRow }) => {
  console.log(selectedRow);

  return (
    <S.Container>
      <S.OutterFlexContainer>
        {/*----------------------------------------------------------------------------------- */}
        {/* FIRST COLUMN */}
        {/*----------------------------------------------------------------------------------- */}
        <S.InnerFlexContainer>
          {selectedRow &&
            bondsTitlesFirstColumn.map((item, index) => (
              <S.EachRowFlexContainer key={index}>
                <div>{item.label}</div>
                <div>
                  {(item.type === "number" &&
                    selectedRow[item.name]?.toLocaleString()) ||
                    (item.type === "percent" &&
                      selectedRow[item.name] + " " + "درصد") ||
                    selectedRow[item.name]}
                </div>
              </S.EachRowFlexContainer>
            ))}
        </S.InnerFlexContainer>
        {/*----------------------------------------------------------------------------------- */}
        {/* FIRST COLUMN */}
        {/*----------------------------------------------------------------------------------- */}

        {/*----------------------------------------------------------------------------------- */}
        {/* Second COLUMN */}
        {/*----------------------------------------------------------------------------------- */}
        <S.InnerFlexContainer>
          {selectedRow &&
            bondsTitlesSecondColumn.map((item, index) => (
              <S.EachRowFlexContainer key={index}>
                <div>{item.label}</div>
                <div>{selectedRow[item.name]}</div>
              </S.EachRowFlexContainer>
            ))}
        </S.InnerFlexContainer>
        {/*----------------------------------------------------------------------------------- */}
        {/* Second COLUMN */}
        {/*----------------------------------------------------------------------------------- */}
      </S.OutterFlexContainer>
    </S.Container>
  );
};
export default SpecificationOfTheBonds;
