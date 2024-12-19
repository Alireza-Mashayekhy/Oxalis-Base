import { colors } from "@/styles";
import { SFC } from "@/types";

import InformativeHeaderPattern from "../InformativeHeaderPattern";

const InformativeHeader5: SFC = () => {
  return (
    <>
      <InformativeHeaderPattern
        title="ارزش کالایی"
        value="4B"
        progressBarValue={0.004}
        color={colors.chartsColor.pink}
      />
    </>
  );
};

export default InformativeHeader5;
