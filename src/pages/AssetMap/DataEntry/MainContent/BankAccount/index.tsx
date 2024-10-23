import { AppDispatch, SFC } from '@/types';
import { Column, ColumnEditorOptions } from 'primereact/column';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBankData } from '@/selectors/state';
import * as S from './Styles';
import { updateBankDataBatch } from '@/dispatchers/bankData';
import { TreeNode } from 'primereact/treenode';
import SendDataButton from '@/components/Button/sendDataButton';
import SearchInput from '@/components/Inputs/SearchInput';
import {
    flattenTreeData,
    searchBankDataTable,
    transformBankData,
} from '@/utils/dataEntry';
import NoDataFoundTemplate from '@/components/NoDataFound';
import EditableCell from '@/components/EditableCell';

const columns = [
    {
        field: 'bank',
        header: 'بانک',
        width: '20%',
        filter: false,
        editable: false,
    },
    {
        field: 'branch',
        header: 'شعبه',
        width: '20%',
        filter: true,
        editable: false,
    },
    {
        field: 'account_number',
        header: 'شماره حساب',
        width: '20%',
        filter: true,
        editable: false,
    },
    {
        field: 'nominal_interest',
        header: 'سود اسمی',
        width: '10%',
        filter: true,
        editable: false,
    },
    {
        field: 'real_interest_rate',
        header: 'نرخ سود واقعی',
        width: '10%',
        filter: true,
        editable: true,
    },
];

const BankAccount: SFC = () => {
    const bankData = useSelector(getBankData).data;
    const loading = useSelector(getBankData).loading;
    const dispatch = useDispatch<AppDispatch>();

    const [searchInput, setSearchInput] = useState('');
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        setNodes(transformBankData(bankData));
    }, []);

    const inputTextEditor = (options: ColumnEditorOptions) => {
        return (
            <EditableCell options={options} nodes={nodes} setNodes={setNodes} />
        );
    };

    const handleButtonClick = () => {
        const flatData = flattenTreeData(nodes);
        dispatch(updateBankDataBatch(flatData));
        // dispatch({ type: 'UPDATE_TABLE_DATA', payload: tableData });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchedValue = e.target.value;
        if (searchedValue.length === 0) {
            setSearchInput(searchedValue);
            setNodes(transformBankData(bankData));
        } else {
            setSearchInput(searchedValue);
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            const filteredData = searchBankDataTable(searchInput, bankData);
            setNodes(transformBankData(filteredData));
        }
    };

    return (
        <>
            <S.Container>
                {nodes.length > 0 ? (
                    <S.TableContainer>
                        <S.StyledTreeTable
                            value={nodes}
                            scrollable
                            scrollHeight="300px"
                            emptyMessage=" "
                            tableStyle={{ minWidth: '100rem' }}
                            // emptyMessage="داده‌ای برای نمایش وجود ندارد"
                        >
                            <Column
                                field="fund_name"
                                header="صندوق"
                                expander
                                style={{ width: '20%', minWidth: '8rem' }}
                            ></Column>
                            {columns.map((col, index) => (
                                <Column
                                    key={index}
                                    field={col.field}
                                    header={col.header}
                                    // body={col.body}
                                    style={{
                                        width: `${col.width}`,
                                        minWidth: '10rem',
                                    }}
                                    editor={col.editable && inputTextEditor}
                                />
                            ))}
                        </S.StyledTreeTable>
                    </S.TableContainer>
                ) : (
                    <NoDataFoundTemplate />
                )}
            </S.Container>
            <S.SearchContainer>
                <SearchInput
                    value={searchInput}
                    handleChange={handleChange}
                    handleKeyDown={handleKeyDown}
                />
            </S.SearchContainer>
            <S.ButtonContainer>
                <SendDataButton onClick={handleButtonClick} loading={loading} />
            </S.ButtonContainer>
        </>
    );
};

export default BankAccount;
