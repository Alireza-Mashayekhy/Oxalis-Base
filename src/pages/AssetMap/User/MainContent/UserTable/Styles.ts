import { DataTable } from "primereact/datatable";
import styled from "styled-components";

import { narrowScroll, primeReactDataTableStyle } from "@/styles/mixins";

export const TableContainer = styled.div`
  padding: 5px 10px;
  height: 50vh;
  overflow: auto;
  ${narrowScroll};
`;
export const StyledDataTable = styled(DataTable)`
  ${primeReactDataTableStyle};
  .p-datatable-tbody > tr > td {
    padding: 5px;
  }
`;

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.border};
  background-color: transparent;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 1rem;
  margin-right: 5px;
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  text-align: left !important;
  margin-left: 1rem;
`;

export const OperationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
