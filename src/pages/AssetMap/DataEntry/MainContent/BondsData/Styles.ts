import { primeReactTreeTableStyle, narrowScroll } from '@/styles/mixins';
import styled from 'styled-components';
import { TreeTable } from 'primereact/treetable';

export const Container = styled.div`
    height: 50vh;
    overflow-x: auto;
    overflow-y: hidden;
    ${narrowScroll};
`;

export const TableContainer = styled.div`
    // width: 100%;
    // width: max-content;
    margin: 10px auto;
    color: ${({ theme }) => theme.textColor};
`;

export const StyledTreeTable = styled(TreeTable)`
    ${primeReactTreeTableStyle};
`;
export const ButtonContainer = styled.div`
    margin-top: 1rem;
    text-align: left !important;
    margin-left: 1rem;
`;

export const SearchContainer = styled.div`
    width: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
`;
