import { breakpoints, fonts } from "@/styles";
import { muiButtonStyle } from "@/styles/mixins";
import { Button as UButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";
import { Menu } from "primereact/menu";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  padding: 5px 10px;
  margin: 1rem;
  color: ${({ theme }) => theme.textColor};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const UploadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div:nth-child(1) {
    flex-basis: 20%;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
    }
    @media (min-width: ${breakpoints.mini} and max-width: ${breakpoints.mobile}) {
      flex-basis: 50%;
    }
  }
  > div:nth-child(2) {
    flex-basis: 25%;
    flex-shrink: 0;
    @media (max-width: ${breakpoints.mini}) {
      margin-bottom: 0.5rem;
      flex-basis: 100%;
    }
    @media (min-width: ${breakpoints.mini} and max-width: ${breakpoints.mobile}) {
      flex-basis: 50%;
      margin-bottom: 0.5rem;
    }
  }
  > div:nth-child(3) {
    flex-basis: 25%;
    flex-shrink: 0;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
      margin-bottom: 0.5rem;
    }
    @media (min-width: ${breakpoints.mini} and max-width: ${breakpoints.mobile}) {
      flex-basis: 50%;
      margin-bottom: 0.5rem;
    }
  }
  > div:nth-child(4) {
    flex-basis: 25%;
    flex-shrink: 0;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
      margin-bottom: 0.5rem;
    }
    @media (min-width: ${breakpoints.mini} and max-width: ${breakpoints.mobile}) {
      flex-basis: 50%;
      margin-bottom: 0.5rem;
    }
  }
`;
export const ProjectDescriptionFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin: 1rem auto 0.5rem auto;
  padding: 0 0.3rem;
  font-weight: ${fonts.weight.semiBold};
  @media (max-width: ${breakpoints.mobile}) {
    justify-content: center;
  }
  > div:nth-child(1) {
    flex-basis: 10%;
    flex-shrink: 0;
    text-align: center;
    border-radius: 3px;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
    }
  }
  > div:nth-child(2) {
    flex-basis: 90%;
    flex-shrink: 0;
    @media (max-width: ${breakpoints.mini}) {
      flex-basis: 100%;
    }
  }
`;

export const PeopleContainerFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 0.5rem auto;
  font-weight: ${fonts.weight.semiBold};
  // gap: 0.5rem;
  > div:nth-child(1) {
    flex-basis: 2%;
  }
  > div:nth-child(2) {
    flex-basis: 15%;
    text-align: right;
  }
  > div:nth-child(3) {
    flex-basis: 10%;
    text-align: center;
  }
  > div:nth-child(4) {
    flex-basis: 10%;
    text-align: center;
    margin-left: 4rem;
  }
  > div:nth-child(5) {
    flex-basis: 10%;
    text-align: center;
  }
  > div:nth-child(6) {
    flex-basis: 10%;
    text-align: center;
  }
  > div:nth-child(7) {
    flex-basis: 10%;
    text-align: center;
  }
  > div:nth-child(8) {
    flex-basis: 10%;
    text-align: center;
  }
`;

export const Span = styled.span`
  font-size: ${fonts.size.s};
`;

export const PeopleContainer = styled.div`
  // background-color: ${({ theme }) => theme.strippedRow};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 5px 10px;
  border-radius: 5px;
`;
export const PeopleFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  > div:nth-child(1) {
    // flex-basis: 5%;
  }
  > div:nth-child(2) {
    flex-basis: 20%;
  }
  > div:nth-child(3) {
    flex-basis: 75%;
  }
`;

export const Button = styled(UButton)`
  ${muiButtonStyle};
  color: ${({ theme }) => theme.border} !important;
  width: 100%;
`;

export const StyledCloudUploadIcon = styled(CloudUploadIcon)`
  color: ${({ theme }) => theme.border} !important;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-family: ${fonts.family.default};
  direction: ltr;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor};
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
`;
export const StyledMenu = styled(Menu)`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textColor};
  padding: 10px 20px;
`;

export const FileItemsButtonContainer = styled.div`
  display: flex;
  margin: 0.2rem auto;
  justify-content: flex-start;
  border-bottom: 1px dashed ${({ theme }) => theme.border};
  > div {
    border: 1px dotted ${({ theme }) => theme.border};
    border-radius: 5px;
    text-align: center;
    line-height: 30px; /* This should be the height of your div */
    height: 30px;
    // width: 30px;
    padding: 3px;
    margin: 0 0.5rem 0.5rem 0.5rem;
  }
`;
export const FileItemsContainer = styled.div`

`;

export const CommentItemsContainer = styled.div`
  padding: 5px 0;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.secondary};
  text-align: right;
  border-bottom: 1px dashed ${({ theme }) => theme.border};
  min-width:20vw;
`;

export const EmtpyMenuItem = styled.div`
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.secondary};
  text-align: right;
`
