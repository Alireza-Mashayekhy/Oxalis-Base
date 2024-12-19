import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '@/dispatchers/data';
import { getData } from '@/selectors/state';
import {
    createDataForAssetTypeFilter,
    createDataForVentureNameFilter,
    createDataForVentureTypeFilter,
} from '@/utils/dataTableFunctions';

import * as S from './Styles';

interface filterData {
    value: string;
    label: string;
}
import { AppDispatch, SFC } from '@/types';

interface FilterPannelInterface {
    isResponsive?: boolean;
    handleAccordionCloseInResponsiveMode?: () => void;
}

const AssetMapFilterPannel: SFC<FilterPannelInterface> = ({
    isResponsive,
    handleAccordionCloseInResponsiveMode,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector(getData)?.data;
    const filterList = useSelector(getData)?.filters;

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
        dispatch(fetchData(filters));

        if (isResponsive) {
            handleAccordionCloseInResponsiveMode();
        }
    };

    useEffect(() => {
        if (filterList) {
            setVentureTypeValue(filterList?.VENTURE_TYPE);
            setVentureNameValue(filterList?.VENTURE_NAME);
            setAssetTypeValue(filterList?.ASSET_TYPE);
        }
    }, [filterList]);

    const [isInitialFetch, setIsInitialFetch] = useState<boolean>(true);

    useEffect(() => {
        if (!isInitialFetch) {
            handleApplyFilters();
        } else {
            setIsInitialFetch(false);
        }
    }, [ventureTypeValue, ventureNameValue, assetTypeValue]);

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
                    placeholder="نوع دارایی"
                />
            </S.SelectContainer>
        </S.Container>
    );
};

export default AssetMapFilterPannel;
