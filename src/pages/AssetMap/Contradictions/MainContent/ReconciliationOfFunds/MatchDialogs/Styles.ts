import { Button } from "@mui/material";
import styled from "styled-components";

import { breakpoints, fonts } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";

export const StyedButton = styled(Button)`
  ${muiButtonStyle};
  justify-content: center;
  font-size: ${fonts.size.l} !important;
  padding: 1rem 5rem !important;
  @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.tablet}) {
    padding: 0.5rem 2rem !important;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.1rem 0.5rem !important;
    flex-direction: column;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flexdirection: row;
  width: 100%;
  justify-content: space-around;
  > button {
    margin: 0.1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
    > button {
      margin: 0.2rem;
    }
  }
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    > button {
      margin: 0.5rem;
    }
  }
  @media (min-width: ${breakpoints.tablet}) {
    justify-content: center;
    > button {
      margin: 2rem;
    }
  }
`;

export const Gap = styled.div`
  flex: 1 1 auto;
`;
