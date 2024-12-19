import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import { fonts } from '@/styles';

import * as S from './Styles';

interface MaterialTable<T> {
    headers: { label: string }[];
    rows: { label: keyof T; type: string | null }[]; // تعریف نوع کلید
    data: T[];
    onRowSelection?: (row: T | null) => void;
}

const MaterialTableWrapper = <T extends Record<string, unknown>>({
    headers,
    rows,
    data,
    onRowSelection,
}: MaterialTable<T>) => {
    return (
        <TableContainer>
            <Table
                sx={{
                    minWidth: '30rem',
                    fontFamily: `${fonts.family.default}`,
                }}
                size="small"
                stickyHeader
                aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <S.StyledHesderCell>ردیف</S.StyledHesderCell>
                        {headers.map((HeaderCol, index) => (
                            <S.StyledHesderCell key={index}>
                                {HeaderCol.label}
                            </S.StyledHesderCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                                cursor: 'pointer',
                            }}
                            onClick={() =>
                                onRowSelection && onRowSelection(item)
                            }
                        >
                            <S.StyledBodyCell>{index + 1}</S.StyledBodyCell>

                            {rows.map((row, rowIndex) => (
                                <S.StyledBodyCell key={rowIndex}>
                                    {row.type === 'number' &&
                                    typeof item[row.label] === 'number'
                                        ? item[row.label].toLocaleString()
                                        : String(item[row.label])}{' '}
                                    {/* تبدیل به String */}
                                </S.StyledBodyCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MaterialTableWrapper;
