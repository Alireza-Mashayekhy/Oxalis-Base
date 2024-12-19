import { SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TabWrapper from "@/components/Tab";
import TabPanel from "@/components/TabPanel";
import { SFC } from "@/types";

import BankAccount from "./BankAccount/index";
import BondsData from "./BondsData";
import * as S from "./Styles";

const MainContent: SFC = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <S.Container>
      <TabWrapper
        value={value}
        handleTabChange={handleTabChange}
        tabs={[
          { label: "حساب‌های بانکی", value: 0, id: uuidv4() },
          { label: "اوراق", value: 1, id: uuidv4() },
        ]}
      />
      <TabPanel
        tabDetails={[
          { children: <BankAccount />, value: 0, id: uuidv4() },
          { children: <BondsData />, value: 1, id: uuidv4() },
        ]}
        value={value}
      />
    </S.Container>
  );
};

export default MainContent;
