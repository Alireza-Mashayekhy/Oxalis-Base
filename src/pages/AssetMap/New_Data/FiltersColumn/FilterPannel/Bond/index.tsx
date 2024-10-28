import { useState, useMemo, useEffect } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getSalesData, getSalesFilterData } from '@/selectors/state';
import { setSalesData } from '@/redux/store/salesData';
import { setSalesFilteredData } from '@/redux/store/salesFilter';
import { SFC } from '@/types';
import { SalesData } from '@/types/new_data';
import { MyDatePickerRange } from '@/components/Calendar/index';
import moment from 'moment-jalaali';
import * as S from './Styles';
import { Label } from '@/components/Label';
import ButtonWrapper from '@/components/ButtonWrapper';

interface FilterPannelInterface {
    isResponsive?: boolean;
    handleAccordionCloseInResponsiveMode?: () => void;
}

const BondFilterPannel: SFC<FilterPannelInterface> = ({
    isResponsive,
    handleAccordionCloseInResponsiveMode,
}) => {
    const [dateRange, setDateRange] = useState<string[]>(['', '']);
    const dispatch = useDispatch();
    const data: SalesData[] = useSelector(getSalesData);
    const reduxData: SalesData[] = useSelector(getSalesFilterData);

    const [copyData, setCopyData] = useState<SalesData[]>([]);
    useEffect(() => {
        setCopyData([...data]);
    }, [data]);

    const filteredData = useMemo(() => {
        const [startDateStr, endDateStr] = dateRange;

        if (!startDateStr || !endDateStr) {
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
        dispatch(setSalesFilteredData(currentFilteredData));
    };

    const handleRemoveFilters = () => {
        setDateRange(['', '']);
        dispatch(setSalesFilteredData(copyData));
    };

    useEffect(() => {
        if (dateRange[0] === '' && dateRange[1] === '') {
            return;
        }

        const currentFilteredData = filteredData;

        if (JSON.stringify(currentFilteredData) !== JSON.stringify(data)) {
            dispatch(setSalesFilteredData(currentFilteredData));
        }
    }, [dateRange, filteredData, dispatch]);

    return (
        <>
            <>
                <Label padding="5px 10px"> فیلتر فروش</Label>
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
                                onClick={() => handleApplyFilters()}
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
                                onClick={() => handleRemoveFilters()}
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
        </>
    );
};

export default BondFilterPannel;
