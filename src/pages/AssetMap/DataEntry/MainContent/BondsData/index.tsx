import { AppDispatch, SFC } from "@/types";
import { useEffect, useState } from "react";
import { numberBodyTemplateForTreeTable } from "@/utils/dataTableFunctions";
import { Column, ColumnEditorOptions } from "primereact/column";
import * as S from "./Styles";
import { updateBondDataBatch } from "@/dispatchers/bondData";
import { useSelector, useDispatch } from "react-redux";
import { getBondData } from "@/selectors/state";
import { TreeNode } from "primereact/treenode";
import SendDataButton from "@/components/Button/sendDataButton";
import SearchInput from "@/components/Inputs/SearchInput";
import {
  filterBondDataTable,
  flattenTreeData,
  transformBondData,
} from "@/utils/dataEntry";
import NoDataFoundTemplate from "@/components/NoDataFound";
import EditableCell from "@/components/EditableCell";

const columns = [
  {
    field: "SYMBOL",
    header: "نماد",
    width: "20%",
    // width: "15rem",
    editable: false,
  },
  // { field: "PARTICIPATION", header: "مشارکت" },
  {
    field: "USER_PRICE",
    header: "قیمت کاربر",
    width: "20%",
    // width: "15rem",
    body: numberBodyTemplateForTreeTable,
    editable: true,
  },
  {
    field: "NUMBER_OF_MONTHS",
    header: "تعداد ماه",
    width: "20%",
    // width: "10rem",
    editable: true,
  },
  {
    field: "PREFERRED_INTEREST",
    header: "سود ترجیحی",
    width: "20%",
    // width: "10rem",
    editable: true,
  },
];

const BondsData: SFC = () => {
  const bondData = useSelector(getBondData).data;
  const loading = useSelector(getBondData).loading;
  const dispatch = useDispatch<AppDispatch>();

  const [searchInput, setSearchInput] = useState("");
  const [nodes, setNodes] = useState<TreeNode[]>([]);

  useEffect(() => {
    setNodes(transformBondData(bondData));
  }, []);

  const inputTextEditor = (options: ColumnEditorOptions) => {
    return <EditableCell options={options} nodes={nodes} setNodes={setNodes} />;
  };
  const handleButtonClick = () => {
    const flatData = flattenTreeData(nodes);
    dispatch(updateBondDataBatch(flatData));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedValue = e.target.value;
    if (searchedValue.length === 0) {
      setSearchInput(searchedValue);
      setNodes(transformBondData(bondData));
    } else {
      setSearchInput(searchedValue);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      const filteredData = filterBondDataTable(searchInput, bondData);   

      setNodes(transformBondData(filteredData));
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
              scrollHeight="300px"
              emptyMessage="  "
              tableStyle={{ width: "100%" }}
            >
              <Column
                field="FUND_NAME"
                header="صندوق"
                expander
                style={{ width: "20%" }}
              ></Column>
              {columns.map((col, index) => (
                <Column
                  key={index}
                  field={col.field}
                  header={col.header}
                  body={col.body}
                  style={{ width: `${col.width}` }}
                  editor={col.editable && inputTextEditor}
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
        value={searchInput}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
      />
      </S.SearchContainer>
      <S.ButtonContainer>
        <SendDataButton onClick={handleButtonClick} loading={loading} />
      </S.ButtonContainer>
    </>
  );
};

export default BondsData;
