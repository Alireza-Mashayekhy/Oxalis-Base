import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.hover};
  color: ${({ theme }) => theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
