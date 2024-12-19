import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Button as UButton } from "@mui/material";
import styled from "styled-components";

import { breakpoints, colors, fonts } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.textColor};
  font-weight: ${fonts.weight.semiBold};
  @media (max-width: ${breakpoints.mini}) {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }

  > div:nth-child(1) {
    flex-basis: 20%;
    text-align: left;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
      text-align: right;
      padding-right: 20px;
      margin-bottom: 0.1rem;
    }
  }
  > div:not(:first-child) {
    flex-basis: 25%;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
      margin-bottom: 0.5rem;
    }
    // overflow: hidden;
    // background-color: red;
  }
`;

export const Button = styled(UButton)`
  ${muiButtonStyle};
  color: ${colors.white} !important;
  width: 40%;
  @media (max-width: ${breakpoints.mini}) {
    width: 80%;
  }
  padding: 20px !important;
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${colors.lightGreen},
    ${colors.darkGreen}
  );
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-color: ${colors.white};
  > span:nth-child(2) {
    margin-right: 20%;
    color: ${colors.white};
  }
`;

export const RotatingIcon = styled(NotificationsActiveIcon)`
  display: inline-block;
  animation: sway 0.7s linear infinite alternate;

  @keyframes sway {
    0% {
      transform: rotate(-10deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto auto auto;
`;
