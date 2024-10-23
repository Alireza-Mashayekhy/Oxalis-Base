import { breakpoints, colors, fonts } from "@/styles";
import { muiButtonStyle, narrowScroll } from "@/styles/mixins";
import { Button as UButton } from "@mui/material";

import styled from "styled-components";

export const Button = styled(UButton)`
  ${muiButtonStyle};
  width: 100%;

  &#calculationBtn {
    width: 75%;
    background: linear-gradient(
      to bottom,
      ${colors.lightGreen},
      ${colors.darkGreen}
    );
    color: ${colors.white};
    @media (max-width: ${breakpoints.mobile}) {
      width: 90%;
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
  margin: 1rem auto;
  color: ${({ theme }) => theme.textColor};
  font-size: ${fonts.size.l};
  justify-content: center;
  align-items: center;
`;

export const SymbolContainerRight = styled(SymbolContainer)`
  display: flex;
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: start;
  }

  > div:nth-child(1) {
    font-weight: ${fonts.weight.semiBold};
    flex-basis: 20%;
    text-align: center;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 10%;
    }
  }
  > div:nth-child(2) {
    flex-basis: 60%;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 80%;
    }
  }
`;
export const SymbolContainerLeft = styled(SymbolContainer)`
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row-reverse;
    justify-content: start;
  }
  > div:nth-child(1) {
    flex-basis: 60%;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 80%;
    }
  }
  > div:nth-child(2) {
    flex-basis: 20%;
    text-align: center;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 10%;
    }
  }
`;

export const OuterFlexContainer = styled.div`
  display: flex;
  > div {
    flex-basis: 50%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
export const OuterFlexContainer2 = styled(OuterFlexContainer)`
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
  }
`;

export const CalculationButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const RightSidePanel = styled.div`
  margin-top: 0.5rem;
  height: 30vh;
  overflow-y: auto;
  overflow-x: hidden;
  ${narrowScroll};
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 2rem;
  }
`;

export const InnerFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: ${fonts.weight.semiBold};
`;

export const HeaderDiv = styled.div`
  padding: 5px 7px;
  background: linear-gradient(
    to bottom,
    ${colors.lightGreen},
    ${colors.darkGreen}
  );
  color: ${colors.white};
  // background-color: #3c6e71;
  // color: ${({ theme }) => theme.textColor};
  flex-basis: 45%;
  text-align: center;
  border-radius: 3px;
`;

export const BodyDiv = styled.div`
  padding: 5px;
  background: linear-gradient(
    to bottom,
    ${colors.lightGray},
    ${colors.darkGray}
  );
  color: ${colors.white};
  flex-basis: 45%;
  text-align: center;
  border-radius: 3px;
`;
export const IMG = styled.img`
  display: block;
  width: 30px;
  height: 35px;
  margin: 0 auto;
  @media (max-width: ${breakpoints.mini}) {
    margin: 1rem auto;
    width: 25px;
    height: 30px;
  }
`;
export const IMG1 = styled(IMG)`
  width: 40px;
  height: 50px;
  @media (max-width: ${breakpoints.mini}) {
    width: 30px;
    height: 40px;
    margin: 0.2rem;
  }
`;
