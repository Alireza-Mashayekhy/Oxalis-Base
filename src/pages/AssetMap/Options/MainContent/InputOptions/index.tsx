import { SFC } from "@/types";
import * as S from "./Styles";
import { useState } from "react";
import TextField_n2 from "@/components/textfield/TextFiled2";
import CustomSelectComponent from "@/components/Select";
import { SelectChangeEvent } from "@mui/material";
import { riskOptions } from "./riskOptions";

const InputOptions: SFC = () => {
  const [minInvertigation, setMinInvestigation] = useState<number>(0);
  const [minYTM, setMinYTM] = useState<number>(0);
  const [maxDays, setMaxDays] = useState<number>(0);
  const [risk, setRisk] = useState<string>("");

  return (
    <S.Container>
      <S.OuterFlexContainer>
        <S.FlexContainer>
          <div>کمینه سرمایه‌گذاری</div>
          <div>
            <TextField_n2
              value={minInvertigation}
              onChange={(e) => setMinInvestigation(Number(e.target.value))}
              adornmenLabel="میلیون ریال"
            />
          </div>
        </S.FlexContainer>
        <S.FlexContainer>
          <div>کمینه YTM</div>
          <div>
            <TextField_n2
              value={minYTM}
              onChange={(e) => setMinYTM(Number(e.target.value))}
              adornmenLabel="%"
            />
          </div>
        </S.FlexContainer>
        <S.FlexContainer>
          <div>Max Days To Maturity</div>
          <div>
            <TextField_n2
              value={maxDays}
              onChange={(e) => setMaxDays(Number(e.target.value))}
              adornmenLabel="روز"
            />
          </div>
        </S.FlexContainer>
        <S.FlexContainer>
          <div>ریسک</div>
          <div>
            <CustomSelectComponent
              options={riskOptions}
              selectedValue={risk}
              handleChange={(e: SelectChangeEvent<string>) =>
                setRisk(e.target.value as string)
              }
              fullWidth={true}
              padding="10px"
            />
          </div>
        </S.FlexContainer>
      </S.OuterFlexContainer>
    </S.Container>
  );
};
export default InputOptions;
