import { SFC } from "@/types";
import * as S from "./Styles";
import { oraghfixData } from "./oraghFixedIncome";
import { useState } from "react";
import DialogWrapper from "@/components/DialogModalWrapper";
import FixedIncomeFundMarketDialog from "../Dialog";
import PrimeReactTable from "@/components/DataTable/PrimeReactTable";

const tableContent = [
  { header: "نماد", field: "symbol" },
  { header: "زیرگروه صنعت", field: "sub_industry" },
  { header: "نام", field: "name" },
  {
    header: "مبلغ اسمی",
    field: "nominal_amount_per_unit",
    body: "number",
  },
  { header: "تاریخ انتشار", field: "publish_date" },
  { header: "مدت(ماه)", field: "duration_months" },
  { header: "نرخ سود اسمی", field: "nominal_interest_rate" },
  { header: "تاریخ سررسید", field: "maturity_date" },
  { header: "مواعد پرداخت سود", field: "interest_payment_schedule" },
];

const StockPaperTable: SFC = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [buttonNo, setButtonNo] = useState<number>(1);

  const onRowSelection = (e) => {
    setSelectedRow(e.value);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setButtonNo(1);
  };

  return (
    <>
      <S.TableContainer>
        <PrimeReactTable
          columns={tableContent}
          data={oraghfixData}
          withRowNumber={false}
          selection={selectedRow}
          onSelectionChange={onRowSelection}
        />
      </S.TableContainer>
      <DialogWrapper
        open={open}
        handleClose={handleClose}
        title={
          selectedRow?.symbol +
          "-" +
          new Date().toLocaleDateString("fa-IR", {
            month: "long",
            year: "numeric",
            day: "numeric",
            calendar: "persian",
          })
        }
        body={
          <FixedIncomeFundMarketDialog
            selectedRow={selectedRow}
            buttonNo={buttonNo}
            setButtonNo={setButtonNo}
          />
        }
      />
    </>
  );
};

export default StockPaperTable;
