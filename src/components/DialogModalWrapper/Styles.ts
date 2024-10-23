import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import { narrowScroll } from "@/styles/mixins";
import { DialogContent, DialogTitle } from "@mui/material";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import { fonts } from "@/styles";

export const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor};
    // opacity: 0.7;
    box-shadow: none;
    color: white;
    height: 100%;
  }
  & .MuiBackdrop-root {
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.7;
  }
  & .MuiDialog-paper {
    width: 100%; // Ensure the paper fills the full width
    max-width: none; // Remove the maximum width constraint
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  ${narrowScroll};
`;

export const StyledCancelPresentationOutlinedIcon = styled(
  CancelPresentationOutlinedIcon
)`
  color: ${({ theme }) => theme.textColor};
`;

export const StyledDialogTitle = styled(DialogTitle)`
  text-align: center;
  font-family: ${fonts.family.default} !important;
  color: ${({ theme }) => theme.textColor};
`;
