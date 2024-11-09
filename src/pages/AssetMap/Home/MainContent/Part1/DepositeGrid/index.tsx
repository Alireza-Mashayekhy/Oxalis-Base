import { AppDispatch, SFC } from '@/types';
import * as S from './Styles';
import { useSelector } from 'react-redux';
import { getDepositeFrame } from '@/selectors/state';
import {
    createDepositeTreeTableDataWithExpansion,
    numberBodyTemplateForTreeTable,
    roundedNumberBodyTemplateForTreeTable,
} from '@/utils/dataTableFunctions';
import { useEffect, useState } from 'react';
import CustomTreeTable from '@/components/TreeTable';
import { useDispatch } from 'react-redux';
import { fetchDepositeFrame } from '@/dispatchers/depositeFrame';
import { Chip } from '@mui/material';

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
    const data = useSelector(getDepositeFrame)?.data;
    const filtersList = useSelector(getDepositeFrame)?.filters;
    console.log('filtersList', filtersList);
    const [nodes, setNodes] = useState<DdnHistoryNode[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setNodes(createDepositeTreeTableDataWithExpansion(data));
    }, [data]);

    const removeItem = (e) => {
        const newFilters = { ...filtersList };
        delete newFilters[e];
        dispatch(fetchDepositeFrame(newFilters));
    };

    return (
        <>
            <S.Container>
                <CustomTreeTable columns={treeTableData} data={nodes} />
            </S.Container>
            <S.ChipsContainer>
                {filtersList &&
                    Object.keys(filtersList)?.map((e) => {
                        return (
                            <Chip
                                label={filtersList[e]}
                                onDelete={() => removeItem(e)}
                                className="!text-white"
                            />
                        );
                    })}
            </S.ChipsContainer>
        </>
    );
};

export default DepositeDataGrid;
