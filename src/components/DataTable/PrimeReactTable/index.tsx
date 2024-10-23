// import { DataTableSelectionSingleChangeEvent } from "primereact/datatable";
import * as S from "./Styles";
import { Column, ColumnBodyOptions } from "primereact/column";

interface DataTableSelectionSingleChangeEvent<T> {
  originalEvent: React.SyntheticEvent<Element, Event>;
  value: T; // The type here should match your row data type
  type: "radio" | "row" | "single";
}
interface PrimeTable<T> {
  columns: {
    header?: string;
    field: keyof T;
    body?: string;
  }[];
  data: T[];
  withRowNumber: boolean;
  editMode?: string;
  selection?: T;
  onSelectionChange?: (event: DataTableSelectionSingleChangeEvent<T>) => void;
}

const PrimeReactTable: React.FC<PrimeTable<Record<string, unknown>>> = ({
  columns,
  data,
  editMode,
  withRowNumber,
  selection,
  onSelectionChange,
}) => {
  const renderBodyTemplate = (type: string) => {
    switch (type) {
      case "number":
        return numberBodyTemplate;
      case "des30Letters":
        return DesBodyTemplate30WordsLimit;

      default:
        break;
    }
  };

  const DesBodyTemplate30WordsLimit = (
    rowData: any,
    col: ColumnBodyOptions
  ) => {
    return rowData[col.field].substring(0, 30);
  };

  const numberBodyTemplate = (rowData: any, col: ColumnBodyOptions) => {
    return rowData[col.field].toLocaleString();
  };

  return (
    <S.StyledTable
      editMode={editMode}
      value={data}
      // virtualScrollerOptions={{ itemSize: 50 }}
      stripedRows
      scrollable
      scrollHeight="flex"
      selectionMode="single"
      selection={selection}
      onSelectionChange={onSelectionChange}
    >
      {withRowNumber && (
        <Column
          header="ردیف"
          body={(rowData, { rowIndex }) => rowIndex + 1}
          style={{ color: "black" }}
        />
      )}
      {columns.map((col, index) => (
        <Column
          key={index}
          // key={col.field + index}
          field={col.field}
          header={col.header}
          body={renderBodyTemplate(col.body)}
          // body={col.body}
        />
      ))}
    </S.StyledTable>
  );
};

export default PrimeReactTable;
