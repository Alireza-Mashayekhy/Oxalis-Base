import { breakpoints } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 15px 10px;
  color: ${({ theme }) => theme.textColorSecondary};

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 25px 10px;
    align-items: unset;
  }

  > div:nth-child(1) {
    flex-basis: 50%;
    @media (min-width: ${breakpoints.tablet}) {
      text-align: left;
    }
    > div:nth-child(1) {
      margin-bottom: 0.8rem;
      text-align: right !important;
    }
  }
  > div:nth-child(2) {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: ${breakpoints.tablet}) {
      justify-content: flex-end;
    }

    > div {
      text-align: left;
      // margin-left: 1rem;
    }
  }
`;
