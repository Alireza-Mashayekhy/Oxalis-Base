import { breakpoints, fonts } from "@/styles";
import { muiButtonStyle, narrowScroll } from "@/styles/mixins";
import { Button as UButton } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  overflow-y: auto;
  overflow-x: hidden;
  height: 60vh;
  ${narrowScroll};
`;

export const FlexContainer = styled.div`
  > div:last-child {
    margin-bottom: 0;
  }
`;

export const InnerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin: 1rem 1rem;
  padding: 0 0.3rem;
  font-weight: ${fonts.weight.semiBold};
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
  > div:nth-child(1) {
    flex-basis: 10%;
    flex-shrink: 0;
    text-align: center;
    border-radius: 3px;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 20%;
    }
  }
  > div:nth-child(2) {
    flex-basis: 55%;
    flex-shrink: 0;
    @media (max-width: ${breakpoints.tablet}) {
      flex-basis: 75%;
    }
  }
  > div:nth-child(3) {
    flex-basis: 5%;
    flex-shrink: 0;
  }
  > div:nth-child(4) {
    padding: 0 10px;
    flex-basis: 30%;
    flex-shrink: 0;
    @media (max-width: ${breakpoints.tablet}) {
      flex-basis: 0%;
    }
  }
`;

export const Divider = styled.div``;

export const ButtonContainer = styled.div`
  text-align: left;
  margin-left: 0.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    margin: 0 auto;
  }
`;

export const Button = styled(UButton)`
  ${muiButtonStyle};
  width: 30%;
  padding: 10px !important;
  dispaly: block !important;
  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`;
