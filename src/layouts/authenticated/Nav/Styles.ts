import { hiddenScroll } from '@/styles';
import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 68px;
    padding: 0px 10px;
    background-color: ${({ theme }) => theme.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow-y: auto;
    ${hiddenScroll};
`;

export const FlexItem = styled.div`
    margin-top: 0.5rem;
    &:last-child {
        margin-top: auto; /* This will push the last item to the bottom */
    }
`;
