import { hiddenScroll } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div<{ $status: boolean; $width: string }>`
    height: 100%;
    min-width: ${({ $status, $width }) => ($status ? $width : '68px')};
    width: ${({ $status, $width }) => ($status ? $width : '68px')};
    padding: 0px 10px;
    // background-color: ${({ theme }) => theme.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow-y: auto;
    transition: all 0.5s;
    ${hiddenScroll};
    background-color: ${({ theme }) => theme.secondaryOpacity};
    backdrop-filter: blur(10px);
    border-radius: 10px;
`;

export const FlexItem = styled.div`
    margin-top: 0.5rem;
    &:last-child {
        margin-top: auto; /* This will push the last item to the bottom */
    }
`;
