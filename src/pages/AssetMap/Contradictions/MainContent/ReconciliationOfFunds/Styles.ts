import { breakpoints, colors } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";
import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";
interface CustomButtonProps extends ButtonProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  margin: 0.1rem 0.2rem;
  height: 100%;
  align-items: stretch;

  @media (max-width: ${breakpoints.mini}) {
    flex-direction: column-reverse;
  }

  > div:nth-child(1) {
    flex-basis: 20%;
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  > div:nth-child(2) {
    flex-basis: 60%;
    padding-top: 0%;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
    }
    @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.tablet}) {
      flex-basis: 50%;
    }
    @media (min-width: ${breakpoints.mini}) {
      padding-top: 5%;
    }
  }

  > div:nth-child(3) {
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1%;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
    }
    @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.tablet}) {
      flex-basis: 50%;
      padding-top: 5%;
    }
  }
`;

export const StyedButton = styled(Button)`
  ${muiButtonStyle};
  padding: 5px;
  width: 100%;
  justify-content: center;

  @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`;

export const Divider = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 0.2rem;
`;

export const ButtonStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isSelected"].includes(prop),
})<CustomButtonProps>`
  background: ${(props) =>
    props.isSelected
      ? `linear-gradient(
to bottom,
${colors.lightGreen},
${colors.darkGreen}
) !important`
      : `linear-gradient(
to bottom,
${colors.lightBrown},
${colors.darkBrown}
) !important`};
  border: 2px solid ${colors.brownBorder};
  color: ${colors.brownBorder};
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s, box-shadow 0.2s, transform 0.2s;
  width: 70%;
  margin: 0.5rem auto 0.8rem auto;
  @media (max-width: ${breakpoints.mini}) {
    width: 100%;
    margin: 0 auto 0.8rem auto;
  }
  @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.tablet}) {
    margin: 0 auto 0.8rem auto;
    width: 80%;
  }
`;

export const IMG = styled.img`
  display: block;
  width: 70px;
  height: 80px;
  margin: 5rem auto 0 auto;
  @media (max-width: ${breakpoints.mini}) {
    margin: 1rem auto;
  }
`;
