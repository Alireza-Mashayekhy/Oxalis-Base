import * as S from "./Styles";
import { useState, FC, useEffect } from "react";
import { SelectChangeEvent, Typography } from "@mui/material";
import CustomSelectComponent from "@/components/Select";
import ButtonWrapper from "@/components/ButtonWrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchShareFrame } from "@/dispatchers/shareFrame";
import { getShareFrame } from "@/selectors/state";
import {
  createDataForShareFilter,
  createDataForVentureNameFilter,
  createDataForVentureTypeFilter,
} from "@/utils/FrameFunctions/sharesFrame";

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
  const filterList = useSelector(getShareFrame)?.filters;

  const shareOptions = createDataForShareFilter(data);
  const [ventureTypeValue, setVentureTypeValue] = useState<string>();
  const [ventureNameValue, setVentureNameValue] = useState<string>();
  const [shareValue, setshareValue] = useState<string>();

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

  useEffect(() => {
    if (filterList) {
      setVentureTypeValue(filterList?.VENTURE_TYPE);
      setVentureNameValue(filterList?.VENTURE_NAME);
      setshareValue(filterList?.SYMBOL);
    }
  }, [filterList]);

  useEffect(() => {
    handleApplyFilters();
  }, [ventureTypeValue, ventureNameValue, shareValue]);

  return (
    <S.Container>
      <S.SelectContainer>
        <S.DropdownStyle
          value={shareValue}
          onChange={(e) => {
            setshareValue(e.target.value as string);
            setVentureType(
              createDataForVentureTypeFilter(data, e.target.value)
            );
          }}
          options={shareOptions}
          filter
          showClear
          className="w-full"
          placeholder="نام سهام"
        />
      </S.SelectContainer>
      <S.SelectContainer>
        <S.DropdownStyle
          value={ventureTypeValue}
          onChange={(e) => {
            setVentureTypeValue(e.target.value as string);
            setVentureName(
              createDataForVentureNameFilter(data, shareValue, e.target.value)
            );
          }}
          options={ventureType}
          filter
          showClear
          className="w-full"
          placeholder="نوع صندوق"
        />
      </S.SelectContainer>
      <S.SelectContainer>
        <S.DropdownStyle
          value={ventureNameValue}
          onChange={(e) => {
            setVentureNameValue(e.target.value as string);
          }}
          options={ventureName}
          filter
          showClear
          className="w-full"
          placeholder="نام صندوق"
        />
      </S.SelectContainer>
      {/* <S.ButtonContainer>
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
      </S.ButtonContainer> */}
    </S.Container>
  );
};

export default ShareFilterPannel;
