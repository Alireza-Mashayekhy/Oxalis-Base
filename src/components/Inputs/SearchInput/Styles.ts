import styled from 'styled-components';

import { fonts } from '@/styles';

export const StyledInput = styled.input`
    width: 100%;
    padding: 5px;
    font-family: ${fonts.family.default};
    border: 0px solid ${({ theme }) => theme.primary};
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    background-color: transparent;
    color: ${({ theme }) => theme.primary} !important;
    &::placeholder {
        color: #ffffffbb;
    }
    &:focus {
        outline: none;
    }
`;
