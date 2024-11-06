import { SFC } from '@/types';
import * as S from './Styles';
import { useSelector } from 'react-redux';
import { getDepositeFrame } from '@/selectors/state';
import {
    createDepositeTreeTableDataWithExpansion,
    numberBodyTemplateForTreeTable,
    roundedNumberBodyTemplateForTreeTable,
} from '@/utils/dataTableFunctions';
import { useEffect, useState } from 'react';
import { TreeNode } from 'primereact/treenode';
import CustomTreeTable from '@/components/TreeTable';

const treeTableData = [
    {
        field: 'name',
        expander: true,
        header: '',
        width: '20%',
        align: 'right',
    },
    {
        field: 'DAY_VALUE',
        width: '20%',
        header: 'ارزش روز (میلیون ریال)',
        body: numberBodyTemplateForTreeTable,
        sortable: true,
    },
    {
        field: 'ACCOUNT_NUMBER',
        header: 'شماره حساب',
        width: '20%',
        sortable: true,
    },
    {
        field: 'BRANCH',
        header: 'شعبه',
        width: '20%',
        sortable: true,
    },
    {
        field: 'REAL_PROFIT',
        header: 'سود واقعی',
        body: roundedNumberBodyTemplateForTreeTable,
        width: '20%',
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

const DepositeDataGrid: SFC = () => {
    const data = useSelector(getDepositeFrame);
    const [nodes, setNodes] = useState<DdnHistoryNode[]>([]);

    useEffect(() => {
        setNodes(createDepositeTreeTableDataWithExpansion(data));
        console.log(nodes);
    }, []);

    return (
        <>
            <S.Container>
                <CustomTreeTable columns={treeTableData} data={nodes} />
            </S.Container>
        </>
    );
};

export default DepositeDataGrid;
