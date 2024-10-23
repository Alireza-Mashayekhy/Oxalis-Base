import { SFC } from "@/types";
import * as S from "./Styles";
import { ChangeEvent, useState } from "react";
import TextField_n2 from "@/components/textfield/TextFiled2";
import { DateObject } from "react-multi-date-picker";
// import PersianDatePicker from "@/components/datePicker";

const goldenObjects = [
  {
    label: "YTM",
    firstInputName: "ytmStart",
    secondInputName: "ytmEnd",
    firstInputIcon: "",
    secondInputIcon: "",
    type: "text",
  },
  {
    label: "مبلغ سرمایه‌گذاری",
    firstInputName: "invertAmountStart",
    secondInputName: "invertAmountEnd",
    firstInputIcon: "",
    secondInputIcon: "",
    type: "text",
  },
  {
    label: "تاریخ خرید",
    firstInputName: "buyDateStart",
    secondInputName: "buyDateEnd",
    firstInputIcon: "",
    secondInputIcon: "",
    type: "date",
  },
];

const GoldenOpportunity: SFC = () => {
  const [formValues, setFormValues] = useState({
    ytmStart: "",
    ytmEnd: "",
    invertAmountStart: "",
    invertAmountEnd: "",
    buyDateStart: new DateObject(),
    buyDateEnd: new DateObject(),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeDate = (e: DateObject, name: string) => {
    setFormValues((prevState) => ({ ...prevState, [name]: e.unix * 1000 }));
  };

  return (
    <S.Container>
      {/* {goldenObjects.map((item, index) => (
        <S.FlexContainer key={index}>
          <div>{item.label}</div>
          <div>
            {item.type === "text" ? (
              <TextField_n2
                adornmenLabel={item.label === "YTM" ? "%" : "میلیارد ریال"}
                name={item.firstInputName}
                value={formValues[item.firstInputName]}
                onChange={handleChange}
              />
            ) : (
              <PersianDatePicker
                name={item.firstInputName}
                value={formValues[item.firstInputName]}
                onChange={(e) => handleChangeDate(e, item.firstInputName)}
              />
            )}
          </div>
          <div>
            {item.type === "text" ? (
              <TextField_n2
                adornmenLabel={item.label === "YTM" ? "%" : "میلیارد ریال"}
                name={item.secondInputName}
                value={formValues[item.secondInputName]}
                onChange={handleChange}
              />
            ) : (
              <PersianDatePicker
                name={item.secondInputName}
                value={formValues[item.secondInputName]}
                onChange={(e) => handleChangeDate(e, item.secondInputName)}
              />
            )}
          </div>
        </S.FlexContainer>
      ))}
      <S.ButtonContainer>
        <S.Button>
          <span>فعال کردن هشدار لحظه‌ای</span>
          <span>
            <S.RotatingIcon />
          </span>
        </S.Button>
      </S.ButtonContainer> */}
    </S.Container>
  );
};
export default GoldenOpportunity;
