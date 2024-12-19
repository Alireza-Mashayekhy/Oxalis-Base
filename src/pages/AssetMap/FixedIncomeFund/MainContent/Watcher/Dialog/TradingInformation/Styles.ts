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

export const TitleContainer = styled.div`
  width: 100%;
  height: 5vh;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.textColor};
  font-weight: ${fonts.weight.semiBold};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${breakpoints.mobile}) {
    height: 10vh;
    margin: 1rem 0;
    backgrund-color: ${({ theme }) => theme.primary};
  }
`;

export const OutterFlexContainer = styled.div`
  display: flex !important;
  direction: rtl;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
export const InnerFlexContainer = styled.div`
  flex-basis: calc(25% - 1rem);
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > span {
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    font-weight: ${fonts.weight.semiBold};
    margin-bottom: 0.5rem;
  }
  > table {
    background-color: red;
  }
  > .MuiTableContainer-root {
    background-color: red;
  }
`;

export const EachRowFlexContainer = styled.div`
  display: flex !important;
  align-items: center;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 0.2rem;
  color: ${({ theme }) => theme.textColor};
  > div:nth-child(1) {
    flex-basis: 50%;
    text-align: right;
    padding-left: 0.5rem;
    font-weight: ${fonts.weight.semiBold};
    font-size: ${fonts.size.l};
  }
  > div:nth-child(2) {
    flex-basis: 50%;
    text-align: right;
    padding-right: 0.5rem;
    font-size: ${fonts.size.l};
  }
`;
