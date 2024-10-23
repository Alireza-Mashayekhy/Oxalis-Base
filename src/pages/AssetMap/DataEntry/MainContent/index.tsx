import { SFC } from "@/types";
import * as S from "./Styles";
import TabWrapper from "@/components/Tab";
import TabPanel from "@/components/TabPanel";
import { SyntheticEvent, useState } from "react";

import BankAccount from "./BankAccount/index";
import { v4 as uuidv4 } from "uuid";
import BondsData from "./BondsData";

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
