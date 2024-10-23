import { SFC } from "@/types";
import * as S from "./Styles";
import Toggler from "@/components/Toggler";

const TopBar: SFC<{
  isSecondColumnVisible: boolean;
  toggleSecondColumn: () => void;
}> = ({ isSecondColumnVisible, toggleSecondColumn }) => {
  return (
    <>
      <S.FlexItem>
        <S.H3>ورود اطلاعات</S.H3>
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
