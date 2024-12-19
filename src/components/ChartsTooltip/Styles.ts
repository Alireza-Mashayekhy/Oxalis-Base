import styled from "styled-components";

import { fonts } from "@/styles";

export const Container = styled.div`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor};
  // border: 1px dashed ${({ theme }) => theme.border};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  text-align: center;
  font-family: ${fonts.family.default};
`;

export const TitleText = styled.div`
  font-size: ${fonts.size.m};
  font-weight: ${fonts.weight.semiBold};
  margin-bottom: 0.5rem;
`;

export const Value = styled(TitleText)``;

export const SecondContainer = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor};
  padding: 20px 30px;
  // border: 1px dashed ${({ theme }) => theme.border};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  font-weight: ${fonts.weight.semiBold};
  text-align: center;
  font-family: ${fonts.family.default};

  > div:nth-child(2) {
    margin: 1rem auto;
    text-align: center;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  direction: row-reverse;
  justify-content: center;
  gap: 0.2rem;
  margin-bottom: 0.5rem;
`;

export const ThirdContainer = styled.div`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor}; 
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
  text-align: center;
  font-family: ${fonts.family.default};


`;
