import { colors, fonts } from "@/styles";
import { Menu } from "@mui/material";
import styled from "styled-components";

export const StyledMenu = styled(Menu)`
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor};
    direction: rtl;
    &::-webkit-scrollbar {
      display: none;
    }
    // Hide scrollbar for IE, Edge, and Firefox
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // IE and Edge
  }
  & .MuiMenuItem-root {
    font-family: ${fonts.family.default} !important;
    &:hover {
      background-color: ${colors.chartsColor.blue};
      color: ${colors.white};
      border-color: rgba(255, 240, 10, 0.8);
    }
  }
`;
