import { TableCell } from "@mui/material";
import styled from "styled-components";

import { fonts } from "@/styles";


const StyledColumn = styled(TableCell)`
  color: ${({ theme }) => theme.textColor} !important;
  background-color: ${({ theme }) => theme.strippedRow} !important;
  font-family: ${fonts.family.default} !important;
  text-align: center !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledHesderCell = styled(StyledColumn)`
  width: max-content;
  padding: 0 0px;
  font-size: ${fonts.size.s} !important;
  font-weight: ${fonts.weight.semiBold} !important;
`;

export const StyledBodyCell = styled(StyledColumn)`
  width: max-content;
  padding: 5px 0 !important;
  font-size: ${fonts.size.s} !important;
  font-weight: ${fonts.weight.semiBold} !important;
`;
