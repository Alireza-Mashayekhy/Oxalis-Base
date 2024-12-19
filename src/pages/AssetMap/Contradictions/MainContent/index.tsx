import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AccodionWrapper from "@/components/AccordionWrapper";
import { SFC } from "@/types";

import ReconciliationOfFunds from "./ReconciliationOfFunds";
import * as S from "./Styles";
const tabs = [
  { label: "مغایرت گیری صندوق‌های صدور و ابطال", value: 0, id: uuidv4() },
];
const MainContent: SFC = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <S.Container>
        <AccodionWrapper
          defaultExpanded={true}
          value={value}
          setValue={setValue}
          tabs={tabs}
          children={[<ReconciliationOfFunds />]}
        />
      </S.Container>
      <S.Divider />
    </>
  );
};
export default MainContent;
