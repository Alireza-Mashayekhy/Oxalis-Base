import PrimeReactTable from "@/components/DataTable/PrimeReactTable";
import { SFC } from "@/types";

import { PerfectMatch } from "../../contradictData";
import * as S from "./Styles";

const NonMatchBankTables: SFC = () => {
  const usedData = PerfectMatch.slice(0, 1);

  const tableColumns = [
    {
      header: "شرح",
      field: "description",
      body: "des30Letters",
    },
    { header: "تاریخ", field: "date" },
    { header: "زمان", field: "time1" },
    {
      header: "واریز",
      field: "deposit",
      body: "number",
    },
    {
      header: "برداشت",
      field: "withdrawal",
      body: "number",
    },
    {
      header: "موجودی",
      field: "balance",
      body: "number",
    },
    { header: "شعبه‌عامل", field: "operating_branch" },
    { header: "شماره‌سند", field: "document_number" },
    { header: "نام", field: "name" },
    { header: "نام‌خانوادگی", field: "family_name" },
    { header: "نام‌پدر", field: "father_name" },
    { header: "کد‌ملی", field: "national_number" },
    { header: "سایر", field: "other" },
    { header: "حساب", field: "bank_account" },
  ];

  return (
    <>
      <S.Container>
        <S.H2>رکورد 23 از 132</S.H2>
        <div>
          <PrimeReactTable
            columns={tableColumns}
            data={usedData}
            withRowNumber={false}
          />
        </div>
      </S.Container>
    </>
  );
};

export default NonMatchBankTables;
