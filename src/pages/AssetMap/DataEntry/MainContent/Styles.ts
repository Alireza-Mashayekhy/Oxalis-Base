import { fonts } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  font-family: ${fonts.family.default};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor};
`;
