import { useEffect, useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_fa from 'react-date-object/locales/gregorian_fa';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';

export const convert = ({ startDate, endDate }) => {
    const gregorianStartDateObject = new DateObject(startDate).convert(
        gregorian,
        gregorian_fa
    );
    const gregorianEndDateObject = new DateObject(endDate).convert(
        gregorian,
        gregorian_fa
    );

    const jalaliStart = startDate
        .format('jYYYY/jMM/jDD')
        .replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));
    const jalaliEnd = endDate
        .format('jYYYY/jMM/jDD')
        .replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));

    return {
        gregorianStart: gregorianStartDateObject.format(),
        gregorianEnd: gregorianEndDateObject.format(),
        jalaliStart,
        jalaliEnd,
    };
};

export function MyDatePickerRange({
    _setDate,
    _date,
    _resetDates,
    fullWidth = true,
    placeholder = 'تاریخ را انتخاب کنید',
}) {
    const [dates, setDates] = useState<[DateObject | null, DateObject | null]>([
        null,
        null,
    ]);

    useEffect(() => {
        if (_date && _date[0] && _date[1]) {
            setDates([new DateObject(_date[0]), new DateObject(_date[1])]);
        }
    }, [_date]);

    useEffect(() => {
        if (_resetDates) {
            setDates([null, null]);
        }
    }, [_resetDates]);

    useEffect(() => {
        if (dates && dates[0] && dates[1]) {
            const [startDate, endDate] = dates;
            const formattedDate = convert({ startDate, endDate });

            _setDate &&
                _setDate([formattedDate.jalaliStart, formattedDate.jalaliEnd]);
        }
    }, [dates, _setDate]);

    const minDate = new DateObject({
        year: 1401,
        month: 1,
        day: 1,
        calendar: persian,
    });
    const maxDate = new DateObject({
        year: 1403,
        month: 4,
        day: 1,
        calendar: persian,
    });

    return (
        <div>
            <DatePicker
                hideOnScroll
                range
                value={dates}
                onChange={(value: [DateObject | null, DateObject | null]) =>
                    setDates(value)
                } // اطمینان از نوع صحیح
                dateSeparator="  تا  "
                plugins={[<DatePanel position="right" />]}
                calendar={persian}
                locale={persian_fa}
                placeholder={placeholder}
                minDate={minDate}
                maxDate={maxDate}
            />
        </div>
    );
}
