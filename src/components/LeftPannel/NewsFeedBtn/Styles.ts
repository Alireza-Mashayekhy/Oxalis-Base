import styled from "styled-components";
import { breakpoints, colors, fonts } from "@/styles";

export const Container = styled.div`
  padding: 1rem 0.4rem;
  > h4:nth-child(1) {
    margin-bottom: 1rem;
    text-align: center;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
`;
export const NormalSizeContainer = styled.div`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const SmallContainer = styled.div`
  display: none;
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledLi = styled.li`
  position: relative;
  padding-right: 20px;
  margin: 2px 0;
  font-size: ${fonts.size.s};
  font-weight: ${fonts.weight.semiBold};
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    border-radius: 5%;
    background-color: ${({ theme }) =>
      theme.hover}; /* Example background color */
  }

  &::before {
    content: "";
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    width: 7px;
    height: 7px;
    border-radius: 30%;
    background-color: ${colors.palette.red[300]};
  }
`;
