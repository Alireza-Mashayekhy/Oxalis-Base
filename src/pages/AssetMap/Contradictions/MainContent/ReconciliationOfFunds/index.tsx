import { SFC } from "@/types";
import * as S from "./Styles";
import officeWhite from "@/assets/officeWhite.png";
import officeBlack from "@/assets/officeBlack.png";
import { getTheme } from "@/selectors/state";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MatchDialog from "./MatchDialogs";

const ReconciliationOfFunds: SFC = () => {
  const theme = useSelector(getTheme);
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("");
  const [open, setOpen] = useState(false);

  const handlePerfectMatchDialog = () => {
    setOpen(true);
    setSelectedButton("PerfectMatch");
  };
  const handleMultiMatchDialog = () => {
    setOpen(true);
    setSelectedButton("MultiMatch");
  };
  const handleNonMatchRiyanDialog = () => {
    setOpen(true);
    setSelectedButton("NonMatchRiyan");
  };
  const handleNonMatchBankDialog = () => {
    setOpen(true);
    setSelectedButton("NonMatchBank");
  };
  const handleReUpload = () => {
    navigate("/upload");
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <S.Container>
        <div></div>
        <div>
          <S.ButtonStyle
            isSelected={selectedButton === "PerfectMatch"}
            onClick={handlePerfectMatchDialog}
          >
            Perfect Match
          </S.ButtonStyle>
          <S.ButtonStyle
            isSelected={selectedButton === "MultiMatch"}
            onClick={handleMultiMatchDialog}
          >
            Multi Match
          </S.ButtonStyle>
          <S.ButtonStyle
            isSelected={selectedButton === "NonMatchRiyan"}
            onClick={handleNonMatchRiyanDialog}
          >
            Non-Match Riyan
          </S.ButtonStyle>
          <S.ButtonStyle
            isSelected={selectedButton === "NonMatchBank"}
            onClick={handleNonMatchBankDialog}
          >
            Non-Match Bank
          </S.ButtonStyle>
        </div>
        <div>
          <S.StyedButton variant="outlined" onClick={handleReUpload}>
            بارگذاری دوباره
          </S.StyedButton>
          <S.IMG src={theme === "dark" ? officeWhite : officeBlack} />
        </div>
      </S.Container>

      <MatchDialog
        open={open}
        handleClose={handleClose}
        selectedButton={selectedButton}
      />
    </>
  );
};

export default ReconciliationOfFunds;
