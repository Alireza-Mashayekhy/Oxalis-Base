import { AutoComplete } from 'primereact/autocomplete';
import { Dialog } from 'primereact/dialog';
import styled from 'styled-components';

import { inputStyle } from '@/styles';

export const Container = styled.div`
    padding: 20px;
    padding-top: 50px;
    position: relative;
    text-align: center;
`;

export const Input = styled(AutoComplete)`
    ${inputStyle}
`;

export const DialogStyled = styled(Dialog)`
    .p-icon {
        color: ${({ theme }) => theme.textColor} !important;
    }
`;

export const Background = styled.div<{ $url: string }>`
    background:
        linear-gradient(
            to top,
            ${({ theme }) => theme.secondary} 50%,
            ${({ theme }) => theme.secondaryOpacity} 100%
        ),
        ${({ $url }) => `url(${$url})`} no-repeat center center;
    // background:  !important;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    position: absolute;
    width: 100%;
    height: 70vh;
`;
