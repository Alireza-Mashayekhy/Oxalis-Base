import { SFC } from "@/types";
import * as S from "./Styles";
import { useSelector } from "react-redux";
import { getCashFlowFrame } from "@/selectors/state";
import {
  createCashFlowTreeTableData,
  numberBodyTemplateForTreeTable,
} from "@/utils/dataTableFunctions";
import { Column } from "primereact/column";
import NoDataFoundTemplate from "@/components/NoDataFound";
import { useEffect, useState } from "react";
import { TreeNode } from "primereact/treenode";

const treeTableData = [
  // { field: "SYMBOL", header: "نماد", body: "", width: "30%" },
];

const CashFlowGrid: SFC = () => {
  const data = useSelector(getCashFlowFrame);
  // const organizedData = createCashFlowTreeTableData(data);
  const [nodes, setNodes] = useState<TreeNode[]>([]);

  useEffect(() => {
    setNodes(createCashFlowTreeTableData(data));
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
              style={{ minWidth: "20rem" }}
              // emptyMessage="داده‌ای برای نمایش وجود ندارد"
            >
              <Column
                className="name-column"
                field="name"
                header=""
                expander
                style={{ width: "50%" }}
              ></Column>
              <Column
                field="CASH_FLOW"
                className="day-column"
                header="جریان نقدی"
                body={numberBodyTemplateForTreeTable}
                style={{ width: "50%" }}
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

export default CashFlowGrid;
