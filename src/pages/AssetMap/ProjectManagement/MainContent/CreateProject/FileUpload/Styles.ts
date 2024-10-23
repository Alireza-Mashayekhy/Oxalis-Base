import { breakpoints, fonts } from "@/styles";
import styled from "styled-components";
import { Button as UButton } from "@mui/material";
import { muiButtonStyle } from "@/styles/mixins";

export const Container = styled.div`
  direction: rtl;
`;

export const InnerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin: 1rem 1rem;
  padding: 0 0.3rem;
  font-weight: ${fonts.weight.semiBold};
  color: ${({ theme }) => theme.textColor};

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
  > div:nth-child(1) {
    flex-basis: 10%;
    flex-shrink: 0;
    text-align: center;
    border-radius: 3px;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
    }
  }
  > div:nth-child(2) {
    flex-basis: 90%;
    flex-shrink: 0;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
    }
  }
`;

export const pplFlexContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  color: ${({ theme }) => theme.textColor};
  font-weight: ${fonts.weight.semiBold};

  margin-bottom: 0.2rem;
  > div:nth-child(1) {
    flex-basis: 10%;
    text-align: center;
  }
  > div:nth-child(2) {
    flex-basis: 45%;
    text-align: center;
    display: flex;
  }
  > div:nth-child(3) {
    flex-basis: 5%;
    text-align: center;
  }
  > div:nth-child(4) {
    flex-basis: 2%;
    text-align: center;
  }
  > div:nth-child(5) {
    flex-basis: 15%;
    text-align: center;
  }
  > div:nth-child(6) {
    flex-basis: 15%;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  text-align: left;
  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
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
