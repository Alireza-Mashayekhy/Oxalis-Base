import styled from "styled-components";
import { colors, fonts } from "@/styles";

export const P = styled.p`
  font-weight: ${fonts.weight.semiBold};
`;

export const TooltipContainer = styled.div`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor};
  border: 1px dashed ${({ theme }) => theme.border};
  border-radius: 5px;
  text-align: center;
`;

export const LegendContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;
