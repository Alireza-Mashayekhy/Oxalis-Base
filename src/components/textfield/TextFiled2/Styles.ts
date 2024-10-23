import { colors, fonts } from "@/styles";
import { TextField as UTextField } from "@mui/material";
import styled from "styled-components";

export const Span = styled.span`
  && {
    font-family: ${fonts.family.default};
    font-size: ${fonts.size.s};
    font-weight: ${fonts.weight.semiBold};
    color: ${({ theme }) => theme.textColor} !important;
  }
`;

export const TextField = styled(UTextField)`
  && input {
    font-family: ${fonts.family.default};
    color: ${({ theme }) => theme.textColor};
    padding: 6px;
  }
  && {
    border: 1px solid ${colors.selectBorderColor};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primary};
  }
`;
