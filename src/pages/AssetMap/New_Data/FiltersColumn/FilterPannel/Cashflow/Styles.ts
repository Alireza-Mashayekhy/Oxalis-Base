import styled from "styled-components";

import UButton from "@/components/Button";
import { breakpoints } from "@/styles";

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
margin: 3rem 0 0 0;
gap:10px;
display:flex;
flex-direction:column; 
`;

export const SelectContainer = styled.div`
  margin: 1.5rem 0;
`;
export const StyledDatePickerRange = styled.div`
 
 input{
min-width:320px ;
max-width:330px ;
margin:10px auto;
display:block;

  border: 1px solid #4788fd;
    border-radius: 5px;
    padding: 10px;
    background-color:#333;
    transition: background-color 0.3s;
    border: 1px solid #656364;
    border-radius: 5px;
  background-color: #000000;
  color: #ffffff;
  line-height: 1.5;
  padding: 18px;
  font-family: IRANSans;
  text-align: center;
 }
 `;