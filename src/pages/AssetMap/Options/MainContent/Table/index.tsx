import { SFC } from "@/types";
import { Column } from "primereact/column";
import { optionsData } from "./OptionData";
import { headerGroup } from "./TableHeaders";
import * as S from "./Styles";
import { numberBodyTemplate } from "@/utils/primeReactDataTable";

// because the final fields are not detemined yet
// interface OptionsTableInterface {
//   selectedRow:
// }

const OptionsTable: SFC = ({ selectedRow, setSelectedRow, setOpen }) => {
  const tableColumns = [
    { field: "DaystoMat", body: "" },
    { field: "UAIndx", body: "" },
    {
      field: "UAsellprice",
      body: numberBodyTemplate,
    },
    { field: "_1stopt", body: "" },
    {
      field: "_1ststrike",
      body: numberBodyTemplate,
    },
    {
      field: "_1stoptbuypr",
      body: numberBodyTemplate,
    },
    {
      field: "_1stoptbuyvol",
      body: numberBodyTemplate,
    },
    { field: "_2ndopt", body: "" },
    {
      field: "_2ndstrike",
      body: numberBodyTemplate,
    },
    {
      field: "_2ndoptsellpr",
      body: numberBodyTemplate,
    },
    {
      field: "_2ndoptsellvol",
      body: numberBodyTemplate,
    },
    {
      field: "ContractSize",
      body: numberBodyTemplate,
    },
    {
      field: "state",
      body: numberBodyTemplate,
    },
    { field: "AYield", body: "" },
  ];
  const onRowSelect = (e) => {
    setSelectedRow(e.value);
    setOpen(true);
  };


  return (
    <>
      <S.TableContainer>
        <S.StyledDataTable
          value={optionsData}
          headerColumnGroup={headerGroup}
          tableStyle={{ minWidth: "30rem" }}
          scrollable
          scrollHeight="flex"
          selectionMode="single"
          selection={selectedRow}
          onSelectionChange={onRowSelect}
          id="optionsTable"
        >
          {tableColumns.map((col, index) => (
            <Column key={index} field={col.field} body={col.body} />
          ))}
        </S.StyledDataTable>
      </S.TableContainer>
    </>
  );
};
export default OptionsTable;
