import {
  muiButtonStyle,
  narrowScroll,
  primeReactTREETableStyle,
} from "@/styles/mixins";
import { Button as UButton } from "@mui/material";
import { TreeTable } from "primereact/treetable";
import styled from "styled-components";
import { InputNumber } from "primereact/inputnumber";

export const Container = styled.div`
  height: 50vh;
  overflow-x: auto;
  overflow-y: hidden;
  ${narrowScroll};
`;

export const TableContainer = styled.div`
  // width: 100%;
  // width: max-content;
  margin: 10px auto;
  color: ${({ theme }) => theme.textColor};
`;

export const StyledTreeTable = styled(TreeTable)`
  ${primeReactTREETableStyle};
`;
export const StyledInputNumber = styled(InputNumber)`
  .p-inputnumber-input {
    text-align: center !important;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  text-align: left !important;
  margin-left: 1rem;
`;

export const StyledButton = styled(UButton)`
  ${muiButtonStyle};
  padding: 5px 50px !important;
`;

export const SearchContainer = styled.div`
  width: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
`;
