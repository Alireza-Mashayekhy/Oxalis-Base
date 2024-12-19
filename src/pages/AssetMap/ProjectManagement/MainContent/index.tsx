import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AccodionWrapper from "@/components/AccordionWrapper";
import { SFC } from "@/types";

import CreateProject from "./CreateProject";
import * as S from "./Styles";
import ViewProject from "./ViewProject";

const tabs = [
  { label: "تعریف پروژه", value: 0, id: uuidv4() },
  { label: "مشاهده پروژه", value: 1, id: uuidv4() },
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
          children={[<CreateProject />, <ViewProject />]}
        />
      </S.Container>
    </>
  );
};

export default MainContent;
