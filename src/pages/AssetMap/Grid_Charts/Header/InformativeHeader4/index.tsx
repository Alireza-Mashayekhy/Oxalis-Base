import { useSelector } from "react-redux";

import { getAllAssets } from "@/selectors/state";
import { colors } from "@/styles";
import { AllAssets, SFC } from "@/types";

import InformativeHeaderPattern from "../InformativeHeaderPattern";

const InformativeHeader4: SFC = () => {
  const selectedFund: AllAssets = useSelector(getAllAssets)?.selectedAsset?.[2];

  return (
    <>
      <InformativeHeaderPattern
        title='نقدینگی'
        value={selectedFund?.value ?? " "}
        progressBarValue={
          selectedFund?.percent ? parseFloat(selectedFund.percent) : 0
        }
        color={colors.chartsColor.pink}
      />
    </>
  );
};

export default InformativeHeader4;
