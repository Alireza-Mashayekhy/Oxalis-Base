import { SFC } from "@/types";
import * as S from "./Styles";
import { useSelector } from "react-redux";
import { getBondFrame } from "@/selectors/state";
import {
  createBondTreeTableDataWithWeightedAverage,
  numberBodyTemplateForTreeTable,
  roundedNumberBodyTemplateForTreeTable,
} from "@/utils/dataTableFunctions";
import { Column } from "primereact/column";
import NoDataFoundTemplate from "@/components/NoDataFound";
import { useEffect, useState } from "react";
import { TreeNode } from "primereact/treenode";

const treeTableData = [
  { field: "SYMBOL", header: "نماد", body: "", width: "10%" },
  { field: "RATE", header: "نرخ", body: "", width: "10%" },
  {
    field: "REMAINING_QUANTITY",
    header: "تعداد مانده",
    body: numberBodyTemplateForTreeTable,
    width: "10%",
  },
  {
    field: "TO_MATURITY",
    header: "تا سررسید",
    body: numberBodyTemplateForTreeTable,
    width: "10%",
  },
  {
    field: "USER_PRICE",
    header: "قیمت کاربر",
    body: numberBodyTemplateForTreeTable,
    width: "10%",
  },
  {
    field: "YTM_MOMENT",
    header: "YTM لحظه",
    body: roundedNumberBodyTemplateForTreeTable,
    width: "9%",
  },
  { field: "YTM_PURCHASE", header: "YTM خرید", body: "", width: "8%" },

  { field: "YTM_USER", header: "YTM کاربر", body: "", width: "8%" },
];

const BondDataGrid: SFC = () => {
  const data = useSelector(getBondFrame);
  // const organizedData = createBondTreeTableDataWithWeightedAverage(data);
  // const organizedData = createBondTreeTableData(data);
  const [nodes, setNodes] = useState<TreeNode[]>([]);

  useEffect(() => {
    setNodes(createBondTreeTableDataWithWeightedAverage(data));
  }, []);

  return (
    <>
      <S.Container>
        {nodes.length > 0 ? (
          <S.TableContainer>
            <S.StyledTreeTable
              value={nodes}
              scrollable
              scrollHeight="400px"
              style={{ minWidth: "70rem" }}
              // emptyMessage="داده‌ای برای نمایش وجود ندارد"
            >
              <Column
                className="name-column"
                field="name"
                header=""
                expander
                style={{ width: "10%" }}
              ></Column>
              <Column
                field="DAY_VALUE"
                className="day-column"
                header="ارزش روز (میلیون ریال)"
                body={numberBodyTemplateForTreeTable}
                style={{ width: "15%" }}
                sortable
              ></Column>
              {treeTableData.map((col, index) => (
                <Column
                  key={index}
                  field={col.field}
                  header={col.header}
                  body={col.body}
                  style={{ width: `${col.width}` }}
                  sortable
                />
              ))}
            </S.StyledTreeTable>
          </S.TableContainer>
        ) : (
          <NoDataFoundTemplate />
        )}
      </S.Container>
    </>
  );
};

export default BondDataGrid;
