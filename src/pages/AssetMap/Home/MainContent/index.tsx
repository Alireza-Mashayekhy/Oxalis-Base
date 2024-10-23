import { SFC } from "@/types";
import * as S from "./Styles";
import GeneralStatus from "./Part1";
import OrderStatus from "./Part2";
import EnvironmentLawsAndIssues from "./Part3";
import { useSelector } from "react-redux";
import { getAllAssets } from "@/selectors/state";
import LoadingComponent from "@/components/Loading";

const MainContent: SFC = () => {
  const loading = useSelector(getAllAssets).loading;

  return (
    <>
      {loading && <LoadingComponent />}
      <S.Container>
        <GeneralStatus />
      </S.Container>

      <S.Divider />

      <S.Container>
        <OrderStatus />
      </S.Container>

      <S.Divider />

      <S.Container>
        <EnvironmentLawsAndIssues />
      </S.Container>
    </>
  );
};

export default MainContent;
