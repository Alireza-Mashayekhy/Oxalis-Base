import { breakpoints, colors, fonts } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";
import { Button as UButton } from "@mui/material";
import styled from "styled-components";

export const Button = styled(UButton)`
  ${muiButtonStyle};
  width: 100%;

  &#uploadBtn {
    padding: 10px !important;
    display: flex;
    justify-content: end;
    @media (max-width: ${breakpoints.mobile}) {
      justify-content: space-around;
    }
    > span:nth-child(2) {
      margin-right: 20%;
      color: ${({ theme }) => theme.textColor};
    }
  }

  &#portfo {
    padding: 20px !important;
    width: 50% !important;
    background: linear-gradient(
      to bottom,
      ${colors.lightGreen},
      ${colors.darkGreen}
    );
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-color: ${colors.white};
    display: flex;
    justify-content: end;
    @media (max-width: ${breakpoints.mini}) {
      width: 90% !important;
    }
    > span {
      font-size: ${fonts.size.xl};
      color: ${colors.white};
    }
    > span:nth-child(2) {
      margin-right: 25%;
    }
  }
  &.footerBtns {
    padding: 10px !important;
    background:${({ theme }) => theme.primary};
  }

  &#saveBtn {
    display: flex;
    justify-content: end;
    > span:nth-child(2) {
      margin-right: 25%;
      color: ${({ theme }) => theme.textColor};
      @media (max-width: ${breakpoints.mini}) {
        margin-right: 35%;
      }
    }
    @media (max-width: ${breakpoints.mini}) {
      // justify-content: center;
    }
  }
`;

export const HeaderContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  > button {
    flex-basis: 40%;
  }
`;
export const SymbolContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem;
  color: ${({ theme }) => theme.textColor};
  font-size: ${fonts.size.l};
  justify-content: center;
  align-items: center;
`;

export const SymbolContainerRight = styled(SymbolContainer)`
  > div:nth-child(1) {
    flex-basis: 20%;
    text-align: center;
  }
  > div:nth-child(2) {
    flex-basis: 60%;
  }
`;
export const SymbolContainerLeft = styled(SymbolContainer)`
  > div:nth-child(1) {
    flex-basis: 60%;
  }
  > div:nth-child(2) {
    flex-basis: 20%;
    text-align: center;
  }
`;

export const OuterFlexContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    flex-basis: 45%;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 100%;
      margin: 1rem;
    }
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const InnerFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  > div:nth-child(1) {
    font-weight: ${fonts.weight.semiBold};
    font-size: ${fonts.size.m};
  }
  div:nth-child(2) {
    flex-basis: 50%;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 70%;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
  @media (max-width: ${breakpoints.mini}) {
    flex-direction: column;
  }
  > button {
    flex-basis: 25%;
    @media (max-width: ${breakpoints.mini}) {
      margin-bottom: 1rem;
    }
  }
`;

export const PortfoButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto 1rem auto;
`;
