import { SFC } from "@/types";
import * as S from "./Styles";
import DialogWrapper from "@/components/DialogModalWrapper";
import PrimeReactTable from "@/components/DataTable/PrimeReactTable";
import officeWhite from "@/assets/officeWhite.png";
import officeBlack from "@/assets/officeBlack.png";
import { useSelector } from "react-redux";
import { getTheme } from "@/selectors/state";

interface CashFlow {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const sampleData = [
  { id: "001", date: "1403/04/02", chashFlow: 57200 },
  { id: "002", date: "1403/04/02", chashFlow: 862500 },
  { id: "003", date: "1403/04/02", chashFlow: 7000 },
  { id: "004", date: "1403/04/02", chashFlow: 95000 },
  { id: "005", date: "1403/04/02", chashFlow: 36000 },
  { id: "006", date: "1403/04/02", chashFlow: 12000 },
  { id: "007", date: "1403/04/02", chashFlow: 2000 },
  { id: "008", date: "1403/04/02", chashFlow: 1000 },
];
const tableColumns = [
  { header: "تاریخ", field: "date" },
  {
    header: "جریان نقدی(میلیون ریال)",
    field: "chashFlow",
    body: "number",
  },
];
const CashFlowDialog: SFC<CashFlow> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <S.Container>
      <DialogWrapper
        open={open}
        handleClose={handleClose}
        title="Custom Portfolio 02"
        body={<DialogBody />}
      />
    </S.Container>
  );
};
export default CashFlowDialog;

const DialogBody = () => {
  const theme = useSelector(getTheme);

  return (
    <S.Container>
      <div>
        <S.IMG1 src={theme === "dark" ? officeWhite : officeBlack} />
      </div>
      <div style={{ direction: "rtl", width: "100%", textAlign: "center" }}>
        <PrimeReactTable
          data={sampleData}
          columns={tableColumns}
          withRowNumber={false}
        />
      </div>
      <div></div>
    </S.Container>
  );
};
