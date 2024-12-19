import styled from "styled-components";

import { breakpoints, fonts } from "@/styles";
import { narrowScroll } from "@/styles/mixins";

export const Container = styled.div`
  width: 100%;
  height: 85%;
  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 4px;
  margin: 1rem auto;
  overflow: auto;
  ${narrowScroll};
`;

export const OutterFlexContainer = styled.div`
  display: flex !important;
  direction: rtl;
  flex-direction: row;

  justify-content: space-between;
  align-items: stretch;
  > div:nth-child(2) {
    > div:last-child {
      margin-top: auto;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const InnerFlexContainer = styled.div`
  flex-basis: calc(50% - 1rem);
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: ${({ theme }) => theme.textColor};
  `;
  
  export const EachRowFlexContainer = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex !important;
  align-items: center;
  margin-bottom: 0.3rem;
  > div:nth-child(1) {
    flex-basis: 30%;
    text-align: left;
    padding-left: 0.5rem;
    font-weight: ${fonts.weight.semiBold};
    font-size: ${fonts.size.m};
  }
  > div:nth-child(2) {
    flex-basis: 70%;
    text-align: right;
    padding-right: 0.5rem;
    font-size: ${fonts.size.m};
  }
`;
