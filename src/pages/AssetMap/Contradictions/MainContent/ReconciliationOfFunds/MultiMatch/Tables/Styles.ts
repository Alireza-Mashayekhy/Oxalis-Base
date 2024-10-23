import { breakpoints } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  margin: 1rem;

  > div {
    margin: 0 auto 3rem auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0;
  }
`;
export const H2 = styled.h2`
  margin: 1rem;
  color: ${({ theme }) => theme.textColor} !important;
`;
