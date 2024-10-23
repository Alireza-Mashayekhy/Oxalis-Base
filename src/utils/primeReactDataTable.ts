import { ColumnBodyOptions } from "primereact/column";

export const DesBodyTemplate = (rowData: any, col: ColumnBodyOptions) => {
  return rowData[col.field]?.substring(0, 30);
};

export const numberBodyTemplate = (rowData: any, col: ColumnBodyOptions) => {
  return Number(rowData[col.field])?.toLocaleString();
};
