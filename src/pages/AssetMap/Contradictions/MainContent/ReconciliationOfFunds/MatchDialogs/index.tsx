import DialogWrapper from "@/components/DialogModalWrapper";
import { SFC } from "@/types";
import DoneAllOutlined from "@mui/icons-material/DoneAllOutlined";

import { useState } from "react";
import * as S from "./Styles";
import HorizontalStepper from "./Dialog";

interface PerfectMatch {
  open: boolean;
  handleClose: () => void;
  selectedButton: string;
}
const totalSteps = 3;

const MatchDialog: SFC<PerfectMatch> = ({
  open,
  handleClose,
  selectedButton,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <DialogWrapper
        open={open}
        handleClose={handleClose}
        title={selectedButton}
        body={
          <HorizontalStepper
            totalSteps={totalSteps}
            activeStep={activeStep}
            selectedButton={selectedButton}
          />
        }
        footer={
          <Footer
            handleNext={handleNext}
            handleBack={handleBack}
            activeStep={activeStep}
            totalSteps={totalSteps}
          />
        }
      />
    </>
  );
};

export default MatchDialog;

interface FooterTypes {
  handleNext: () => void;
  handleBack: () => void;
  activeStep: number;
  totalSteps: number;
}

const Footer: SFC<FooterTypes> = ({
  handleNext,
  handleBack,
  activeStep,
  totalSteps,
}) => {
  return (
    <>
      <S.FooterContainer>
        <S.StyedButton
          onClick={handleNext}
          disabled={activeStep === totalSteps}
        >
          {activeStep === totalSteps ? "پایان" : "بعدی"}
        </S.StyedButton>
        {activeStep !== totalSteps && (
          <S.StyedButton onClick={handleNext} startIcon={<DoneAllOutlined />}>
            پذیرش
          </S.StyedButton>
        )}

        {/* <S.Gap /> */}
        <S.StyedButton
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          قبلی
        </S.StyedButton>
      </S.FooterContainer>
    </>
  );
};

// list of icon to use to btn
// PublishedWithChangesOutlined
// DoneAllOutlined
// AssignmentTurnedInOutlined
