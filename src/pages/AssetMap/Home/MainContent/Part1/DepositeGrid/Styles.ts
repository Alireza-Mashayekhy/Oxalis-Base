import styled from 'styled-components';
import { TreeTable } from 'primereact/treetable';
import { narrowScroll, primeReactTreeTableStyle } from '@/styles/mixins';

export const Container = styled.div`
    height: 400px;
    overflow-y: hidden;
`;

export const TableContainer = styled.div``;

export const StyledTreeTable = styled(TreeTable)`
    ${primeReactTreeTableStyle};
`;
