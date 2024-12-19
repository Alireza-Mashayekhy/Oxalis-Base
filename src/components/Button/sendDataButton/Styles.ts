import { Button as UButton } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

import { muiButtonStyle } from "@/styles/mixins";

export const StyledButton = styled(UButton)`
  ${muiButtonStyle};
  padding: 5px 50px !important;
  position: relative;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  left: 10%;
  transform: translateX(-50%);
`;
