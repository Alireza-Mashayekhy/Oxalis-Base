import { useSelector } from "react-redux";

import { getTabIndex } from "@/selectors/state";
import { SFC } from "@/types";

import AssetMapFilterPannel from "./AssetMap";
import BondFilterPannel from "./Bond";
import CashflowFilterPannel from "./Cashflow";
import DepositeFilterPannel from "./Deposite";
import ShareFilterPannel from "./Share";

const FilterPannel: SFC = () => {
  const activeIndex = useSelector(getTabIndex);

  return (
    <>
      {activeIndex === 0 && <AssetMapFilterPannel />}
      {activeIndex === 1 && <DepositeFilterPannel />}
      {activeIndex === 2 && <BondFilterPannel />}
      {activeIndex === 3 && <ShareFilterPannel />}
      {activeIndex === 4 && <CashflowFilterPannel />}
    </>
  );
};
export default FilterPannel;
