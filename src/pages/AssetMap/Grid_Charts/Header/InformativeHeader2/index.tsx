import { AllAssets, SFC } from "@/types";
import { colors } from "@/styles";
import InformativeHeaderPattern from "../InformativeHeaderPattern";
import { useSelector } from "react-redux";
import { getAllAssets } from "@/selectors/state";

const Anticipation: SFC = () => {
  const selectedFund: AllAssets = useSelector(getAllAssets)?.selectedAsset?.[0];

  return (
    <>
      <InformativeHeaderPattern
        title=' فروش خارجی'
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
