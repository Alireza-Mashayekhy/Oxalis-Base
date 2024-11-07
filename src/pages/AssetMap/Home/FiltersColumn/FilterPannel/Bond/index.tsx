import * as S from "./Styles";
import { useState, FC, useEffect } from "react";
import { SelectChangeEvent, Typography } from "@mui/material";
import CustomSelectComponent from "@/components/Select";
import ButtonWrapper from "@/components/ButtonWrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchBondFrame } from "@/dispatchers/bondFrame";
import { getBondFrame } from "@/selectors/state";
import {
  createDataForVentureTypeFilter,
  createDataForAssetTypeFilter,
  createDataForVentureNameFilter,
  createDataForVentureNameBasedOnAssetNameFilter,
  createDataForAssetTypeFilterBasedOnAssetName,
  createDataForAssetTypeValuesInFilter,
} from "@/utils/FrameFunctions/bondsFrame";

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

const BondFilterPannel: SFC<FilterPannelInterface> = ({
  isResponsive,
  handleAccordionCloseInResponsiveMode,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getBondFrame);

  // const ventureType = createDataForVentureTypeFilter(data);
  const assetType = createDataForAssetTypeValuesInFilter(data);
  const [assetNameValue, setAssetNameValue] = useState<string>();
  const [ventureNameValue, setVentureNameValue] = useState<string>();
  const [assetTypeValue, setAssetTypeValue] = useState<string>();

  const [ventureName, setVentureName] = useState<filterData[]>([
    { value: "", label: "" },
  ]);
  const [assetName, setAssetName] = useState<filterData[]>([
    { value: "", label: "" },
  ]);

  const handleApplyFilters = () => {
    const filters: Record<string, any> = {};
    if (assetNameValue) filters["SYMBOL"] = assetNameValue;
    if (ventureNameValue) filters["VENTURE_NAME"] = ventureNameValue;
    if (assetTypeValue) filters["ASSET"] = assetTypeValue;
    dispatch(fetchBondFrame(filters));

    // to close the accordion in responsive mode as the filter is on an accordion
    if (isResponsive) {
      handleAccordionCloseInResponsiveMode();
    }
  };

  useEffect(() => {
    handleApplyFilters();
  }, [assetNameValue, ventureNameValue, assetTypeValue]);

  const handleResetFilters = () => {
    setAssetNameValue("");
    setVentureNameValue("");
    setAssetTypeValue("");
    dispatch(fetchBondFrame());
    setAssetName([]);
    setVentureName([]);

    // to close the accordion in responsive mode as the filter is on an accordion
    if (isResponsive) {
      handleAccordionCloseInResponsiveMode();
    }
  };

  return (
    <S.Container>
      <Label>فیلتر اوراق</Label>
      <S.SelectContainer>
        <S.DropdownStyle
          value={assetTypeValue}
          onChange={(e) => {
            setAssetTypeValue(e.target.value as string);
            setAssetName(
              createDataForAssetTypeFilterBasedOnAssetName(data, e.target.value)
            );
          }}
          options={assetType}
          filter
          showClear
          className="w-full"
          placeholder="نوع اوراق"
        />
      </S.SelectContainer>
      <S.SelectContainer>
        <S.DropdownStyle
          value={assetNameValue}
          onChange={(e) => {
            setAssetNameValue(e.target.value as string);
            setVentureName(
              createDataForVentureNameBasedOnAssetNameFilter(
                data,
                assetTypeValue,
                e.target.value
              )
            );
          }}
          options={assetName}
          filter
          showClear
          className="w-full"
          placeholder="نام اوراق"
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

export default BondFilterPannel;
