import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor};
    height: 55px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Gap = styled.div`
    width: 0;
    flex-grow: 1;
`;

export const Logo = styled.img`
    height: 100%;
    aspect-ratio: 1;
    display: block;
`;
