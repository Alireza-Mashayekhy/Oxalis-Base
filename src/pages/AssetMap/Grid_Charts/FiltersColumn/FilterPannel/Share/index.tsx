import { SelectChangeEvent, Typography } from "@mui/material";
import {useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ButtonWrapper from "@/components/ButtonWrapper";
import CustomSelectComponent from "@/components/Select";
import { fetchShareFrame } from "@/dispatchers/shareFrame";
import { getShareFrame } from "@/selectors/state";
import {
  createDataForShareFilter,
  createDataForVentureNameFilter,
  createDataForVentureTypeFilter,
} from "@/utils/FrameFunctions/sharesFrame";

import * as S from "./Styles";

interface filterData {
  value: string;
  label: string;
}
import { Label } from "@/components/Label";
import { AppDispatch, SFC } from "@/types";

interface FilterPannelInterface {
  isResponsive?: boolean;
  handleAccordionCloseInResponsiveMode?: () => void;
}

const ShareFilterPannel: SFC<FilterPannelInterface> = ({
  isResponsive,
  handleAccordionCloseInResponsiveMode,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getShareFrame)?.data;

  const shareOptions = createDataForShareFilter(data);
  const [ventureTypeValue, setVentureTypeValue] = useState<string>("");
  const [ventureNameValue, setVentureNameValue] = useState<string>("");
  const [shareValue, setshareValue] = useState<string>("");

  const [ventureName, setVentureName] = useState<filterData[]>([
    { value: "", label: "" },
  ]);
  const [ventureType, setVentureType] = useState<filterData[]>([
    { value: "", label: "" },
  ]);

  const handleApplyFilters = () => {
    const filters: Record<string, any> = {};
    if (ventureTypeValue) filters["VENTURE_TYPE"] = ventureTypeValue;
    if (ventureNameValue) filters["VENTURE_NAME"] = ventureNameValue;
    if (shareValue) filters["SYMBOL"] = shareValue;

    dispatch(fetchShareFrame(filters));

    // to close the accordion in responsive mode as the filter is on an accordion
    if (isResponsive) {
      handleAccordionCloseInResponsiveMode();
    }
  };

  const handleResetFilters = () => {
    setVentureTypeValue("");
    setVentureNameValue("");
    setshareValue("");
    dispatch(fetchShareFrame());
    setVentureName([]);
    setVentureType([]);

    // to close the accordion in responsive mode as the filter is on an accordion
    if (isResponsive) {
      handleAccordionCloseInResponsiveMode();
    }
  };

  return (
    <S.Container>
      <Label>فیلتر سهام</Label>
      <S.SelectContainer>
        <Label padding="5px 10px">نام سهام</Label>
        <CustomSelectComponent
          selectedValue={shareValue}
          handleChange={(e: SelectChangeEvent<string>) => {
            setshareValue(e.target.value as string);
            setVentureType(
              createDataForVentureTypeFilter(data, e.target.value)
            );
          }}
          fullWidth={true}
          padding="5px"
          placeholder=""
          options={shareOptions}
        />
      </S.SelectContainer>
      <S.SelectContainer>
        <Label padding="5px 10px">نوع صندوق</Label>
        <CustomSelectComponent
          selectedValue={ventureTypeValue}
          handleChange={(e: SelectChangeEvent<string>) => {
            setVentureTypeValue(e.target.value as string);
            setVentureName(
              createDataForVentureNameFilter(data, shareValue, e.target.value)
            );
          }}
          fullWidth={true}
          padding="5px"
          placeholder="همه موارد"
          options={ventureType}
        />
      </S.SelectContainer>
      <Label padding="5px 10px">نام صندوق</Label>
      <CustomSelectComponent
        selectedValue={ventureNameValue}
        handleChange={(e: SelectChangeEvent<string>) =>
          setVentureNameValue(e.target.value as string)
        }
        fullWidth={true}
        padding="5px"
        placeholder="همه موارد"
        options={ventureName}
      />
      <S.ButtonContainer>
        <div style={{}}>
          <ButtonWrapper
            borderRadius="5px"
            height="30px"
            borderColor="#4788fd"
            backgroundColor="#4788fd"
            variant="outlined"
            fullWidth={true}
            fontSize="12px"
            onClick={handleApplyFilters}
          >
            <Typography
              component="span"
              sx={{
                color: "white",
                pr: 1,
                fontSize: "12px",
                fontFamily: "IRANSans",
              }}
            >
              اعمال فیلتر‌ها
            </Typography>
          </ButtonWrapper>
        </div>
        <div style={{ margin: "1rem 0px " }}>
          <ButtonWrapper
            borderRadius="5px"
            height="30px"
            borderColor="#4788fd"
            variant="outlined"
            fullWidth={true}
            fontSize="12px"
            onClick={handleResetFilters}
          >
            <Typography
              component="span"
              sx={{
                color: "#4788fd",
                pr: 1,
                fontSize: "12px",
                fontFamily: "IRANSans",
              }}
            >
              بازتعریف
            </Typography>
          </ButtonWrapper>
        </div>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ShareFilterPannel;
