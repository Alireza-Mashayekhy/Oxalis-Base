import styled from "styled-components";

export const NewsContainer = styled.div`
  margin-top: 1rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: start;
  width: 100%;
  padding-top: 5px;
  border-radius: 5px;
`;

export const Container = styled.div`
  margin : 0.5rem 0.5rem;
`;

export const FlexItem = styled.div`
  padding: 2px;
`;
