import { AppDispatch, SFC } from "@/types";
import * as S from "./Styles";
import { useSelector } from "react-redux";
import { getData } from "@/selectors/state";
import {
  createTreeTableDataWithWeight,
  roundedNumberBodyTemplateForTreeTable,
} from "@/utils/dataTableFunctions";
import { useEffect, useLayoutEffect, useState } from "react";
import CustomTreeTable from "@/components/TreeTable";
import { Chip } from "primereact/chip";
import { fetchData } from "@/dispatchers/data";
import { useDispatch } from "react-redux";

interface DdnHistoryNode {
  key: string;
  data: {
    [key: string]: any;
  };
  children?: DdnHistoryNode[];
}

const GeneralStatusDataGrid: SFC = () => {
  const data = useSelector(getData)?.data;
  const filtersList = useSelector(getData)?.filters;
  const [nodes, setNodes] = useState<DdnHistoryNode[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setNodes(createTreeTableDataWithWeight(data));
  }, [data]);

  const formatDayValue = (data, col) => {
    const field = data.data[col.field] / 1000000;
    return field.toFixed(1);
  };

  const columns = [
    {
      field: "name",
      header: "",
      expander: true,
      align: "right",
      width: "15%",
    },
    {
      field: "DAY_VALUE",
      header: "ارزش روز (میلیون‌ ریال)",
      sortable: true,
      width: "15%",
      numberFormatter: true,
      body: formatDayValue,
      align: "right",
    },
    {
      field: "TITLE",
      header: "عنوان",
      body: "",
      width: "15%",
      sortable: true,
    },
    {
      field: "DESCRIPTION",
      header: "شرح",
      body: "",
      width: "35%",
      sortable: true,
    },
    {
      field: "EFFECTIVE_YIELD",
      header: "سود‌موثر‌خرید",
      width: "10%",
      numberFormatter: true,
      body: roundedNumberBodyTemplateForTreeTable,
      sortable: true,
    },
    {
      field: "EFFECTIVE_YIELD",
      header: "سود موثر",
      width: "10%",
      numberFormatter: true,
      body: roundedNumberBodyTemplateForTreeTable,
      sortable: true,
    },
  ];

  const removeItem = (e) => {
    const newFilters = { ...filtersList };
    delete newFilters[e];
    dispatch(fetchData(newFilters));
  };

  return (
    <>
      <S.Container>
        <CustomTreeTable columns={columns} data={nodes} />
      </S.Container>
      <S.ChipsContainer>
        {filtersList &&
          Object.keys(filtersList)?.map((e) => {
            return (
              <Chip label={filtersList[e]} onClick={() => removeItem(e)} />
            );
          })}
      </S.ChipsContainer>
    </>
  );
};

export default GeneralStatusDataGrid;
