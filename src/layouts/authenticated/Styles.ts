import styled from 'styled-components';
import { breakpoints } from '@/styles';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`;

export const Area = styled.div`
    width: 100%;
    height: calc(100vh - 55px - 0.1rem);

    display: flex;
    gap: 0.1rem;
`;

export const HambugerMenuContainer = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    display: none;
    @media (max-width: ${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5vh;
        width: calc(100% - 0.2rem);
        padding: 0 5px 0 0;
        margin: 0.1rem 0.1rem;
        z-index: 1000;
    }
`;
