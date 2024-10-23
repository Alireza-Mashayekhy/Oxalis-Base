import styled from "styled-components";
import { TreeTable } from "primereact/treetable";
import { narrowScroll, primeReactTREETableStyle } from "@/styles/mixins";

export const Container = styled.div`
  // height must be the same with treetable scrollable-height
  height: 400px;
  overflow-y: hidden;
  // overflow-x: auto;
  // ${narrowScroll};
`;

export const TableContainer = styled.div`
  // width: max-content;
  margin: 5px auto;
  color: ${({ theme }) => theme.textColor};
`;

export const StyledTreeTable = styled(TreeTable)`
  ${primeReactTREETableStyle};
`;
