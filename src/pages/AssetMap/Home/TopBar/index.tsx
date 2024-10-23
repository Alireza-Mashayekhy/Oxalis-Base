import { SFC } from '@/types';
import * as S from './Styles';
import Toggler from '@/components/Toggler';
import logoBlack from '@/assets/logoblack.png';
import logoWhite from '@/assets/logoWhite.png';
import { useSelector } from 'react-redux';
import { getTheme } from '@/selectors/state';
import { mdiCalendar, mdiUpdate } from '@mdi/js';
import DialogWrapper from '@/components/DialogModalWrapper';
import { useEffect, useState } from 'react';
import { getCalendar } from '@/api/calendar';
import defaultAvatar from '@/assets/default-avatar.png';

interface CalendarItem {
    date: string;
    gdate: string;
    isWorkDay: boolean;
}

interface CalendarDataType {
    [monthKey: string]: CalendarItem[];
}

const persianMonths = {
    '01': 'فروردین',
    '02': 'اردیبهشت',
    '03': 'خرداد',
    '04': 'تیر',
    '05': 'مرداد',
    '06': 'شهریور',
    '07': 'مهر',
    '08': 'آبان',
    '09': 'آذر',
    '10': 'دی',
    '11': 'بهمن',
    '12': 'اسفند',
};

const daysOfWeek = [
    'یک‌شنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
    'شنبه',
];

const CalendarComponent = ({
    changeDate,
}: {
    changeDate: (date: string) => void;
}) => {
    const [calendarData, setCalendarData] = useState<
        CalendarDataType | undefined
    >(undefined);

    const [selectedMonth, setMonth] = useState<string | undefined>(undefined);

    const getCalendarData = async () => {
        try {
            const res = await getCalendar();
            const dates = res?.reduce((acc, curr) => {
                const [year, month] = curr.date.split('-');
                const monthKey = `${year}-${month}`;

                if (!acc[monthKey]) {
                    acc[monthKey] = [];
                }

                acc[monthKey].push(curr);
                return acc;
            }, {});
            setMonth(Object.keys(dates)[0]);
            setCalendarData(dates);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getCalendarData();
    }, []);

    const handleMonthChange = (direction: 'prev' | 'next') => {
        if (!calendarData) return;

        const monthKeys = Object.keys(calendarData);
        const currentIndex = monthKeys.findIndex(
            (key) => key === selectedMonth
        );

        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentIndex - 1 + monthKeys.length) % monthKeys.length;
        } else {
            newIndex = (currentIndex + 1) % monthKeys.length;
        }

        const newMonth = monthKeys[newIndex];
        setMonth(newMonth);
    };

    return (
        <div>
            {calendarData ? (
                <div>
                    <S.CalendarMonth>
                        <S.HandleButton
                            onClick={() => handleMonthChange('prev')}
                        >
                            ▶
                        </S.HandleButton>
                        <S.CalendarTitle>
                            {persianMonths[selectedMonth.split('-')[1]]}{' '}
                            {selectedMonth.split('-')[0]}
                        </S.CalendarTitle>
                        <S.HandleButton
                            onClick={() => handleMonthChange('next')}
                        >
                            ◀
                        </S.HandleButton>
                    </S.CalendarMonth>
                    <S.CalendarList>
                        {calendarData[selectedMonth]?.map((item, index) => (
                            <S.CalendarItem
                                key={index}
                                $disable={!item.isWorkDay}
                                onClick={() =>
                                    item.isWorkDay ? changeDate(item.gdate) : ''
                                }
                            >
                                <div style={{ fontSize: '18px' }}>
                                    {new Date(item.gdate)
                                        .toLocaleDateString('fa-ir', {
                                            day: 'numeric',
                                        })
                                        .toString()}
                                </div>
                                <div>
                                    {daysOfWeek[new Date(item.gdate).getDay()]}
                                </div>
                            </S.CalendarItem>
                        ))}
                    </S.CalendarList>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

const RightSide: SFC<{
    isSecondColumnVisible: boolean;
    toggleSecondColumn: () => void;
}> = ({ isSecondColumnVisible, toggleSecondColumn }) => {
    const theme = useSelector(getTheme);
    const [calendarModal, setCalendarModal] = useState(false);
    const [selectedDate, setDate] = useState<string | Date>(new Date());

    return (
        <>
            <S.AvatarContainer>
                <S.Avatar src={defaultAvatar} />
            </S.AvatarContainer>
            <S.ImageContainer>
                <S.IMG src={`${theme === 'dark' ? logoWhite : logoBlack} `} />
            </S.ImageContainer>
            <S.Calendar onClick={() => setCalendarModal(true)}>
                <S.Icon path={mdiCalendar} />{' '}
                {daysOfWeek[new Date(selectedDate).getDay()]} -{' '}
                {new Date(selectedDate)
                    ?.toLocaleString('Fa-Ir', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    })
                    .toString()}
            </S.Calendar>
            {new Date(selectedDate).toLocaleDateString() !==
                new Date().toLocaleDateString() && (
                <S.BackToTodayButton onClick={() => setDate(new Date())}>
                    <S.Icon path={mdiUpdate} />
                    <span>امروز</span>
                </S.BackToTodayButton>
            )}
            <DialogWrapper
                open={calendarModal}
                title="تقویم"
                handleClose={() => setCalendarModal(false)}
                body={
                    <CalendarComponent
                        changeDate={(date) => {
                            setDate(date), setCalendarModal(false);
                        }}
                    />
                }
            />
            <S.Gap />
            {!isSecondColumnVisible && (
                <Toggler
                    isSecondColumnVisible={isSecondColumnVisible}
                    toggleSecondColumn={toggleSecondColumn}
                />
            )}
        </>
    );
};

export default RightSide;
