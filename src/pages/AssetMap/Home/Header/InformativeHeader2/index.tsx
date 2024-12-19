import { useSelector } from "react-redux";

import { getAllAssets } from "@/selectors/state";
import { colors } from "@/styles";
import { AllAssets, SFC } from "@/types";

import InformativeHeaderPattern from "../InformativeHeaderPattern";

const Anticipation: SFC = () => {
  const selectedFund: AllAssets = useSelector(getAllAssets)?.selectedAsset?.[0];

  return (
    <>
      <InformativeHeaderPattern
        title={selectedFund?.asset ? `ارزش ${selectedFund.asset}` : "-"}
        value={selectedFund?.value ?? " "}
        progressBarValue={
          selectedFund?.percent ? parseFloat(selectedFund.percent) : 0
        }
        color={colors.chartsColor.blue}
      />
    </>
  );
};

export default Anticipation;
