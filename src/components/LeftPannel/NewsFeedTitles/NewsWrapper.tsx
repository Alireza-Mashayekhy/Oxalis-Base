import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";

import { Label } from "@/components/Label";
import { fonts } from "@/styles";

import * as S from "./Styles";

interface NewWrapper {
  title: string;
  summary: string;
}

function NewsWrapper({ title, summary }: NewWrapper): React.ReactElement {
  return (
    <S.Container>
      <S.FlexContainer>
        <S.FlexItem>
          <ArrowCircleDownTwoToneIcon
            sx={{
              color: "#4b0712",
              display: "block",
              mx: 1,
              fontSize: fonts.size.l,
            }}
          />
        </S.FlexItem>
        <S.FlexItem>
          <Label fontWeight={fonts.weight.semiBold}>{title}</Label>
          <Label>{summary}</Label>
        </S.FlexItem>
      </S.FlexContainer>
    </S.Container>
  );
}

export default NewsWrapper;
