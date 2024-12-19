import styled from "styled-components";

import { narrowScroll } from "@/styles/mixins";

export const Container = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 80vh;
  ${narrowScroll};
  > div {
    flex-basis: 95%;
  }
`;
