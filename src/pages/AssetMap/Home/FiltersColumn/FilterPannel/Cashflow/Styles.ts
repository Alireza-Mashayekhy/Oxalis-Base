import { Dropdown } from "primereact/dropdown";
import styled from "styled-components";

import UButton from "@/components/Button";
import { breakpoints } from "@/styles";
import { primeDropdownStyle } from "@/styles/mixins";

export const Container = styled.div`
  padding: 10px 5px;
  // margin-top: 5px;
  position: relative; /* This allows absolute positioning for its children */
  height: 100%; /* Ensure the component has a defined height */
  overflow: hidden;

  > div:nth-child(1) {
    display: none;
    @media (min-width: ${breakpoints.mobile}) {
      display: block;
    }
  }
`;
export const Button = styled(UButton)`
  width: 100%;
  margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
  margin: 4rem 0 0 0;
`;

export const SelectContainer = styled.div`
  margin: 1.5rem 0;
`;

export const DropdownStyle = styled(Dropdown)`
  ${primeDropdownStyle}
`;
