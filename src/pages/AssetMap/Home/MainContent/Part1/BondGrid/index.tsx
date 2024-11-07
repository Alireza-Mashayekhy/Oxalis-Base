import { SFC } from "@/types";
import * as S from "./Styles";
import { useSelector } from "react-redux";
import { getBondFrame } from "@/selectors/state";
import {
  createBondTreeTableDataWithWeightedAverage,
  numberBodyTemplateForTreeTable,
  roundedNumberBodyTemplateForTreeTable,
} from "@/utils/dataTableFunctions";
import { useEffect, useState } from "react";
import CustomTreeTable from "@/components/TreeTable";

interface DdnHistoryNode {
  key: string;
  data: {
    [key: string]: any;
  };
  children?: DdnHistoryNode[];
}

const treeTableData = [
  {
    field: "name",
    header: "",
    expander: true,
    width: "10%",
    align: "right",
  },
  {
    field: "DAY_VALUE",
    header: "ارزش روز (میلیون ریال)",
    body: numberBodyTemplateForTreeTable,
    width: "15%",
    sortable: true,
  },
  { field: "SYMBOL", header: "نماد", body: "", width: "10%", sortable: true },
  { field: "RATE", header: "نرخ", body: "", width: "10%", sortable: true },
  {
    field: "REMAINING_QUANTITY",
    header: "تعداد مانده",
    body: numberBodyTemplateForTreeTable,
    width: "10%",
    sortable: true,
  },
  {
    field: "TO_MATURITY",
    header: "تا سررسید",
    body: numberBodyTemplateForTreeTable,
    width: "10%",
    sortable: true,
  },
  {
    field: "USER_PRICE",
    header: "قیمت کاربر",
    body: numberBodyTemplateForTreeTable,
    width: "10%",
    sortable: true,
  },
  {
    field: "YTM_MOMENT",
    header: "YTM لحظه",
    body: roundedNumberBodyTemplateForTreeTable,
    width: "9%",
    sortable: true,
  },
  {
    field: "YTM_PURCHASE",
    header: "YTM خرید",
    body: "",
    width: "8%",
    sortable: true,
  },

  {
    field: "YTM_USER",
    header: "YTM کاربر",
    body: "",
    width: "8%",
    sortable: true,
  },
];

const BondDataGrid: SFC = () => {
  const data = useSelector(getBondFrame);
  const [nodes, setNodes] = useState<DdnHistoryNode[]>([]);

  useEffect(() => {
    setNodes(createBondTreeTableDataWithWeightedAverage(data));
  }, [data]);

  return (
    <>
      <S.Container>
        <CustomTreeTable columns={treeTableData} data={nodes} />
      </S.Container>
    </>
  );
};

export default BondDataGrid;
