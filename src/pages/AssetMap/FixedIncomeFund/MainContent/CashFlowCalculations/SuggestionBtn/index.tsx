import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import { useState } from "react";

import TextField_n2 from "@/components/textfield/TextFiled2";
import { SFC } from "@/types";

import * as S from "./Styles";

const SuggestionBtn: SFC = () => {
  const [investmentText, setInvestmentText] = useState("");
  return (
    <>
      <S.OuterFlexContainer>
        <div>
          <S.Button id="uploadBtn">
            <span>بارگذاری فایل جریان نقدی</span>
            <span>
              <UploadFileOutlinedIcon />
            </span>
          </S.Button>
        </div>

        <S.InnerFlexContainer>
          <div>بیشینه سرمایه‌گذاری</div>
          <div>
            <TextField_n2
              adornmenLabel="میلیارد ریال"
              value={investmentText}
              onChange={(e) => setInvestmentText(e.target.value)}
            />
          </div>
        </S.InnerFlexContainer>
      </S.OuterFlexContainer>

      <S.PortfoButtonContainer>
        <S.Button id="portfo">
          <span>محاسبه پورتفو</span>
          <span>
            <DoneAllOutlinedIcon />
          </span>
        </S.Button>
      </S.PortfoButtonContainer>
      <S.ButtonContainer>
        <S.Button className="footerBtns">نمایش جریان نقدی</S.Button>
        <S.Button className="footerBtns" id="saveBtn">
          <span>دانلود</span>
          <span>
            <SaveOutlinedIcon />
          </span>
        </S.Button>
        <S.Button className="footerBtns">نمایش پورتفو پیشنهادی</S.Button>
      </S.ButtonContainer>
    </>
  );
};
export default SuggestionBtn;
