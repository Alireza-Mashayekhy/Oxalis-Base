import { fonts } from "@/styles";
import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  // position: absolute;
  // top: 10px;
  // left: 10px;
  padding: 5px;
  font-family: ${fonts.family.default};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor};
`;
