import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { fonts } from "@/styles";
import { SFC } from "@/types";

import MultiMatchTables from "../../MultiMatch/Tables";
import NonMatchBankTables from "../../NonMatchBank/Tables";
import NonMatchRiyanTables from "../../NonMatchRiyan/Tables";
import PerfectMatchTables from "../../PerfectMatch/Tables";
import * as S from "./Styles";

interface Stepper {
  totalSteps: number;
  activeStep: number;
  selectedButton: string;
  // setActiveStep: (value: number | ((prevActiveStep: number) => number)) => void;
}

const HorizontalStepper: SFC<Stepper> = ({
  totalSteps,
  activeStep,
  selectedButton,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      {activeStep !== totalSteps && (
        <S.PageContainer>
          {selectedButton === "PerfectMatch" && <PerfectMatchTables />}
          {selectedButton === "MultiMatch" && <MultiMatchTables />}
          {selectedButton === "NonMatchRiyan" && <NonMatchRiyanTables />}
          {selectedButton === "NonMatchBank" && <NonMatchBankTables />}
        </S.PageContainer>
      )}

      {activeStep === totalSteps && (
        <>
          <Typography
            sx={{
              mt: 2,
              mb: 1,
              fontFamily: `${fonts.family.default}`,
              direction: "rtl",
            }}
          >
            خاتمه
          </Typography>
        </>
      )}
    </Box>
  );
};

export default HorizontalStepper;
