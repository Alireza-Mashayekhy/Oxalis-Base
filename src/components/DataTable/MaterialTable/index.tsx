import * as S from "./Styles";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import { fonts } from "@/styles";

interface MaterialTable<T> {
  headers: { label: string }[];
  rows: { label: string; type: string | null }[];
  data: T[];
  onRowSelection?: (row: T | null) => void;
}

const MaterialTableWrapper: React.FC<
  MaterialTable<Record<string, unknown>>
> = ({ headers, rows, data, onRowSelection }) => {
  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: "30rem", fontFamily: `${fonts.family.default}` }}
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
            {data?.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                onClick={() => onRowSelection(item)}
              >
                <S.StyledBodyCell>{index + 1}</S.StyledBodyCell>

                {rows.map((row, index) => (
                  <S.StyledBodyCell key={index}>
                    {item.type === "number"
                      ? item[row.label].toLocaleString()
                      : item[row.label]}
                  </S.StyledBodyCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MaterialTableWrapper;
