import PrimeReactTable from "@/components/DataTable/PrimeReactTable";
import { SFC } from "@/types";

import { MultiMatch } from "../../contradictData";
import * as S from "./Styles";

const MultiMatchTables: SFC = () => {
  const usedData = MultiMatch.slice(0, 1);

  const firstTable = [
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
    { header: "سایر", field: "other", body: "des30Letters" },
    { header: "حساب", field: "bank_account" },
  ];

  const secondTable = [
    { header: "شماره", field: "phone_number" },
    { header: "کدتفضیل", field: "detail_code" },
    { header: "نام", field: "name" },
    { header: "نام‌خانوادگی", field: "family_name" },
    { header: "کدملی", field: "national_number" },
    { header: "حساب", field: "bank_account" },
    { header: "نوع", field: "type" },
    { header: "تعداد", field: "number", body: "number" },
    {
      header: "مبلغ",
      field: "amount",
      body: "number",
    },
    { header: "تاریخ‌درخواست", field: "request_date" },
    { header: "زمان", field: "time2" },
    { header: "شماره‌فیش", field: "slip_number" },
    { header: "شماره‌شبا", field: "shaba_number" },
  ];

  return (
    <>
      <S.Container>
        <S.H2>رکورد 23 از 132 </S.H2>
        <div>
          <PrimeReactTable
            columns={firstTable}
            data={usedData}
            withRowNumber={false}
          />
        </div>
        <div>
          <PrimeReactTable
            columns={secondTable}
            data={usedData}
            withRowNumber={false}
          />
        </div>
      </S.Container>
    </>
  );
};

export default MultiMatchTables;
