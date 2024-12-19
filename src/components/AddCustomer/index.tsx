import { mdiPlus } from "@mdi/js";
import { useState } from "react";

import { SFC } from "@/types";

import AddModal from "./AddModal";
import * as S from "./Styles";

const AddCustomer: SFC = () => {
  const [addModalVisible, setAddModalVisible] = useState(false);

  return (
    <S.Container>
      <S.AddButton onClick={() => setAddModalVisible(true)}>
        <S.AddIcon path={mdiPlus} size={0.8} />
        <S.AddLabel>ایجاد مشتری جدید</S.AddLabel>
      </S.AddButton>

      {/*  Add Modal  */}
      <AddModal visible={addModalVisible} setVisibleProp={setAddModalVisible} />
    </S.Container>
  );
};

export default AddCustomer;
