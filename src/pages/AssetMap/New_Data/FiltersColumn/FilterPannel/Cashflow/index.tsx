import { Typography } from '@mui/material';
import moment from 'moment-jalaali';
import { useEffect,useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonWrapper from '@/components/ButtonWrapper';
import { MyDatePickerRange } from '@/components/Calendar/index';
import { Label } from '@/components/Label';
import { setmanufacturingFilterData } from '@/redux/store/ManufacturingFilter';
import { getManData } from '@/selectors/state';
import { SFC } from '@/types';
import { ManufacturingData } from '@/types/new_data';

import * as S from './Styles';

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
    const data: ManufacturingData[] = useSelector(getManData);

    const [copyData, setCopyData] = useState<ManufacturingData[]>([]);
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

        return data.filter((item) => {
            const jalaliDate = moment(
                item.jalali_date,
                'jYYYY/jMM/jDD'
            ).toDate();
            return jalaliDate >= start && jalaliDate <= end;
        });
    }, [copyData, dateRange]);

    const handleApplyFilters = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const currentFilteredData = filteredData;
        dispatch(setmanufacturingFilterData(currentFilteredData));
    };

    const handleRemoveFilters = () => {
        setDateRange(['', '']);
        dispatch(setmanufacturingFilterData(copyData));
    };

    useEffect(() => {
        if (dateRange[0] === '' && dateRange[1] === '') {
            return;
        }

        const currentFilteredData = filteredData;

        if (JSON.stringify(currentFilteredData) !== JSON.stringify(copyData)) {
            dispatch(setmanufacturingFilterData(currentFilteredData));
        }
    }, [dateRange, filteredData, dispatch]);

    return (
        <>
            <Label padding="5px 10px"> فیلتر تولید</Label>
            <S.SelectContainer>
                <Label padding="5px 10px"> بازه زمانی</Label>
                <form onSubmit={handleApplyFilters}>
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

export default BondFilterPannel;
