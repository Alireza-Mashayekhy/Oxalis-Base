import styled from "styled-components";

import { breakpoints } from "@/styles";
import { narrowScroll } from "@/styles/mixins";

export const TableContainer = styled.div`
  ${narrowScroll};
  overflow: auto;
  height: 45vh;
  width: 100%;
  @media (max-width: ${breakpoints.mobile}) {
    height: 70vh;
  }
`;
