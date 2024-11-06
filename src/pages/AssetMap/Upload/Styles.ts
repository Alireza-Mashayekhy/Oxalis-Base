import styled from 'styled-components';
import { breakpoints, colors } from '@/styles';
import { Button, ButtonProps, SvgIconProps } from '@mui/material';
import {
    muiButtonStyle,
    narrowScroll,
    primeReactTreeTableStyle,
} from '@/styles/mixins';
import UIcon from '@mdi/react';
import CloudUploadTwoToneIcon from '@mui/icons-material/CloudUploadTwoTone';
import { TreeTable } from 'primereact/treetable';
interface CustomButtonProps extends ButtonProps {
    fontColor?: string;
}

interface CustomIconProps extends SvgIconProps {
    fontColor?: string; // Define the custom prop
}
interface ContainerProps {
    borderColor?: string;
}

export const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => !['borderColor'].includes(prop),
})<ContainerProps>`
    border: 1px dashed
        ${({ theme, borderColor }) => borderColor || theme.border};

    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    // justify-content: space-around;
    direction: rtl;
    margin: 1rem auto 2rem auto;
    width: 95%;
    border-radius: 5px;
    background-color:;
    @media (min-width: ${breakpoints.tablet}) {
        height: 95%;
    }
`;

export const FileTitleContainer = styled.div`
    flex-basis: 20%;

    > div {
        margin-bottom: 0.5rem;
    }
`;
export const TextContainer = styled.div`
    flex-basis: 10%;
    color: ${({ theme }) => theme.textColor};
`;
export const IMG = styled.img`
    width: 80px;
    height: 80px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    cursor: pointer;

    @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
        width: 100px;
        height: 100px;
    }

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        width: 150px;
        height: 150px;
    }
    @media (min-width: ${breakpoints.tablet}) {
        width: 200px;
        height: 200px;
    }
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const UploadContainer = styled.div`
    // flex-grow: 1;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    // flex-basis: 40%;
    padding-top: 1rem;

    > div:nth-child(1) {
        margin-bottom: 0.5rem;
    }
`;

export const StyledButton = styled(Button).withConfig({
    shouldForwardProp: (prop) => !['fontColor'].includes(prop),
})<CustomButtonProps>`
    color: ${(props) => props.fontColor} !important;
    ${muiButtonStyle};
    width: 50%;
    margin: 1rem !important;
    border: 1px solid ${(props) => props.fontColor} !important;
    @media (max-width: ${breakpoints.mini}) {
        width: 100% !important;
    }
    @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
        width: 80% !important;
    }
`;

export const ButtonContainer = styled.div``;

export const Span = styled.span`
    color: ${colors.palette.red[300]};
    margin-top: 0.5rem;
`;

export const SCloudUploadIcon = styled(CloudUploadTwoToneIcon).withConfig({
    shouldForwardProp: (prop) => !['fontColor'].includes(prop),
})<CustomIconProps>`
    color: ${(props) => props.fontColor} !important;
    font-size: 2rem !important;
    animation: slideUp 2s linear infinite;
    @keyframes slideUp {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }
`;

export const SelectText = styled.span`
    color: ${(props) => props.color} !important;
`;

export const TableContainer = styled.div`
    ${narrowScroll};
    overflow: auto;
    height: 45vh;
    width: 100%;
    @media (max-width: ${breakpoints.mobile}) {
        height: 70vh;
    }
`;

export const StyledTreeTable = styled(TreeTable)`
    ${primeReactTreeTableStyle};
`;

export const Icon = styled(UIcon)`
    width: 20px;
`;
