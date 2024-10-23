import styled from "styled-components";

import { breakpoints, colors } from "@/styles";
import { Button as UButton } from "@mui/material";
import { muiButtonStyle, narrowScroll } from "@/styles/mixins";

export const Container = styled.div`
  padding: 5px 5px;
  // margin-top: 5px;
  height: 100%; /* Ensure the component has a defined height */
  overflow-x: hidden;
  overflow-y: auto;
  ${narrowScroll};

  > div:nth-child(1) {
    display: none;
    @media (min-width: ${breakpoints.mobile}) {
      display: block;
    }
  }
`;
export const Button = styled(UButton)`
  ${muiButtonStyle};
  display: block !important;
  width: 100% !important;
`;

export const ButtonContainer = styled.div`
  // position: sticky;
  margin: 1rem 0;
  // @media (min-width: ${breakpoints.tablet}) {
  //   position: absolute;
  //   bottom: 0; /* Aligns the button to the bottom */
  //   left: 0; /* Aligns the button to the left */
  //   width: 100%;
  //   padding: 0 10px;
  // }
  > button:nth-child(1) {
    background-color: ${colors.palette.blue[300]};
    border: 1px solid ${({ theme }) => theme.border};
    color: white;
    margin-bottom: 1rem;
  }
  > button:nth-child(2) {
    border: 1px solid ${colors.palette.blue[300]};
    color: ${({ theme }) => theme.textColor};
  }
`;

export const SelectContainer = styled.div`
  margin: 1rem 0;
`;

export const DateContainer = styled.div`
  margin: 0.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
  }
  > div {
    flex-basis: 45%;
  }
`;
