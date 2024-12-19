import styled from "styled-components";

import { fonts } from "@/styles";

// Define your styled text component
export const StyledText = styled.text`
  fill: ${({ theme }) => theme.textColor};
  text-anchor: middle;
  dominant-baseline: central;
  font-size: ${fonts.size.l};
  font-weight: ${fonts.weight.semiBold};
`;
