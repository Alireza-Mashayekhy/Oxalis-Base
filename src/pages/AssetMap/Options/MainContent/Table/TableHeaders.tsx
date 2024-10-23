import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";

export const headerGroup = (
  <ColumnGroup>
    <Row>
      <Column header="روز تا سررسید" rowSpan={2} />
      <Column header="نماد" rowSpan={2} />
      <Column header="قیمت پایه" rowSpan={2} />
      <Column header="اختیار معامله اول" colSpan={4} />
      <Column header="اختیار معامله دوم" colSpan={4} />
      <Column header="اندازه قرارداد" rowSpan={2} />
      <Column header="درصد سود" rowSpan={2} />
      <Column header="AYield" rowSpan={2} />
    </Row>

    <Row>
      <Column header="نماد" field="_1stopt" />
      <Column header="قیمت اعمال" field="_1ststrike" />
      <Column header="قیمت خرید" field="_1stoptbuypr" />
      <Column header="حجم" field="_1stoptbuyvol" />
      <Column header="نماد" field="_2ndopt" />
      <Column header="قیمت اعمال" field="_2ndstrike" />
      <Column header="قیمت خرید" field="_2ndoptsellpr" />
      <Column header="حجم" field="_2ndoptsellvol" />
    </Row>
  </ColumnGroup>
);
