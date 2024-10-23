import styled from "styled-components";
import { colors, hiddenScroll } from "@/styles";

export const FlexContainer = styled.div`
  display: flex;
  direction: row-reverse;
  justify-content: center;
`;
export const ChartContainer = styled.div`
  ${hiddenScroll};
  width: 100%;
  height: 100%;
`;
