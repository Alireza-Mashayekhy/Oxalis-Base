import styled from 'styled-components';

import { hiddenScroll } from '@/styles';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    direction: rtl;
    gap: 0.2rem;
    ${hiddenScroll};
    display: flex;
    align-items: stretch;
    justify-content: center;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    flex-basis: calc(100%);
    background-color: #e9ebea50;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: ${({ theme }) => theme.textColor};
    overflow: auto;
`;
