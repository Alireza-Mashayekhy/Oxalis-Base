import { SFC } from "@/types";
import * as S from "./Styles";
import { useSelector } from "react-redux";
import { getData } from "@/selectors/state";
import {
  createTreeTableDataWithWeight,
  numberBodyTemplateForTreeTable,
  roundedNumberBodyTemplateForTreeTable,
} from "@/utils/dataTableFunctions";
import { Column } from "primereact/column";
import NoDataFoundTemplate from "@/components/NoDataFound";
import { useEffect, useState } from "react";
import { TreeNode } from "primereact/treenode";

const treeTableData = [
  { field: "TITLE", header: "عنوان", body: "", width: "15%" },
  { field: "DESCRIPTION", header: "شرح", body: "", width: "35%" },
  {
    field: "EFFECTIVE_YIELD",
    header: "سود‌موثر‌خرید",
    width: "10%",
    body: roundedNumberBodyTemplateForTreeTable,
  },
  {
    field: "EFFECTIVE_YIELD",
    header: "سود موثر",
    width: "10%",
    body: roundedNumberBodyTemplateForTreeTable,
  },
];

const GeneralStatusDataGrid: SFC = () => {
  const data = useSelector(getData);
  // const organizedData = createTreeTableData(data);
  // const organizedData = createTreeTableDataWithWeight(data);
  const [nodes, setNodes] = useState<TreeNode[]>([]);

  useEffect(() => {
    setNodes(createTreeTableDataWithWeight(data));
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
              style={{ minWidth: "50rem" }}
              // emptyMessage="داده‌ای برای نمایش وجود ندارد"
            >
              <Column
                className="name-column"
                field="name"
                header=""
                expander
                // style={{ width: "max-content" }}
                style={{ width: "15%" }}
              ></Column>
              <Column
                field="DAY_VALUE"
                className="day-column"
                header="ارزش روز (میلیون‌ ریال)"
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

export default GeneralStatusDataGrid;
