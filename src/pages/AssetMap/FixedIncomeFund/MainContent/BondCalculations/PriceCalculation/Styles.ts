import { Button as UButton } from "@mui/material";
import styled from "styled-components";

// import UButton from "@/components/Button";
import { Input as UInput } from "@/components/FormElements";
import { breakpoints, colors, fonts } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";

export const OuterFlexContainer = styled.div`
  display: flex;
  margin-top: 0.6rem;
  min-height: 30vh;
  color: ${({ theme }) => theme.textColor};
  gap: 2;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
  > div {
    flex-basis: 50%;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 100%;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div:last-child {
    text-align: left;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // min-height: 10rem;
  border-right: 4px solid ${colors.chartsColor.blue};
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    margin: 2rem auto 1rem auto;
    border-top: 1px dashed ${colors.chartsColor.blue};
    border-bottom: 1px dashed ${colors.chartsColor.blue};
    border-left: 4px solid ${colors.chartsColor.blue};
  }

  > div:nth-child(3) {
  }
`;

export const BoldBlue = styled.div`
  color: ${colors.chartsColor.blue};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.semiBold};
`;

export const BoldWhite = styled.div`
  color: ${({ theme }) => theme.textColor};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.semiBold};
  text-align: center;
`;

export const BoldSpan = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-weight: ${fonts.weight.semiBold};
  font-size: ${fonts.size.m};
  text-align: center;
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    margin-bottom: 0.2rem;
  }
`;

export const InnerFlexContanier = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  margin: 0.5rem auto;
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: start;
  }
  > div:nth-child(2) {
    flex-basis: 70%;
  }
  > div:nth-child(1) {
    font-weight: ${fonts.weight.semiBold};
    flex-basis: 30%;
    text-align: center;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 20%;
    }
  }
`;

export const Input = styled(UInput)`
  width: 100%;
`;
// export const FormButton = styled(UButton)`
//   width: 50%;
//   @media (max-width: ${breakpoints.mobile}) {
//     width: 90%;
//   }
//   display: inline-block;
//   background-color: ${({ theme }) => theme.secondary};
//   color: ${({ theme }) => theme.textColor};
// `;

export const FormButtonContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 1.5rem;
  margin-left: 2rem;
  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
  }
`;

export const Button = styled(UButton)`
  ${muiButtonStyle};
  padding: 10px 50px !important;
  width: 100%;
  @media (min-width: ${breakpoints.tablet}) {
    width: 80%;
    margin-right: auto;
  }
`;
