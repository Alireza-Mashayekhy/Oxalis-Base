import styled from "styled-components";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { StyledMenuItemProps, StyledSelectProps } from "./types";
import { colors } from "@/styles";
import { narrowScroll } from "@/styles/mixins";

export const StyledSelect = styled(Select).withConfig({
  shouldForwardProp: (prop) =>
    ![
      "width",
      "minHeight",
      "borderWidth",
      "borderStyle",
      "borderColor",
      "marginBottom",
      "margin",
      "padding",
      // ... list other custom props here
    ].includes(prop),
})<StyledSelectProps>`
  width: ${(props) => props.width};

  margin-bottom: ${(props) => props.marginBottom || "0"};
  && {
    font-family: "IRANSans", sans-serif;
  }
  & .MuiSelect-select {
    // min-height: ${(props) => props.minHeight || "30px"};
    line-height: ${(props) => props.minHeight || "1.5"};
    padding: ${(props) => props.padding || "2px 0px"};
    margin: ${(props) => props.margin || "0px"};
    font-family: "IRANSans", sans-serif;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};

    border: ${(props) => props.borderWidth || "1px"}
      ${(props) => props.borderStyle || "solid"}
      ${(props) =>
        props.borderColor ||
        colors.selectBorderColor ||
        props.theme.textColor ||
        "transparent"};
  }

  & .MuiMenuItem-root {
    font-family: "IRANSans", sans-serif;
  }

  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.textColor};
  }
`;

export const StyledMenuItem = styled(MenuItem).withConfig({
  shouldForwardProp: (prop) =>
    ![
      "borderWidth",
      "borderStyle",
      // ... list other custom props here
    ].includes(prop),
})<StyledMenuItemProps>`
  && {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};

    border-bottom: ${(props) => props.borderWidth || "0"}
      ${(props) => props.borderStyle || "none"}
      ${({ theme }) => theme.primary || "transparent"};
    justify-content: flex-start;
    font-family: IRANSans;
  }
`;
