import { TreeTable } from 'primereact/treetable';
import styled from 'styled-components';

import { primeReactTreeTableStyle } from '@/styles/mixins';

export const TreeTableStyle = styled(TreeTable)`
    ${primeReactTreeTableStyle}
`;
