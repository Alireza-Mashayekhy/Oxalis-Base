import { Button as MUIButton,ButtonProps } from "@mui/material";
import styled from "styled-components";

import { breakpoints, colors, fonts } from "@/styles";
import { muiButtonStyle, narrowScroll } from "@/styles/mixins";

interface CustomButtonProps extends ButtonProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  ${narrowScroll};
  // height: 50vh;
`;

export const TopContainer = styled.div`
  width: 60%;
  margin: 0 auto 1rem auto;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.mini}) {
    width: 100%;
  }
`;

export const SymbolContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem;
  color: ${({ theme }) => theme.textColor};
  font-size: ${fonts.size.l};
  font-weight: ${fonts.weight.semiBold};
  justify-content: start;
  align-items: center;
  > div:nth-child(1) {
    flex-basis: 20%;
    text-align: center;
  }
  > div:nth-child(2) {
    flex-basis: 60%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  // margin: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  // @media (max-width: ${breakpoints.mobile}) {
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  // }
  > button:nth-child(1) {
    margin: 0 auto 1rem auto;
    flex-basis: 90%;
    @media (min-width: ${breakpoints.mini} and max-width: ${breakpoints.mobile}) {
      flex-basis: 45%;
    }
    @media (min-width: ${breakpoints.mobile}) {
      flex-basis: 40%;
      margin-bottom: 0;
    }
  }
  > button:nth-child(2) {
    flex-basis: 90%;
    margin: 0 auto;
    @media (min-width: ${breakpoints.mini} and max-width: ${breakpoints.mobile}) {
      flex-basis: 45%;
    }
    @media (min-width: ${breakpoints.mobile}) {
      flex-basis: 40%;
    }
  }
`;

export const Button = styled(MUIButton).withConfig({
  shouldForwardProp: (prop) => !["isSelected"].includes(prop),
})<CustomButtonProps>`
  margin: 1rem;
  ${muiButtonStyle};
  width: 100%;
  background: ${(props) =>
    props.isSelected
      ? `linear-gradient(
to right,
${colors.lightGreen},
${colors.darkGreen},
${colors.lightGreen}
) !important`
      : ""};
  color: ${(props) =>
    props.isSelected
      ? `${colors.white} !important`
      : ` ${({ theme }) => theme.textColor}`};
`;
