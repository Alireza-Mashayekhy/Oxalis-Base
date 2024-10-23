import { SFC } from "@/types";
import * as S from "./Styles";
import { NonMatchesRyan } from "../../contradictData";
import PrimeReactTable from "@/components/DataTable/PrimeReactTable";


const NonMatchRiyanTables: SFC = () => {
  const usedData = NonMatchesRyan.slice(0, 1);

  const tableColumns = [
    {
      header: "تلفن",
      field: "phone_number",
    },
    { header: "کدتفضیل", field: "detail_code" },
    { header: "نام", field: "name" },
    { header: "نام‌خانوادگی", field: "family_name" },
    { header: "حساب", field: "bank_account" },
    { header: "نوع", field: "type" },
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

export default NonMatchRiyanTables;
