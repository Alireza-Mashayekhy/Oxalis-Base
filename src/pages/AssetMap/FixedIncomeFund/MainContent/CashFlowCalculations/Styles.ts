import { muiButtonStyle, narrowScroll } from "@/styles/mixins";
import styled from "styled-components";
import { ButtonProps, Button as UButton } from "@mui/material";
import { colors } from "@/styles";
interface CustomButtonProps extends ButtonProps {
  isSelected?: boolean;
}
export const Button = styled(UButton).withConfig({
  shouldForwardProp: (prop) => !["isSelected"].includes(prop),
})<CustomButtonProps>`
  ${muiButtonStyle};
  width: 100%;
  background: ${(props) =>
    props.isSelected
      ? `linear-gradient(
to right,
${colors.lightGreen},
${colors.darkGreen},
${colors.lightGreen}
) !important`
      : ""};
  color: ${(props) =>
    props.isSelected
      ? `${colors.white} !important`
      : ` ${({ theme }) => theme.textColor}`};
`;

export const HeaderContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  > button {
    flex-basis: 45%;
  }
`;

export const Container = styled.div`
  height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;
  ${narrowScroll};
`;
