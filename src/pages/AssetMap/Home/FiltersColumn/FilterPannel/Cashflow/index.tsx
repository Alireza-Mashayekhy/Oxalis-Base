import * as S from './Styles';
import { useState, FC, useEffect } from 'react';
import { SelectChangeEvent, Typography } from '@mui/material';
import CustomSelectComponent from '@/components/Select';
import ButtonWrapper from '@/components/ButtonWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCashFlowFrame } from '@/dispatchers/cashflowFrame';
import { getCashFlowFrame } from '@/selectors/state';
import {
    createDataForAssetTypeFilter,
    createDataForVentureNameFilter,
    createDataForVentureTypeFilter,
} from '@/utils/FrameFunctions/cashflowFrame';

interface filterData {
    value: string;
    label: string;
}
import { Label } from '@/components/Label';
import { AppDispatch, SFC } from '@/types';

interface FilterPannelInterface {
    isResponsive?: boolean;
    handleAccordionCloseInResponsiveMode?: () => void;
}

const CashflowFilterPannel: SFC<FilterPannelInterface> = ({
    isResponsive,
    handleAccordionCloseInResponsiveMode,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector(getCashFlowFrame)?.data;
    const filterList = useSelector(getCashFlowFrame)?.filters;

    const ventureType = createDataForVentureTypeFilter(data);
    const [ventureTypeValue, setVentureTypeValue] = useState<string>();
    const [ventureNameValue, setVentureNameValue] = useState<string>();
    const [assetTypeValue, setAssetTypeValue] = useState<string>();

    const [ventureName, setVentureName] = useState<filterData[]>([
        { value: '', label: '' },
    ]);
    const [assetType, setAssetType] = useState<filterData[]>([
        { value: '', label: '' },
    ]);

    const handleApplyFilters = () => {
        const filters: Record<string, any> = {};
        if (ventureTypeValue) filters['VENTURE_TYPE'] = ventureTypeValue;
        if (ventureNameValue) filters['VENTURE_NAME'] = ventureNameValue;
        if (assetTypeValue) filters['ASSET_TYPE'] = assetTypeValue;
        dispatch(fetchCashFlowFrame(filters));

        // to close the accordion in responsive mode as the filter is on an accordion
        if (isResponsive) {
            handleAccordionCloseInResponsiveMode();
        }
    };

    const [isInitialFetch, setIsInitialFetch] = useState<boolean>(true);

    useEffect(() => {
        if (!isInitialFetch) {
            handleApplyFilters();
        } else {
            setIsInitialFetch(false);
        }
    }, [ventureTypeValue, ventureNameValue, assetTypeValue]);

    useEffect(() => {
        if (filterList) {
            setAssetTypeValue(filterList?.ASSET_TYPE);
            setVentureNameValue(filterList?.VENTURE_NAME);
            setVentureTypeValue(filterList?.VENTURE_TYPE);
        }
    }, [filterList]);

    return (
        <S.Container>
            <S.SelectContainer>
                <S.DropdownStyle
                    value={ventureTypeValue}
                    onChange={(e) => {
                        setVentureTypeValue(e.target.value as string);
                        setVentureName(
                            createDataForVentureNameFilter(data, e.target.value)
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
                        setAssetType(
                            createDataForAssetTypeFilter(
                                data,
                                ventureTypeValue,
                                e.target.value
                            )
                        );
                    }}
                    options={ventureName}
                    filter
                    showClear
                    className="w-full"
                    placeholder="نام صندوق"
                />
            </S.SelectContainer>
            <S.SelectContainer>
                <S.DropdownStyle
                    value={assetTypeValue}
                    onChange={(e) => {
                        setAssetTypeValue(e.target.value as string);
                    }}
                    options={assetType}
                    filter
                    showClear
                    className="w-full"
                    placeholder="تاریخ"
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

export default CashflowFilterPannel;
