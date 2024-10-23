import { AllAssets, SFC } from "@/types";
import { colors } from "@/styles";
import InformativeHeaderPattern from "../InformativeHeaderPattern";
import { useSelector } from "react-redux";
import { getAllAssets } from "@/selectors/state";

const InformativeHeader3: SFC = () => {
  const selectedFund: AllAssets = useSelector(getAllAssets)?.selectedAsset?.[1];

  return (
    <>
      <InformativeHeaderPattern
        title={selectedFund?.asset ? `ارزش ${selectedFund.asset}` : "-"}
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
