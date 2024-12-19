import styled from 'styled-components';

import { hiddenScroll } from '@/styles';

export const Bottom = styled.div``;

export const Logo = styled.img`
    // border-radius: 50%; // Makes the image circular
    width: 45px; // Set the width as desired
    height: 45px; // Set the height as desired
    margin: 0.1rem auto 0.5rem auto;
    display: block;
`;
export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 5px;
`;

export const Container = styled.div`
    height: calc(100% - 20px);
    padding: 0px 10px;
    // background-color: ${({ theme }) => theme.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    transition: all 0.5s;
    ${hiddenScroll};
    position: absolute;
    z-index: 10;
    top: 0px;
    right: 0px;
`;

export const FlexItem = styled.div`
    margin-top: 0.5rem;
`;

export const FlexItemLink = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 5px;
    &:last-child {
        margin-top: auto; /* This will push the last item to the bottom */
    }
`;
