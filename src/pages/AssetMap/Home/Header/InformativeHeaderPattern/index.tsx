import { LinearProgress } from "@mui/material";

import { Label } from "@/components/Label";
import { fonts } from "@/styles";
import { SFC } from "@/types";

import * as S from "./Styles";

const InformativeHeaderPattern: SFC<{
  title: string;
  value: string;
  progressBarValue: number;
  color: string;
}> = ({ title, value, progressBarValue, color }) => {
  return (
    <>
      <S.Container>
        <div>
          {/* <Label fontWeight={fonts.weight.semiBold}></Label> */}
          {title && <Label fontWeight={fonts.weight.bold}>{title}</Label>}
          {value &&<Label fontWeight={fonts.weight.semiBold}>{`${value}B`}</Label>}
        </div>

        <div>
          <Label>{progressBarValue}%</Label>
          <LinearProgress
            variant="determinate"
            value={progressBarValue}
            color="inherit"
            sx={{
              height: 16, // Adjust the height of the progress bar
              mx: 0,
              borderRadius: "4px",
              "& .MuiLinearProgress-bar": {
                backgroundColor: { color }, // Custom color for the filled part
              },
            }}
          />
        </div>
      </S.Container>
    </>
  );
};

export default InformativeHeaderPattern;
