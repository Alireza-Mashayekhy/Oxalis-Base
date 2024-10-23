import { muiButtonStyle } from "@/styles/mixins";
import { Button as UButton } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled(UButton)`
  ${muiButtonStyle};
  width: 100%;
`;
