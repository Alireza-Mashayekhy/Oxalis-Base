import Toggler from "@/components/Toggler";
import { SFC } from "@/types";

import * as S from "./Styles";

const TopBar: SFC<{
  isSecondColumnVisible: boolean;
  toggleSecondColumn: () => void;
}> = ({ isSecondColumnVisible, toggleSecondColumn }) => {
  return (
    <>
      <S.FlexItem>
        <S.H3>مدیریت پروژه </S.H3>
      </S.FlexItem>

      <S.Gap />

      {!isSecondColumnVisible && (
        <Toggler
          isSecondColumnVisible={isSecondColumnVisible}
          toggleSecondColumn={toggleSecondColumn}
        />
      )}
    </>
  );
};

export default TopBar;
