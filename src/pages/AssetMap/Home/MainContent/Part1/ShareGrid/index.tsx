import { SFC } from "@/types";
import * as S from "./Styles";
import { useSelector } from "react-redux";
import { getShareFrame } from "@/selectors/state";
import {
  createShareTreeTableData,
  numberBodyTemplateForTreeTable,
  searchData,
} from "@/utils/dataTableFunctions";
import { Column, ColumnBodyOptions } from "primereact/column";
import { colors } from "@/styles";
import SearchInput from "@/components/Inputs/SearchInput";
import { useEffect, useState } from "react";
import { TreeNode } from "primereact/treenode";
import NoDataFoundTemplate from "@/components/NoDataFound";

// because I need to return jsx and i needed a .tsx file not .ts
const numberBodyTemplateForTreeTableWithGreenAndRedColor = (
  data,
  col: ColumnBodyOptions
) => {
  const field = data.data[col.field];
  if (field === null || field === undefined || field === "") {
    return "";
  }
  if (field < 0) {
    return (
      <span style={{ color: colors.palette.red[400] }}>
        ( {(-Number(field)).toLocaleString()})
      </span>
    );
  }
  return (
    <span style={{ color: colors.palette.green[400] }}>
      {Number(field).toLocaleString()}
    </span>
  );
};

const treeTableData = [
  // { field: "SYMBOL", header: "نماد", body: "", width: "5rem" },
  {
    field: "QUANTITY",
    header: "تعداد",
    body: numberBodyTemplateForTreeTable,
    width: "10%",
  },
  {
    field: "TOTAL_COST_PRICE",
    header: "قیمت تمام‌شده(میلیون‌ریال)",
    body: numberBodyTemplateForTreeTable,
    width: "15%",
  },

  {
    field: "NET_SALE_VALUE",
    header: "خالص ارزش فروش کل(میلیون‌ریال)",
    body: numberBodyTemplateForTreeTable,
    width: "15%",
  },
  {
    field: "PROFIT_LOSS",
    header: "سود/زیان(میلیون‌ریال)",
    body: numberBodyTemplateForTreeTableWithGreenAndRedColor,
    width: "15%",
  },
];

const ShareDataGrid: SFC = () => {
  const data = useSelector(getShareFrame);
  // const organizedData = createShareTreeTableData(data);

  const [searchInput, setSearchInput] = useState("");
  const [nodes, setNodes] = useState<TreeNode[]>([]);

  useEffect(() => {
    setNodes(createShareTreeTableData(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedValue = e.target.value;
    if (searchedValue.length === 0) {
      setSearchInput(searchedValue);
      setNodes(createShareTreeTableData(data));
    } else {
      setSearchInput(searchedValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      const filteredData = searchData(data, searchInput, "SYMBOL");
      setNodes(createShareTreeTableData(filteredData));
    }
  };

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
      <S.SearchContainer>
        <SearchInput
          placeholder="جستجو نام نماد..."
          value={searchInput}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
        />
      </S.SearchContainer>
    </>
  );
};

export default ShareDataGrid;
