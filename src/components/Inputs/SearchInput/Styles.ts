import { fonts } from '@/styles';
import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    padding: 5px;
    font-family: ${fonts.family.default};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor} !important;
    &::placeholder {
        color: #888888;
    }
`;
