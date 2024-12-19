import { TreeTable } from 'primereact/treetable';
import styled from 'styled-components';

import { narrowScroll, primeReactTreeTableStyle } from '@/styles/mixins';

export const Container = styled.div`
    height: 400px;
    overflow-y: hidden;
    // overflow-x: auto;
    // ${narrowScroll};
`;

export const TableContainer = styled.div`
    // width: max-content;
    margin: 5px auto;
    color: ${({ theme }) => theme.textColor};
`;

export const StyledTreeTable = styled(TreeTable)`
    ${primeReactTreeTableStyle};
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
