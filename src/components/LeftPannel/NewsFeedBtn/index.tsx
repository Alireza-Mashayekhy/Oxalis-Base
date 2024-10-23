import { SFC } from "@/types";
import * as S from "./Styles";
import ButtonWrapper from "@/components/ButtonWrapper";
import { fonts } from "@/styles";
import { Label } from "@/components/Label";

const newsCategoryLbl = [
  { id: "2", label: "اخبار" },
  { id: "3", label: "کلان اقتصادی" },
  { id: "1", label: "اطلاعات داخلی صنعت" },
  { id: "4", label: "بررسی رقبا" },
];

const NewsFeedBtn: SFC = () => {
  return (
    <S.Container>
      <h4>بررسی موارد با تاثیرگذاری بالا</h4>
      <S.NormalSizeContainer>
        {newsCategoryLbl.map((item, index) => (
          <ButtonWrapper
            borderRadius="20px"
            height="25px"
            borderColor="#656364"
            variant="outlined"
            fullWidth={false}
            fontSize={fonts.size.s}
            marginLeft={3}
            key={index}
          >
            <Label fontWeight={fonts.weight.medium}>{item.label}</Label>
          </ButtonWrapper>
        ))}
      </S.NormalSizeContainer>
      <S.SmallContainer>
        <S.StyledUl>
          {newsCategoryLbl.map((item) => (
            <S.StyledLi key={item.id}>{item.label}</S.StyledLi>
          ))}
        </S.StyledUl>
      </S.SmallContainer>
    </S.Container>
  );
};

export default NewsFeedBtn;
