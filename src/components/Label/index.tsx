import styled from "styled-components";
import {  fonts, breakpoints } from "@/styles";

// export const Label = styled(Typography).withConfig({
//   shouldForwardProp: (prop) =>
//     !["backgroundColor", "fontSize", "margin", "padding", "color"].includes(
//       prop
//     ),
// })<CustomTypographyProps>`
//   color: ${(props) => props.color} || ${colors.white};
//   background-color: ${(props) => props.backgroundColor};
//   padding: ${(props) => props.padding};
//   font-size: ${fonts.size.m};

//   && {
//     font-family: IRANSans;
//     margin: ${(props) => props.margin};
//     // to consider the input fontSize and not always use the
//     // default fontsize value
//     font-size: ${(props) => props.fontSize};
//   }
// `;

export const Label = styled.div<{
  color?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  color: ${({ theme, ...props }) => props.color || theme.textColor};

  font-size: ${fonts.size.xs};
  @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
    font-size: ${fonts.size.s};
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    font-size: ${fonts.size.m};
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${fonts.size.m};
  }

  // @media (max-width: ${breakpoints.mini}) {
  //   font-size: ${(props) => props.fontSize || fonts.size.s};
  // }
  // @media (max-width: ${breakpoints.mobile}) {
  //   font-size: ${(props) => props.fontSize || fonts.size.s};
  // }
  // @media (max-width: ${breakpoints.tablet}) {
  //   font-size: ${(props) => props.fontSize || fonts.size.s};
  // }
  // @media (max-width: ${breakpoints.desktop}) {
  //   font-size: ${(props) => props.fontSize || fonts.size.m};
  // }
  // @media (max-width: ${breakpoints.largeDesktop}) {
  //   font-size: ${(props) => props.fontSize || fonts.size.l};
  // }
  // @media (max-width: ${breakpoints.xlDesktop}) {
  //   font-size: ${(props) => props.fontSize || fonts.size.xl};
  // }
`;
