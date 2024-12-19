import { useEffect, useState } from "react";

import BondPaperTypesButtons from "@/components/BondPaperTypesButtons";
import DialogWrapper from "@/components/DialogModalWrapper";
import { SFC } from "@/types";

import OptionsDialog from "./Dialog";
import InputOptions from "./InputOptions";
import * as S from "./Styles";
import OptionsTable from "./Table";

const btnLabels = [
  { label: "Conversion", index: 0, action: "" },
  { label: "Short Straddle", index: 1, action: "" },
  { label: "Covered Call", index: 2, action: "" },
  { label: "Bull Call Spread", index: 3, action: "" },
  { label: "Bear Put Spread", index: 4, action: "" },
  { label: "Long Straddle", index: 5, action: "" },
  { label: "Box Spread", index: 6, action: "" },
  { label: "Wheel", index: 7, action: "" },
];

const MainContent: SFC = () => {
  const [selectedButtons, setSelectedButtons] = useState<boolean[]>([]);
  const [selectedRow, setSelectedRow] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(selectedRow);
  }, [selectedRow]);

  const handleButtonClick = (index: number) => {
    const updatedArray = [...selectedButtons];
    updatedArray[index] = !updatedArray[index];
    setSelectedButtons(updatedArray);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <InputOptions />
      <BondPaperTypesButtons
        btnLabels={btnLabels}
        selectedButtons={selectedButtons}
        handleButtonClick={handleButtonClick}
        buttonPerLine={4}
      />

      <S.Container>
        <OptionsTable
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          setOpen={setOpen}
        />
      </S.Container>

      <S.Divider />

      <DialogWrapper
        open={open}
        handleClose={handleClose}
        title={
          selectedRow && selectedRow["_1stopt"] ? selectedRow["_1stopt"] : ""
        }
        body={<OptionsDialog selectedRow={selectedRow} />}
      />
    </>
  );
};
export default MainContent;
