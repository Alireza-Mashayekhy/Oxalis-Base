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

    // useLayoutEffect(() => {
    //     const toggleElements = document.querySelectorAll(
    //         '.p-treetable-toggler'
    //     );
    //     if (toggleElements.length) {
    //         toggleElements.forEach((e) => {
    //             const computedStyle = getComputedStyle(e);
    //             const leftMargin = computedStyle.marginLeft;
    //             const leftMarginValue = parseFloat(leftMargin);
    //             e.style.marginRight = `${leftMarginValue}px`;
    //         });
    //     }
    // }, [nodes]);

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
            body: roundedNumberBodyTemplateForTreeTable,
            sortable: true,
        },
        {
            field: 'EFFECTIVE_YIELD',
            header: 'سود موثر',
            width: '10%',
            body: roundedNumberBodyTemplateForTreeTable,
            sortable: true,
        },
    ];

    return (
        <>
            <S.Container>
                <CustomTreeTable columns={columns} data={nodes} />
                {/* {nodes.length > 0 ? (
                    <S.TableContainer>
                        <S.StyledTreeTable
                            value={nodes}
                            scrollable
                            scrollHeight="400px"
                            style={{ minWidth: '50rem' }}
                            // emptyMessage="داده‌ای برای نمایش وجود ندارد"
                        >
                            <Column
                                className="name-column"
                                field="name"
                                header=""
                                expander
                                // style={{ width: "max-content" }}
                                style={{ width: '15%' }}
                            ></Column>
                            <Column
                                field="DAY_VALUE"
                                className="day-column"
                                header="ارزش روز (میلیون‌ ریال)"
                                body={numberBodyTemplateForTreeTable}
                                style={{ width: '15%' }}
                                sortable
                            ></Column>
                            {treeTableData.map((col, index) => (
                                <Column
                                    key={index}
                                    field={col.field}
                                    header={col.header}
                                    body={col.body}
                                    style={{ width: `${col.width}` }}
                                    sortable
                                />
                            ))}
                        </S.StyledTreeTable>
                    </S.TableContainer>
                ) : (
                    <NoDataFoundTemplate />
                )} */}
            </S.Container>
        </>
    );
};

export default GeneralStatusDataGrid;
