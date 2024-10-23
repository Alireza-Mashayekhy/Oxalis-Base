import { getTabIndex } from "@/selectors/state";
import { SFC } from "@/types";
import { useSelector } from "react-redux";
import ShareFilterPannel from "./Share";
import AssetMapFilterPannel from "./AssetMap";
import BondFilterPannel from "./Bond";
import CashflowFilterPannel from "./Cashflow";
import {getAccordionTitle} from '@/selectors/state';


import React , {useEffect} from 'react';


const FilterPannel: React.FC = () => {
  const accorionState = useSelector(getAccordionTitle);

  return (
    <>

     {accorionState.title === "تولید" && accorionState.isOpen && (
        <CashflowFilterPannel />
      )}

      {accorionState.title === "فروش" && accorionState.isOpen && (
        <BondFilterPannel />
      )}

      {accorionState.title === "مالی" && accorionState.isOpen && (
        <AssetMapFilterPannel />
      )}

      {!accorionState.isOpen && <BondFilterPannel />}
      
    </>
  );

};

export default FilterPannel;
