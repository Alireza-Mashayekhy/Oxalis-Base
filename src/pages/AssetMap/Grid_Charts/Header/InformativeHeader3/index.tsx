import { useSelector } from "react-redux";

import { getAllAssets } from "@/selectors/state";
import { colors } from "@/styles";
import { AllAssets, SFC } from "@/types";

import InformativeHeaderPattern from "../InformativeHeaderPattern";

const InformativeHeader3: SFC = () => {
  const selectedFund: AllAssets = useSelector(getAllAssets)?.selectedAsset?.[1];

  return (
    <>
      <InformativeHeaderPattern
        title='فروش داخلی'
        value={selectedFund?.value ?? " "}
        progressBarValue={
          selectedFund?.percent ? parseFloat(selectedFund.percent) : 0
        }
        color={colors.chartsColor.green}
      />
    </>
  );
};

export default InformativeHeader3;
