import { InputTextarea } from "primereact/inputtextarea";
import styled from "styled-components";

import { fonts } from "@/styles";



export const StyledText = styled(InputTextarea)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
//   min-height: 100px;
  font-family: ${fonts.family.default};
  padding: 10px;
  border-radius:5px;
`;


