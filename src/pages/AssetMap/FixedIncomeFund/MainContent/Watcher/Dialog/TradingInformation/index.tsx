import { SFC } from "@/types";
import * as S from "./Styles";
import PrimeReactTable from "@/components/DataTable/PrimeReactTable";

const symbolInfofirstColumn = [
  { label: "تعداد معاملات", value: 0, type: "number" },
  { label: "حجم مبنا", value: 1, type: "number" },
  { label: "حجم معاملات", value: 0, type: "number" },
  { label: "ارزش معاملات", value: 0, type: "number" },
];
const symbolInfoSecondColumn = [
  { label: "قیمت پایانی", value: 993800, type: "number" },
  { label: "YTM", value: 18.76, type: "percentage" },
  { label: "آخرین قیمت", value: 993800, type: "number" },
  { label: "YTM", value: 18.76, type: "percentage" },
];
const sampleDate = [{ number: 2, volumn: 2, ytm: 2, price: 2000 }];
const tableHeaders1 = [
  { header: "تعداد", field: "number", body: "number" },
  { header: "حجم", field: "volumn", body: "number" },
  { header: "YTM", field: "ytm" },
  { header: "قیمت", field: "price", body: "number" },
];

const tableHeaders2 = [
  { header: "قیمت", field: "price", body: "number" },
  { header: "YTM", field: "ytm" },
  { header: "حجم", field: "volumn", body: "number" },
  { header: "تعداد", field: "number", body: "number" },
];
const TrandingInformation: SFC = () => {
  return (
    <S.Container>
      <S.TitleContainer>اطلاعات نماد</S.TitleContainer>
      <S.OutterFlexContainer>
        <S.InnerFlexContainer>
          {symbolInfofirstColumn.map((item, index) => (
            <S.EachRowFlexContainer key={index}>
              <div>{item.label}</div>
              <div>{item.value.toLocaleString()}</div>
            </S.EachRowFlexContainer>
          ))}
        </S.InnerFlexContainer>

        <S.InnerFlexContainer>
          {symbolInfoSecondColumn.map((item, index) => (
            <S.EachRowFlexContainer key={index}>
              <div>{item.label}</div>
              <div>
                {item.type === "number"
                  ? item.value.toLocaleString()
                  : item.value + " " + "%"}
              </div>
            </S.EachRowFlexContainer>
          ))}
        </S.InnerFlexContainer>
      </S.OutterFlexContainer>

      <S.TitleContainer>تابلو</S.TitleContainer>

      <S.OutterFlexContainer>
        <S.InnerFlexContainer>
          <span>عرضه</span>         
          <PrimeReactTable
            columns={tableHeaders1}
            data={sampleDate}
            withRowNumber={false}
          />
        </S.InnerFlexContainer>

        <S.InnerFlexContainer>
          <span>تقاضا</span>         
          <PrimeReactTable columns={tableHeaders2} data={sampleDate} withRowNumber={false} />
        </S.InnerFlexContainer>
      </S.OutterFlexContainer>
    </S.Container>
  );
};
export default TrandingInformation;
