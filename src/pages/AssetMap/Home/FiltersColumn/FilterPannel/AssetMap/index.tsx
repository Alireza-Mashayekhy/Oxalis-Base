import * as S from './Styles';
import { useState, FC } from 'react';
import { SelectChangeEvent, Typography } from '@mui/material';
import CustomSelectComponent from '@/components/Select';
import ButtonWrapper from '@/components/ButtonWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '@/dispatchers/data';
import { getData } from '@/selectors/state';
import {
    createDataForAssetTypeFilter,
    createDataForVentureNameFilter,
    createDataForVentureTypeFilter,
} from '@/utils/dataTableFunctions';

interface filterData {
    value: string;
    label: string;
}
import { Label } from '@/components/Label';
import { AppDispatch, SFC } from '@/types';
import { Dropdown } from 'primereact/dropdown';

interface FilterPannelInterface {
    isResponsive?: boolean;
    handleAccordionCloseInResponsiveMode?: () => void;
}

const AssetMapFilterPannel: SFC<FilterPannelInterface> = ({
    isResponsive,
    handleAccordionCloseInResponsiveMode,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector(getData);

    const ventureType = createDataForVentureTypeFilter(data);
    const [ventureTypeValue, setVentureTypeValue] = useState<string>('');
    const [ventureNameValue, setVentureNameValue] = useState<string>('');
    const [assetTypeValue, setAssetTypeValue] = useState<string>('');

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
        dispatch(fetchData(filters));

        // to close the accordion in responsive mode as the filter is on an accordion
        if (isResponsive) {
            handleAccordionCloseInResponsiveMode();
        }
    };

    const handleResetFilters = () => {
        setVentureTypeValue('');
        setVentureNameValue('');
        setAssetTypeValue('');
        dispatch(fetchData());

        // to close the accordion in responsive mode as the filter is on an accordion
        if (isResponsive) {
            handleAccordionCloseInResponsiveMode();
        }
    };

    return (
        <S.Container>
            <Label>فیلترها</Label>
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
                <Label padding="5px 10px">نام صندوق</Label>
                <CustomSelectComponent
                    selectedValue={ventureNameValue}
                    handleChange={(e: SelectChangeEvent<string>) => {
                        setVentureNameValue(e.target.value as string);
                        setAssetType(
                            createDataForAssetTypeFilter(
                                data,
                                ventureTypeValue,
                                e.target.value
                            )
                        );
                    }}
                    fullWidth={true}
                    padding="5px"
                    placeholder="همه موارد"
                    options={ventureName}
                />
            </S.SelectContainer>
            <Label padding="5px 10px">نوع دارایی</Label>
            <CustomSelectComponent
                selectedValue={assetTypeValue}
                handleChange={(e: SelectChangeEvent<string>) =>
                    setAssetTypeValue(e.target.value as string)
                }
                fullWidth={true}
                padding="5px"
                placeholder="همه موارد"
                options={assetType}
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
                                color: 'white',
                                pr: 1,
                                fontSize: '12px',
                                fontFamily: 'IRANSans',
                            }}
                        >
                            اعمال فیلتر‌ها
                        </Typography>
                    </ButtonWrapper>
                </div>
                <div style={{ margin: '1rem 0px ' }}>
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
                                color: '#4788fd',
                                pr: 1,
                                fontSize: '12px',
                                fontFamily: 'IRANSans',
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

export default AssetMapFilterPannel;
