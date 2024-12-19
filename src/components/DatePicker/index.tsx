import 'react-multi-date-picker/styles/layouts/mobile.css';

import { useEffect, useState } from 'react';
import gregorian from 'react-date-object/calendars/gregorian';
import persian from 'react-date-object/calendars/persian';
import gregorian_fa from 'react-date-object/locales/gregorian_fa';
import persian_fa from 'react-date-object/locales/persian_fa';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

// ---------------------------------------------------------------------- //
//                            import style                                //
// ---------------------------------------------------------------------- //
import { FullWidthDiv, MyInputDiv, RtlDiv, StyledDatePicker } from './Styles';
// ---------------------------------------------------------------------- //
//                            import types                                //
// ---------------------------------------------------------------------- //
import { DatePickerType } from './types';

export const convert = ({
    startDate,
    endDate,
    format,
}: {
    startDate: DateObject;
    endDate: DateObject;
    format: string;
}) => {
    const getTimeString = (dateObj) => {
        const hours = dateObj.toDate().getHours();
        const minutes = dateObj.toDate().getMinutes();
        const seconds = dateObj.toDate().getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    };

    const gregorianStartDateObject = new DateObject(startDate).convert(
        gregorian,
        gregorian_fa
    );
    const gregorianEndDateObject = new DateObject(endDate).convert(
        gregorian,
        gregorian_fa
    );

    const persianStartDateObject = new DateObject(startDate).convert(
        persian,
        persian_fa
    );
    const persianEndDateObject = new DateObject(endDate).convert(
        persian,
        persian_fa
    );

    return {
        gregorianStart: gregorianStartDateObject.format(),
        gregorianEnd: gregorianEndDateObject.format(),
        persianStart: persianStartDateObject.format(),
        persianEnd: persianEndDateObject.format(),
        gregorianStartTime: getTimeString(gregorianStartDateObject),
        gregorianEndTime: getTimeString(gregorianEndDateObject),
        persianStartTime: getTimeString(persianStartDateObject),
        persianEndTime: getTimeString(persianEndDateObject),
        gregorianRange: `${gregorianStartDateObject.format()} تا ${gregorianEndDateObject.format()}`,
        persianRange: `${persianStartDateObject.format()} تا ${persianEndDateObject.format()}`,
    };
};

export function MyDatePickerRange({
    _setDate,
    _date,
    fullWidth = false,
}: DatePickerType) {
    // If no default dates are provided, set default to today and one day ahead
    const [dates, setDates] = useState<[DateObject, DateObject]>(() => {
        if (_date) {
            return [new DateObject(_date[0]), new DateObject(_date[1])];
        } else {
            const today = new DateObject();
            const tomorrow = today.add(1, 'days');
            return [today, tomorrow];
        }
    });

    useEffect(() => {
        if (dates) {
            const [startDate, endDate] = dates;
            const formattedDate = convert({
                startDate,
                endDate,
                format: 'YYYY/MM/DD',
            });

            _setDate &&
                _setDate([
                    formattedDate.gregorianStart,
                    formattedDate.gregorianEnd,
                ]);
        }
    }, [dates, _setDate]);

    return (
        <RtlDiv>
            <StyledDatePicker>
                <MyInputDiv as={fullWidth ? FullWidthDiv : 'div'}>
                    <DatePicker
                        hideOnScroll
                        className="rmdp-mobile"
                        range
                        mapDays={({ date }) => {
                            const props: { className?: string } = {};
                            const isWeekend = date.weekDay.index === 6;

                            if (isWeekend) {
                                props.className = 'highlight highlight-red';
                            }

                            return props;
                        }}
                        value={dates}
                        onChange={(value: [DateObject, DateObject]) => {
                            setDates(value);
                        }}
                        dateSeparator="  تا  "
                        plugins={[<DatePanel position="right" />]}
                        numberOfMonths={1}
                        calendar={persian}
                        locale={persian_fa}
                    />
                </MyInputDiv>
            </StyledDatePicker>
        </RtlDiv>
    );
}
