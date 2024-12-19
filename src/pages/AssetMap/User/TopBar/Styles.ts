import styled from "styled-components";

import { breakpoints, fonts } from "@/styles";

export const FlexItem = styled.div`
  flex-basis: 50%;
  @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.tablet}) {
    flex-basis: calc(30%);
  }
  @media (min-width: ${breakpoints.tablet}) {
    flex-basis: calc(20%);
  }
`;

export const Gap = styled.div`
  width: 0;
  flex-grow: 1;
`;

export const H3 = styled.h3`
  text-align: center;
  font-size: ${fonts.size.m};
`;
