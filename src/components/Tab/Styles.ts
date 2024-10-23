import styled from "styled-components";
import { colors, fonts } from "@/styles";
import { Tab } from "@mui/material";
import { ComponentProps } from "react";

interface CustomTabProps extends ComponentProps<typeof Tab> {
  customColor?: string;
}

export const StyledTab = styled(Tab).withConfig({
  shouldForwardProp: (prop) => !["color"].includes(prop),
})<CustomTabProps>`
  py: 0;
  color: ${({ theme }) => theme.textColor};
  &.Mui-selected {
    color: ${colors.palette.blue[600]};
  }
  &:hover {
    color: ${colors.palette.blue[600]};
    opacity: 1;
  }

  && {
    color: ${({ theme, color }) => color || theme.textColor};
    font-size: ${fonts.size.xs};
    font-weight:${fonts.weight.semiBold};
    font-family: ${fonts.family.default};
  }
`;


export const Container = styled.div`

`
