import { SFC } from '@/types';
import * as S from './Styles';
import { useSelector } from 'react-redux';
import { getCashFlowFrame } from '@/selectors/state';
import {
    createCashFlowTreeTableData,
    numberBodyTemplateForTreeTable,
} from '@/utils/dataTableFunctions';
import { useEffect, useState } from 'react';
import { TreeNode } from 'primereact/treenode';
import CustomTreeTable from '@/components/TreeTable';

const treeTableData = [
    {
        field: 'name',
        expander: true,
        header: '',
        width: '50%',
        align: 'right',
    },
    {
        field: 'CASH_FLOW',
        width: '50%',
        header: 'جریان نقدی',
        body: numberBodyTemplateForTreeTable,
        sortable: true,
    },
];

interface DdnHistoryNode {
    key: string;
    data: {
        [key: string]: any;
    };
    children?: DdnHistoryNode[];
}

const CashFlowGrid: SFC = () => {
    const data = useSelector(getCashFlowFrame);
    const [nodes, setNodes] = useState<DdnHistoryNode[]>([]);

    useEffect(() => {
        setNodes(createCashFlowTreeTableData(data));
    }, []);

    return (
        <>
            <S.Container>
                <CustomTreeTable columns={treeTableData} data={nodes} />
            </S.Container>
        </>
    );
};

export default CashFlowGrid;
