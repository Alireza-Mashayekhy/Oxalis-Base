import { narrowScroll } from "@/styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 80vh;
  ${narrowScroll};
  > div {
    flex-basis: 95%;
  }
`;
