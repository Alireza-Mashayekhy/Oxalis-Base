import { SFC } from "@/types";
import { colors } from "@/styles";
import InformativeHeaderPattern from "../InformativeHeaderPattern";

const InformativeHeader6: SFC = () => {
  return (
    <>
      <InformativeHeaderPattern
        title="ارزش صندوق‌ در‌صندوق"
        value="660B"
        progressBarValue={0.64}
        color={colors.chartsColor.green}
      />
    </>
  );
};

export default InformativeHeader6;
