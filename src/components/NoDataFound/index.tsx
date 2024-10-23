import { SFC } from "@/types";
import NoData from "@/assets/NoData1.png";
import * as S from "./Styles";

const NoDataFoundTemplate: SFC = () => {
  return (
    <S.Container>
      <div>داده ای برای نمایش وجود ندارد</div>
      <div>
        <img src={NoData} style={{ width: "100px" }} />
      </div>
    </S.Container>
  );
};

export default NoDataFoundTemplate;
