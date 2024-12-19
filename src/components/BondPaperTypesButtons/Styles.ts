import { Button as UButton,ButtonProps } from "@mui/material";
import styled from "styled-components";

import { colors } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";

interface CustomButtonProps extends ButtonProps {
  isSelected?: boolean;
}

interface ButtonProps1 {
  buttonPerLine: number;
}

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !["buttonPerLine"].includes(prop),
})<ButtonProps1>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > button {
    flex-basis: calc(
      (100% / ${(props) => props.buttonPerLine}) - 10px
    ); /* Adjust the percentage and subtract any margin/gap you want between buttons */
    margin: 5px;
  }
  > button:nth-child(1) {
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    min-width: 0;
  }
`;

export const Button = styled(UButton).withConfig({
  shouldForwardProp: (prop) => !["isSelected"].includes(prop),
})<CustomButtonProps>`
  ${muiButtonStyle};
  background: ${(props) =>
    props.isSelected
      ? `linear-gradient(
to bottom,
${colors.lightGreen},
${colors.darkGreen}
) !important`
      : `linear-gradient(
to bottom,
${colors.lightBrown},
${colors.darkBrown}
) !important`};
  color: ${colors.brownBorder} !important;
  border-color: ${colors.brownBorder} !important;
  &:hover {
    background-color: ${(props) =>
      props.isSelected ? ` ${colors.lightGreen}` : `${colors.lightBrown}`};
  }
`;
