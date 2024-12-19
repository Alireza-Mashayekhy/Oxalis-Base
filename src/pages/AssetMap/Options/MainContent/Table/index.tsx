import { Column } from 'primereact/column';

import { SFC } from '@/types';
import { numberBodyTemplate } from '@/utils/primeReactDataTable';

import { optionsData } from './OptionData';
import * as S from './Styles';
import { headerGroup } from './TableHeaders';

// تعریف Interface برای Props
interface OptionsTableProps {
    selectedRow: any; // نوع مناسب برای selectedRow را مشخص کنید
    setSelectedRow: (row: any) => void; // نوع مناسب برای row را مشخص کنید
    setOpen: (value: boolean) => void; // setOpen باید یک boolean دریافت کند
}

const OptionsTable: SFC<OptionsTableProps> = ({
    selectedRow,
    setSelectedRow,
    setOpen,
}) => {
    const tableColumns = [
        { field: 'DaystoMat', body: '' },
        { field: 'UAIndx', body: '' },
        {
            field: 'UAsellprice',
            body: numberBodyTemplate,
        },
        { field: '_1stopt', body: '' },
        {
            field: '_1ststrike',
            body: numberBodyTemplate,
        },
        {
            field: '_1stoptbuypr',
            body: numberBodyTemplate,
        },
        {
            field: '_1stoptbuyvol',
            body: numberBodyTemplate,
        },
        { field: '_2ndopt', body: '' },
        {
            field: '_2ndstrike',
            body: numberBodyTemplate,
        },
        {
            field: '_2ndoptsellpr',
            body: numberBodyTemplate,
        },
        {
            field: '_2ndoptsellvol',
            body: numberBodyTemplate,
        },
        {
            field: 'ContractSize',
            body: numberBodyTemplate,
        },
        {
            field: 'state',
            body: numberBodyTemplate,
        },
        { field: 'AYield', body: '' },
    ];

    const onRowSelect = (e) => {
        setSelectedRow(e.value);
        setOpen(true);
    };

    return (
        <S.TableContainer>
            <S.StyledDataTable
                value={optionsData}
                headerColumnGroup={headerGroup}
                tableStyle={{ minWidth: '30rem' }}
                scrollable
                scrollHeight="flex"
                selectionMode="single"
                selection={selectedRow}
                onSelectionChange={onRowSelect}
                id="optionsTable"
            >
                {tableColumns.map((col, index) => (
                    <Column key={index} field={col.field} body={col.body} />
                ))}
            </S.StyledDataTable>
        </S.TableContainer>
    );
};

export default OptionsTable;
