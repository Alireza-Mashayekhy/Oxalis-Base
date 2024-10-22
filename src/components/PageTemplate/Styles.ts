import { breakpoints, hiddenScroll } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    direction: rtl;
    display: flex;
    align-items: stretch;
    gap: 0.2rem;
    overflow: hidden;
    color: ${({ theme }) => theme.textColor};
    overflow-x: hidden;
    overflow-y: auto;
    ${hiddenScroll};
    display: flex;
    align-items: stretch;
    justify-content: center;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    flex-basis: calc(100%);
    height: calc(100vh - 55px - 0.2rem);
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor};
    overflow: auto;
`;
