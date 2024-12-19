import { mdiChevronRight } from "@mdi/js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getCalendar } from "@/api/calendar";
import { getTheme } from "@/selectors/state";
import { SFC } from "@/types";

import * as S from "./Styles";

interface CalendarItem {
  date: string;
  gdate: string;
  isWorkDay: boolean;
}

interface CalendarDataType {
  [monthKey: string]: CalendarItem[];
}

const persianMonths = {
  "01": "فروردین",
  "02": "اردیبهشت",
  "03": "خرداد",
  "04": "تیر",
  "05": "مرداد",
  "06": "شهریور",
  "07": "مهر",
  "08": "آبان",
  "09": "آذر",
  "10": "دی",
  "11": "بهمن",
  "12": "اسفند",
};

const daysOfWeek = [
  "یک‌شنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
  "شنبه",
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
        const [year, month] = curr.date.split("-");
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

  const handleMonthChange = (direction: "prev" | "next") => {
    if (!calendarData) return;

    const monthKeys = Object.keys(calendarData);
    const currentIndex = monthKeys.findIndex((key) => key === selectedMonth);

    let newIndex;
    if (direction === "prev") {
      newIndex = (currentIndex - 1 + monthKeys.length) % monthKeys.length;
    } else {
      newIndex = (currentIndex + 1) % monthKeys.length;
    }

    const newMonth = monthKeys[newIndex];
    setMonth(newMonth);
  };

  return (
    <div className="w-[370px] h-full">
      {calendarData ? (
        <div className="w-[370px] h-full flex flex-col gap-8">
          <S.CalendarMonth>
            <S.HandleButton onClick={() => handleMonthChange("prev")}>
              ▶
            </S.HandleButton>
            <S.CalendarTitle>
              {persianMonths[selectedMonth.split("-")[1]]}{" "}
              {selectedMonth.split("-")[0]}
            </S.CalendarTitle>
            <S.HandleButton onClick={() => handleMonthChange("next")}>
              ◀
            </S.HandleButton>
          </S.CalendarMonth>
          <S.CalendarList>
            {calendarData[selectedMonth]?.map((item, index) => (
              <S.CalendarItem
                key={index}
                $disable={!item.isWorkDay}
                onClick={() => (item.isWorkDay ? changeDate(item.gdate) : "")}
              >
                <div style={{ fontSize: "18px" }}>
                  {new Date(item.gdate)
                    .toLocaleDateString("fa-ir", {
                      day: "numeric",
                    })
                    .toString()}
                </div>
                <div>{daysOfWeek[new Date(item.gdate).getDay()]}</div>
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

const LeftNav: SFC = () => {
  const theme = useSelector(getTheme);
  const [calendarModal, setCalendarModal] = useState(false);
  const [selectedDate, setDate] = useState<string | Date>(new Date());
  const [isNavOpen, setNavStatus] = useState(false);

  return (
    <S.Container $status={isNavOpen}>
      <S.IconContainer onClick={() => setNavStatus((prev) => !prev)}>
        <S.LeftNavIcon path={mdiChevronRight} size="20px" />
      </S.IconContainer>
      <S.CalendarContainer>
        <CalendarComponent
          changeDate={(date) => {
            setDate(date), setCalendarModal(false);
          }}
        />
      </S.CalendarContainer>
    </S.Container>
  );
};

export default LeftNav;
