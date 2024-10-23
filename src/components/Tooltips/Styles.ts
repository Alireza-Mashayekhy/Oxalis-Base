import { Tooltip } from "primereact/tooltip";
import styled from "styled-components";

export const StyledTooltip = styled(Tooltip)`
  background-color: ${({ theme }) => theme.primary};
  color:${({ theme }) => theme.textColor};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;

  &:hover {
    background-color: #5cadff;
    color: white;
  }
`;
