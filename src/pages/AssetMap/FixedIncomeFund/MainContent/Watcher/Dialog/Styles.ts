import { breakpoints, fonts } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";
import { Button as UButton } from "@mui/material";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  direction: rtl;
  > button {
    flex-basis: 100%;
    margin: 0.1rem;

    @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
      flex-basis: calc(50% - 0.2rem);
      margin: 0.1rem;
    }
    @media (min-width: ${breakpoints.mobile}) {
      flex-basis: 20%;
      margin: 0;
    }
  }
`;

export const Button = styled(UButton)`
  ${muiButtonStyle};
  justify-content: center;
  font-size: ${fonts.size.l} !important;
  padding: 0.5rem 0.7rem !important;
  @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.tablet}) {
    padding: 0.5rem 2rem !important;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.1rem 0.5rem !important;
    flex-direction: column;
  }
`;
