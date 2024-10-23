import { SFC } from "@/types";
import * as S from "./Styles";
import { useSelector } from "react-redux";
import { getDepositeFrame } from "@/selectors/state";
import {
  // createDepositeTreeTableDataWithWeightedAvarage,
  createDepositeTreeTableDataWithExpansion,
  numberBodyTemplateForTreeTable,
  roundedNumberBodyTemplateForTreeTable,
} from "@/utils/dataTableFunctions";
import { Column } from "primereact/column";
import NoDataFoundTemplate from "@/components/NoDataFound";
import { useEffect, useState } from "react";
import { TreeNode } from "primereact/treenode";

const treeTableData = [
  {
    field: "ACCOUNT_NUMBER",
    header: "شماره حساب",
    body: "",
    width: "20%",
  },
  {
    field: "BRANCH",
    header: "شعبه",
    body: "",
    width: "20%",
  },
  // {
  //   field: "NOMINAL_PROFIT",
  //   header: "سود اسمی",
  //   body: "",
  //   width: "10%",
  // },
  // {
  //   field: "PREFERRED_PROFIT",
  //   header: "سود ترجیحی",
  //   body: "",
  //   width: "10%",
  // },
  {
    field: "REAL_PROFIT",
    header: "سود واقعی",
    body: roundedNumberBodyTemplateForTreeTable,
    width: "20%",
  },
];

const DepositeDataGrid: SFC = () => {
  const data = useSelector(getDepositeFrame);
  // const organizedData = createDepositeTreeTableDataWithWeightedAvarage(data);
  const [nodes, setNodes] = useState<TreeNode[]>([]);

  useEffect(() => {
    setNodes(createDepositeTreeTableDataWithExpansion(data));
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
              filterMode="strict"
              emptyMessage="داده‌ای برای نمایش وجود ندارد"
            >
              <Column
                className="name-column"
                field="name"
                header=""
                expander
                style={{ width: "20%" }}
              ></Column>
              <Column
                field="DAY_VALUE"
                className="day-column"
                header="ارزش روز (میلیون ریال)"
                body={numberBodyTemplateForTreeTable}
                style={{ width: "20%" }}
                sortable
              ></Column>
              {treeTableData.map((col, index) => (
                <Column
                  key={index}
                  field={col.field}
                  header={col.header}
                  body={col.body}
                  // style={{ width: "10%" }}
                  sortable
                  style={{ width: `${col.width}` }}
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

export default DepositeDataGrid;
