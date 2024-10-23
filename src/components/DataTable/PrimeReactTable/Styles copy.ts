import { fonts } from "@/styles";
import { narrowScroll } from "@/styles/mixins";
import { DataTable } from "primereact/datatable";
import styled from "styled-components";

export const TableContainer = styled.div`
  padding: 5px 10px;
  // height: 50vh;
  // overflow-x: auto;
  // ${narrowScroll};
`;

export const StyledTable = styled(DataTable)`
  .p-datatable-thead > tr > th {
    background-color: ${({ theme }) => theme.hover} !important;
    color: ${({ theme }) => theme.textColor} !important;
    padding: 10px 5px;
    font-size: ${fonts.size.m} !important;
  }
  // align table header in the center
  .p-datatable-thead > tr > th > .p-column-header-content {
    justify-content: center !important;
  }
  // table body style
  .p-datatable-tbody > tr > td {
    padding: 5px 5px;
    // width: 30%;
    border-bottom: 1px solid #dee2e6;
    color: ${({ theme }) => theme.textColor} !important;
    background-color: ${({ theme }) => theme.secondary} !important;
    font-size: ${fonts.size.m} !important;
    font-weight: ${fonts.weight.semiBold};
    wordwrap: break-word;
    white-space: nowrap;

    padding: 10px 5px;
  }

  // align table body cell in the center
  .p-datatable-tbody > tr:not(.p-rowgroup-header) > td {
    text-align: center;
  }

  .p-datatable-tbody .p-row-odd {
    background-color: ${({ theme }) => theme.strippedRow} !important;
  }

  .p-datatable-tbody > tr:nth-child(odd) {
    background-color: ${({ theme }) => theme.strippedRow} !important;
  }
  // style for grouped row
  .p-datatable-tbody .p-rowgroup-header > td {
    background-color: ${({ theme }) => theme.primary} !important;
    padding: 10px;
  }

  // to align > with text in grouped row
  .p-datatable-tbody .p-rowgroup-header > td > span {
    display: inline-flex;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.textColor} !important;
  }
  // style for expander icon
  .p-datatable-tbody .p-rowgroup-header > td > button {
    color: ${({ theme }) => theme.textColor} !important;
    transform: rotate(180deg);
  }
`;
