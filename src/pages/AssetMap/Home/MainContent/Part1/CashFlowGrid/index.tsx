import { AppDispatch, SFC } from '@/types';
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
import { useDispatch } from 'react-redux';
import { fetchCashFlowFrame } from '@/dispatchers/cashflowFrame';
import { Chip } from '@mui/material';

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
    const data = useSelector(getCashFlowFrame)?.data;
    const filterList = useSelector(getCashFlowFrame)?.filters;
    const [nodes, setNodes] = useState<DdnHistoryNode[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setNodes(createCashFlowTreeTableData(data));
    }, [data]);

    const removeItem = (e) => {
        const newFilters = { ...filterList };
        delete newFilters[e];
        dispatch(fetchCashFlowFrame(newFilters));
    };

    return (
        <>
            <S.Container>
                <CustomTreeTable columns={treeTableData} data={nodes} />
            </S.Container>
            <S.ChipsContainer>
                {filterList &&
                    Object.keys(filterList)?.map((e) => {
                        return (
                            <Chip
                                label={filterList[e]}
                                onDelete={() => removeItem(e)}
                                className="!text-white"
                            />
                        );
                    })}
            </S.ChipsContainer>
        </>
    );
};

export default CashFlowGrid;
