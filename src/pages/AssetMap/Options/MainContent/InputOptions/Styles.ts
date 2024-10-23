import { breakpoints, fonts } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div:nth-child(1) {
    flex-basis: 30%;
    text-align: center;
    font-weight: ${fonts.weight.semiBold};
    font-size: ${fonts.size.m};
  }

  > div:nth-child(2) {
    flex-basis: 70%;
  }
`;

export const OuterFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    flex-basis: 50%;
    margin-bottom: 1rem;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
    }

    @media (min-width: ${breakpoints.largeDesktop}) {
      flex-basis: 25%;
    }
  }
`;
