import { Button as UButton } from "@mui/material";
import { InputTextarea } from "primereact/inputtextarea";
import styled from "styled-components";

import { fonts } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";

export const Container = styled.div`
  direction: rtl;
  color: ${({ theme }) => theme.textColor};
  font-weight: ${fonts.weight.semiBold};

  > div:nth-child(3) {
    text-align: left;
  }
`;
export const StyledText = styled(InputTextarea)`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  min-height: 300px;
  font-family: ${fonts.family.default};
  padding: 10px;
`;

export const Button = styled(UButton)`
  ${muiButtonStyle};
  width: 30%;
`;
