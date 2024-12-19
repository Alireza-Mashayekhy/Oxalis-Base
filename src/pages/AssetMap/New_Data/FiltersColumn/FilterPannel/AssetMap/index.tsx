import { Typography } from '@mui/material';
import moment from 'moment-jalaali';
import { useEffect,useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonWrapper from '@/components/ButtonWrapper';
import { MyDatePickerRange } from '@/components/Calendar/index';
import { Label } from '@/components/Label';
import { setFilteredData } from '@/redux/store/FilterData';
import { getFilterData,getFinanceData } from '@/selectors/state';
import { SFC } from '@/types';
import { FinancialData } from '@/types/new_data';

import * as S from './Styles';
interface FilterPannelInterface {
    isResponsive?: boolean;
    handleAccordionCloseInResponsiveMode?: () => void;
}

const AssetMapFilterPannel: SFC<FilterPannelInterface> = ({
    isResponsive,
    handleAccordionCloseInResponsiveMode,
}) => {
    const [dateRange, setDateRange] = useState<string[]>(['', '']);
    const dispatch = useDispatch();
    const data: FinancialData[] = useSelector(getFinanceData);
    const filterData: FinancialData[] = useSelector(getFilterData);

    const [copyData, setCopyData] = useState<FinancialData[]>([]);
    useEffect(() => {
        setCopyData([...data]);
    }, [data]);

    const filteredData = useMemo(() => {
        const [startDateStr, endDateStr] = dateRange;

        if (startDateStr === '' || endDateStr === '') {
            return copyData;
        }

        const start = moment(startDateStr, 'jYYYY/jMM/jDD').toDate();
        const end = moment(endDateStr, 'jYYYY/jMM/jDD').toDate();

        return copyData.filter((item) => {
            const jalaliDate = moment(
                item.jalali_date,
                'jYYYY/jMM/jDD'
            ).toDate();
            return jalaliDate >= start && jalaliDate <= end;
        });
    }, [copyData, dateRange]);

    const handleApplyFilters = () => {
        const currentFilteredData = filteredData;
        dispatch(setFilteredData(currentFilteredData));
    };

    const handleRemoveFilters = () => {
        setDateRange(['', '']);
        dispatch(setFilteredData(copyData));
    };

    useEffect(() => {
        if (dateRange[0] === '' && dateRange[1] === '') {
            return;
        }

        const currentFilteredData = filteredData;

        if (JSON.stringify(currentFilteredData) !== JSON.stringify(copyData)) {
            dispatch(setFilteredData(currentFilteredData));
        }
    }, [dateRange, filteredData, dispatch]);

    return (
        <>
            <Label padding="5px 10px"> فیلتر مالی</Label>
            <S.SelectContainer>
                <Label padding="5px 10px"> بازه زمانی</Label>
                <form>
                    <S.StyledDatePickerRange className="inputCalendar">
                        <MyDatePickerRange
                            _setDate={setDateRange}
                            _date={dateRange}
                            _resetDates={
                                dateRange[0] === '' && dateRange[1] === ''
                            }
                        />
                    </S.StyledDatePickerRange>
                    <S.ButtonContainer>
                        <ButtonWrapper
                            borderRadius="5px"
                            height="30px"
                            borderColor="#4788fd"
                            backgroundColor="#4788fd"
                            variant="outlined"
                            fullWidth={true}
                            fontSize="12px"
                            marginBottom="10px"
                            type="submit"
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
                        <ButtonWrapper
                            borderRadius="5px"
                            height="30px"
                            borderColor="#f44336"
                            backgroundColor="#f44336"
                            variant="outlined"
                            fullWidth={true}
                            fontSize="12px"
                            marginBottom="10px"
                            onClick={handleRemoveFilters}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    color: '#fff',
                                    pr: 1,
                                    fontSize: '12px',
                                    fontFamily: 'IRANSans',
                                }}
                            >
                                حذف فیلتر
                            </Typography>
                        </ButtonWrapper>
                    </S.ButtonContainer>
                </form>
            </S.SelectContainer>
        </>
    );
};

export default AssetMapFilterPannel;
