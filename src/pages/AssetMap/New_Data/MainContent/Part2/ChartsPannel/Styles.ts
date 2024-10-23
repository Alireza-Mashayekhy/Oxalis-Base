import styled from "styled-components";
import { breakpoints, colors } from "@/styles";
import { Tab, Tabs } from "@mui/material";

export const H4 = styled.h4`
  text-align: center;
  color: ${colors.textGrayColor};
`;

export const Container = styled.div`
  color: ${colors.textGrayColor};
  display: flex;
  width: 100%;
  height: 450px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    height: 500px;
  }

  > div:nth-child(1) {
    flex-basis: 10%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 5px;
    @media (max-width: ${breakpoints.tablet}) {
      flex-basis: 5%;
    }
  }
  > div:not(:first-child) {
    flex-basis: 90%;
  }
`;

export const StyledTab = styled(Tab)`
  && {
    color: ${({ theme }) => theme.textColor};
  }
  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;
export const CustomTabs = styled(Tabs)`
  & .MuiTabs-scrollButtons {
    &.Mui-disabled {
      opacity: 0.3;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    & .MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall {
      transform: rotate(180deg);
    }
  }
`;
