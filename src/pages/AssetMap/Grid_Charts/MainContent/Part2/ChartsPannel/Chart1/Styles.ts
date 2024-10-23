import { breakpoints, fonts } from "@/styles";
import { Tooltip } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SwitchBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const StyledTooltip = styled(Tooltip)`
  &&& {
    font-family: ${fonts.family.default};
  }
`;

export const LegendContainer = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  font-family: ${fonts.family.default};
  font-size: ${fonts.size.m};
  padding: 10px 20px;
  position: absolute;
  top: -400px;
  left: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.mini}) {
    top: -20px;
    left: 10%;
    flex-direction: row;
    gap: 0.5rem;
  }
`;
export const LegendInnerFlex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.mini}) {
  }
`;
