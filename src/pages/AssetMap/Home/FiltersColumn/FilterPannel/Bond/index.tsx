import * as S from './Styles';
import { useState, FC } from 'react';
import { SelectChangeEvent, Typography } from '@mui/material';
import CustomSelectComponent from '@/components/Select';
import ButtonWrapper from '@/components/ButtonWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBondFrame } from '@/dispatchers/bondFrame';
import { getBondFrame } from '@/selectors/state';
import {
    createDataForVentureTypeFilter,
    createDataForAssetTypeFilter,
    createDataForVentureNameFilter,
    createDataForVentureNameBasedOnAssetNameFilter,
    createDataForAssetTypeFilterBasedOnAssetName,
    createDataForAssetTypeValuesInFilter,
} from '@/utils/FrameFunctions/bondsFrame';

interface filterData {
    value: string;
    label: string;
}
import { Label } from '@/components/Label';
import { SFC } from '@/types';

interface FilterPannelInterface {
    isResponsive?: boolean;
    handleAccordionCloseInResponsiveMode?: () => void;
}

const BondFilterPannel: SFC<FilterPannelInterface> = ({
    isResponsive,
    handleAccordionCloseInResponsiveMode,
}) => {
    const dispatch = useDispatch();
    const data = useSelector(getBondFrame);

    // const ventureType = createDataForVentureTypeFilter(data);
    const assetType = createDataForAssetTypeValuesInFilter(data);
    const [assetNameValue, setAssetNameValue] = useState<string>('');
    const [ventureNameValue, setVentureNameValue] = useState<string>('');
    const [assetTypeValue, setAssetTypeValue] = useState<string>('');

    const [ventureName, setVentureName] = useState<filterData[]>([
        { value: '', label: '' },
    ]);
    const [assetName, setAssetName] = useState<filterData[]>([
        { value: '', label: '' },
    ]);

    const handleApplyFilters = () => {
        const filters: Record<string, any> = {};
        if (assetNameValue) filters['SYMBOL'] = assetNameValue;
        if (ventureNameValue) filters['VENTURE_NAME'] = ventureNameValue;
        if (assetTypeValue) filters['ASSET'] = assetTypeValue;
        dispatch(fetchBondFrame(filters));

        // to close the accordion in responsive mode as the filter is on an accordion
        if (isResponsive) {
            handleAccordionCloseInResponsiveMode();
        }
    };

    const handleResetFilters = () => {
        setAssetNameValue('');
        setVentureNameValue('');
        setAssetTypeValue('');
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
                <Label padding="5px 10px">نوع اوراق</Label>
                <CustomSelectComponent
                    selectedValue={assetTypeValue}
                    handleChange={(e: SelectChangeEvent<string>) => {
                        setAssetTypeValue(e.target.value as string);
                        setAssetName(
                            createDataForAssetTypeFilterBasedOnAssetName(
                                data,
                                e.target.value
                            )
                        );
                    }}
                    fullWidth={true}
                    padding="5px"
                    placeholder=""
                    options={assetType}
                />
            </S.SelectContainer>
            <S.SelectContainer>
                <Label padding="5px 10px">نام اوراق</Label>
                <CustomSelectComponent
                    selectedValue={assetNameValue}
                    handleChange={(e: SelectChangeEvent<string>) => {
                        setAssetNameValue(e.target.value as string);
                        setVentureName(
                            createDataForVentureNameBasedOnAssetNameFilter(
                                data,
                                assetTypeValue,
                                e.target.value
                            )
                        );
                    }}
                    fullWidth={true}
                    padding="5px"
                    placeholder="همه موارد"
                    options={assetName}
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

export default BondFilterPannel;
