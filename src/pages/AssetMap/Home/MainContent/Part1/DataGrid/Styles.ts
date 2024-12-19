import styled from 'styled-components';

export const Container = styled.div`
    height: 400px;
    overflow-y: hidden;
`;

export const TableContainer = styled.div`
    margin: 5px auto;
    color: ${({ theme }) => theme.textColor};
`;

export const ChipsContainer = styled.div`
    position: absolute;
    top: 5px;
    left: 0px;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 8px;
`;
