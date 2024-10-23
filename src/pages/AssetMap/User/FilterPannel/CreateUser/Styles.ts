import styled from "styled-components";

import UButton from "@/components/Button";
import { Input as UInput } from "@/components/FormElements";

export const Container = styled.div`
  margin: 2rem 0.5rem 1rem 0.5rem;

`;

export const Input = styled(UInput)`
  width: 100%;
`;

export const Button = styled(UButton)`
 width: 100%;
  margin: 3rem 0;
`;
