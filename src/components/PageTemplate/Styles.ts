import { breakpoints, hiddenScroll } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    direction: rtl;
    gap: 0.2rem;
    ${hiddenScroll};
    display: flex;
    align-items: stretch;
    justify-content: center;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    flex-basis: calc(100%);
    height: calc(100vh - 75px - 0.2rem);
    background-color: ${({ theme }) => theme.secondaryOpacity};
    backdrop-filter: blur(20px);
    border-radius: 10px;
    color: ${({ theme }) => theme.textColor};
    overflow: auto;
    border: 1px solid #ffffff50;
`;
