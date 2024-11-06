import styled from 'styled-components';

export const Container = styled.div`
    height: 400px;
    overflow-y: hidden;
`;

export const TableContainer = styled.div`
    margin: 5px auto;
    color: ${({ theme }) => theme.textColor};
`;
