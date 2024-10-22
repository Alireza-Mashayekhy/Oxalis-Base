import { Menubar } from 'primereact/menubar';
import styled from 'styled-components';

export const Container = styled.div`
    // background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    height: 70px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Menu = styled(Menubar)`
    width: 0;
    flex-grow: 1;
    background: transparent;
    border: 0px solid rgba(255, 255, 255, 0.12);
    .p-submenu-list {
        background: transparent;
        backdrop-filter: blur(10px);
    }
`;

export const Logo = styled.img`
    height: 100%;
    aspect-ratio: 1;
    display: block;
`;

export const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
`;

export const Year = styled.div`
    font-size: 24px;
    line-height: 22px;
`;
