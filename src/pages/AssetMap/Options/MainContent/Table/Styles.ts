import styled from "styled-components";
import { DataTable } from "primereact/datatable";
import { primeReactDataTableStyle } from "@/styles/mixins";
import { breakpoints } from "@/styles";

export const TableContainer = styled.div`
  height: 50vh;
  overflow: auto;
  @media (max-width: ${breakpoints.mobile}) {
    height: 70vh;
  }
`;

export const StyledDataTable = styled(DataTable)`
  ${primeReactDataTableStyle};

  .p-datatable-tbody > tr > td {
    padding: 10px 0 !important;
  }
  .p-datatable-thead > tr > th {
    padding: 10px 5px !important;
  }
  .p-datatable-tbody > tr > td:nth-child(7) {
    border-left: 2px solid ${({ theme }) => theme.textColor} !important;
  }
  .p-datatable-thead > tr:nth-child(2) > th:nth-child(4) {
    border-left: 2px solid ${({ theme }) => theme.textColor} !important;
  }
  .p-datatable-thead > tr:nth-child(1) > th:nth-child(4) {
    border-bottom: 2px solid ${({ theme }) => theme.textColor} !important;
  }
  .p-datatable-thead > tr:nth-child(1) > th:nth-child(5) {
    border-bottom: 2px solid ${({ theme }) => theme.textColor} !important;
  }
`;
