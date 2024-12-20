import { Chip } from '@mui/material';
import { ColumnBodyOptions } from 'primereact/column';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import CustomTreeTable from '@/components/TreeTable';
import { fetchShareFrame } from '@/dispatchers/shareFrame';
import { getShareFrame } from '@/selectors/state';
import { colors } from '@/styles';
import { AppDispatch, SFC } from '@/types';
import {
    createShareTreeTableData,
    numberBodyTemplateForTreeTable,
    searchData,
} from '@/utils/dataTableFunctions';

import * as S from './Styles';

// because I need to return jsx and i needed a .tsx file not .ts
const numberBodyTemplateForTreeTableWithGreenAndRedColor = (
    data,
    col: ColumnBodyOptions
) => {
    const field = data.data[col.field];
    if (field === null || field === undefined || field === '') {
        return '';
    }
    if (field < 0) {
        return (
            <span style={{ color: colors.palette.red[400] }}>
                ( {(-Number(field)).toLocaleString()})
            </span>
        );
    }
    return (
        <span style={{ color: colors.palette.green[400] }}>
            {Number(field).toLocaleString()}
        </span>
    );
};

const treeTableData = [
    {
        field: 'name',
        header: '',
        expander: true,
        width: '10%',
        align: 'right',
    },
    {
        field: 'DAY_VALUE',
        header: 'ارزش روز (میلیون ریال)',
        body: numberBodyTemplateForTreeTable,
        width: '15%',
        sortable: true,
    },
    {
        field: 'QUANTITY',
        header: 'تعداد',
        body: numberBodyTemplateForTreeTable,
        width: '10%',
        sortable: true,
    },
    {
        field: 'TOTAL_COST_PRICE',
        header: 'قیمت تمام‌شده(میلیون‌ریال)',
        body: numberBodyTemplateForTreeTable,
        width: '15%',
        sortable: true,
    },

    {
        field: 'NET_SALE_VALUE',
        header: 'خالص ارزش فروش کل(میلیون‌ریال)',
        body: numberBodyTemplateForTreeTable,
        width: '15%',
        sortable: true,
    },
    {
        field: 'PROFIT_LOSS',
        header: 'سود/زیان(میلیون‌ریال)',
        body: numberBodyTemplateForTreeTableWithGreenAndRedColor,
        width: '15%',
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

const ShareDataGrid: SFC = () => {
    const data = useSelector(getShareFrame)?.data;
    const filtersList = useSelector(getShareFrame)?.filters;
    const [searchInput, setSearchInput] = useState('');
    const [nodes, setNodes] = useState<DdnHistoryNode[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setNodes(createShareTreeTableData(data));
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchedValue = e.target.value;
        if (searchedValue.length === 0) {
            setSearchInput(searchedValue);
            setNodes(createShareTreeTableData(data));
        } else {
            setSearchInput(searchedValue);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            const filteredData = searchData(data, searchInput, 'SYMBOL');
            setNodes(createShareTreeTableData(filteredData));
        }
    };

    const removeItem = (e) => {
        const newFilters = { ...filtersList };
        delete newFilters[e];
        dispatch(fetchShareFrame(newFilters));
    };

    return (
        <>
            <S.Container>
                <CustomTreeTable columns={treeTableData} data={nodes} />
            </S.Container>
            <S.SearchContainer>
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
            </S.SearchContainer>
        </>
    );
};

export default ShareDataGrid;
