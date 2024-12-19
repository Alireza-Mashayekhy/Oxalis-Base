import styled from "styled-components";

import { breakpoints } from "@/styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  direction: rtl;

  > div:nth-child(1) {
    flex-basis: 20%;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 100%;
      margin: 1rem;
    }
  }
  > div:nth-child(2) {
    flex-basis: 60%;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 100%;
    }
  }
  > div:nth-child(3) {
    flex-basis: 20%;
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }
`;

export const IMG1 = styled.img`
  display: block;
  margin: 0 auto;
  width: 70px;
  height: 80px;
  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 50px;
  }
`;
