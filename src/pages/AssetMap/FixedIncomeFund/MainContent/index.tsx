import AccodionWrapper from "@/components/AccordionWrapper";
import { SFC } from "@/types";
import { useState } from "react";
import * as S from "./Styles";
import BondCalculations from "./BondCalculations";
import CashFlowCalculation from "./CashFlowCalculations";
import GoldenOpportunity from "./GoldenOpportunity";
import StockPaperTable from "./Watcher/Table";
import { v4 as uuidv4 } from "uuid";
import BondPaperTypesButtons from "@/components/BondPaperTypesButtons";

const tabs = [
  { label: "دیده‌بان", value: 0, id: uuidv4() },
  { label: "محاسبه اوراق", value: 1, id: uuidv4() },
  { label: "محاسبه جریان نقدی", value: 2, id: uuidv4() },
  { label: "فرصت طلایی", value: 3, id: uuidv4() },
];
const btnLabels = [
  { label: "اوراق مرابحه", index: 0, action: "" },
  { label: "اوراق اجاره", index: 1, action: "" },
  { label: "اوراق خرید دین", index: 2, action: "" },
  { label: "اسناد خزانه اسلامی", index: 3, action: "" },
  { label: "اوراق اراد", index: 4, action: "" },
  { label: "اوراق منفعت خصوصی", index: 5, action: "" },
];

const MainContent: SFC = () => {
  const [value, setValue] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState<boolean[]>([]);

  const handleButtonClick = (index: number) => {
    const updatedArray = [...selectedButtons];
    updatedArray[index] = !updatedArray[index];
    setSelectedButtons(updatedArray);
  };

  return (
    <>
      <BondPaperTypesButtons
        btnLabels={btnLabels}
        handleButtonClick={handleButtonClick}       
        selectedButtons={selectedButtons}
        buttonPerLine={3}
      />
      <S.Divider />

      <S.Container>
        <AccodionWrapper
          defaultExpanded={true}
          value={value}
          setValue={setValue}
          tabs={tabs}
          children={[
            <StockPaperTable />,
            <BondCalculations />,
            <CashFlowCalculation />,
            <GoldenOpportunity />,
          ]}
        />
      </S.Container>
      <S.Divider />
    </>
  );
};
export default MainContent;
