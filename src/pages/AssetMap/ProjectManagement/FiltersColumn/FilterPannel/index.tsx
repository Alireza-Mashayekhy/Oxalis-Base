import { useState } from "react";
import * as S from "./Styles";
import { Label } from "@/components/Label";
import PrimeMultiSelect from "@/components/MultiSelect";
import { MultiSelectChangeEvent } from "primereact/multiselect";
import { peopleOptions, subjectOptions, titleOptions } from "./filterConstants";
// import PersianDatePicker from "@/components/datePicker";
import { DateObject } from "react-multi-date-picker";
import { SFC } from "@/types";

interface FilterPannelInterface {
  isResponsive?: boolean;
  handleAccordionCloseInResponsiveMode?: () => void;
}

const FilterPannel: SFC<FilterPannelInterface> = ({
  isResponsive,
  handleAccordionCloseInResponsiveMode,
}) => {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [people, setPeople] = useState("");
  const [fromDate, setFromDate] = useState(new DateObject());
  const [toDate, setToDate] = useState(new DateObject());

  const handleApplyFilters = () => {
    if (isResponsive) {
      handleAccordionCloseInResponsiveMode();
    }
  };

  const handleResetFilters = () => {
    if (isResponsive) {
      handleAccordionCloseInResponsiveMode();
    }
  };

  return (
    <S.Container>
      {/* <Label padding="5px 10px  0 0">فیلترها</Label>
      <Label padding="10px 10px  0 0">مبحث</Label>
      <PrimeMultiSelect
        value={subject}
        onChange={(e: MultiSelectChangeEvent) => setSubject(e.value)}
        options={subjectOptions}
      />

      <Label padding="10px 10px  0 0">موضوع</Label>
      <PrimeMultiSelect
        value={title}
        onChange={(e: MultiSelectChangeEvent) => setTitle(e.value)}
        options={titleOptions}
      />

      <Label padding="10px 10px  0 0">افراد</Label>
      <PrimeMultiSelect
        value={people}
        onChange={(e: MultiSelectChangeEvent) => setPeople(e.value)}
        options={peopleOptions}
      />
      <S.DateContainer>
        <div>
          <Label padding="10px 10px  0 0">از تاریخ</Label>
          <PersianDatePicker
            value={fromDate}
            onChange={(e: DateObject) =>
              setFromDate(new DateObject(e.unix * 1000))
            }
          />
        </div>
        <div>
          <Label padding="10px 10px  0 0">تا تاریخ</Label>
          <PersianDatePicker
            value={toDate}
            onChange={(e: DateObject) =>
              setToDate(new DateObject(e.unix * 1000))
            }
          />
        </div>
      </S.DateContainer>

      <S.ButtonContainer>
        <S.Button onClick={handleApplyFilters}>اعمال فیلترها</S.Button>
        <S.Button onClick={handleResetFilters}>بازتعریف</S.Button>
      </S.ButtonContainer> */}
    </S.Container>
  );
};

export default FilterPannel;
