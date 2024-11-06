import { SFC } from '@/types';
import * as S from './Styles';
import { useSelector } from 'react-redux';
import { getData } from '@/selectors/state';
import {
    createTreeTableDataWithWeight,
    roundedNumberBodyTemplateForTreeTable,
} from '@/utils/dataTableFunctions';
import { useEffect, useLayoutEffect, useState } from 'react';
import CustomTreeTable from '@/components/TreeTable';

interface DdnHistoryNode {
    key: string;
    data: {
        [key: string]: any;
    };
    children?: DdnHistoryNode[];
}

const GeneralStatusDataGrid: SFC = () => {
    const data = useSelector(getData);
    const [nodes, setNodes] = useState<DdnHistoryNode[]>([]);

    useEffect(() => {
        setNodes(createTreeTableDataWithWeight(data));
    }, [data]);

    const formatDayValue = (data, col) => {
        const field = data.data[col.field] / 1000000;
        return field.toFixed(1);
    };

    const columns = [
        {
            field: 'name',
            header: '',
            expander: true,
            align: 'right',
            width: '15%',
        },
        {
            field: 'DAY_VALUE',
            header: 'ارزش روز (میلیون‌ ریال)',
            sortable: true,
            width: '15%',
            numberFormatter: true,
            body: formatDayValue,
        },
        {
            field: 'TITLE',
            header: 'عنوان',
            body: '',
            width: '15%',
            sortable: true,
        },
        {
            field: 'DESCRIPTION',
            header: 'شرح',
            body: '',
            width: '35%',
            sortable: true,
        },
        {
            field: 'EFFECTIVE_YIELD',
            header: 'سود‌موثر‌خرید',
            width: '10%',
            numberFormatter: true,
            body: roundedNumberBodyTemplateForTreeTable,
            sortable: true,
        },
        {
            field: 'EFFECTIVE_YIELD',
            header: 'سود موثر',
            width: '10%',
            numberFormatter: true,
            body: roundedNumberBodyTemplateForTreeTable,
            sortable: true,
        },
    ];

    return (
        <>
            <S.Container>
                <CustomTreeTable columns={columns} data={nodes} />
            </S.Container>
        </>
    );
};

export default GeneralStatusDataGrid;
