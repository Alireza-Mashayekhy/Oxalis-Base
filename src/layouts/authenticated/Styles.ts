import styled from 'styled-components';
import { breakpoints } from '@/styles';

export const Container = styled.div<{ $url: string }>`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    background: linear-gradient(to top, #00000050 50%, #00000050 100%),
        ${({ $url }) => `url(${$url})`} no-repeat;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 5px;
`;

export const Area = styled.div`
    width: 100%;
    height: calc(100vh - 70px - 0.2rem);
    display: flex;
    position: relative;
    gap: 0.2rem;
    padding: 20px;
    padding-top: 5px;
    padding-right: 80px;
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
        margin: 0.2rem 0.2rem;
        z-index: 1000;
    }
`;
