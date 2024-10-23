import { breakpoints } from "@/styles";
import styled from "styled-components";

export const Container = styled.div`
  // display: flex;
  // flex-direction: row;
  height: 100%;
  width: 100%;

  // justify-content: space-between;
  // align-items: center;
  // position: relative;
  // padding: 0px 10px;

  // > div:nth-child(1) {
  //   // background-color: green;
  // }
  // > div:nth-child(2) {
  //   // background-color: red;
  // }

  // // @media (min-width: ${breakpoints.tablet}) {
  // //   flex-direction: column;
  // //   padding: 25px 10px;
  // // }
`;

export const HeaderContainer = styled.div`
height:15%;
display:flex;
justify-content:space-between;
padding :10px 10px 0 10px;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 85%;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0px 10px;

  > div:nth-child(1) {
    // background-color: green;
    flex-basis:40%;
  }
  > div:nth-child(2) {
    // background-color: red;
    flex-basis:60%;

  }

  // @media (min-width: ${breakpoints.tablet}) {
  //   flex-direction: column;
  //   padding: 25px 10px;
  // }
`;
export const MenuContainer = styled.div`
  cursor: pointer;
  // position: absolute;
  // top: 5px;
  // left: 5px;
`;
export const ChartContainer = styled.div`
  width: 100%;
  height: 80%;
`;
