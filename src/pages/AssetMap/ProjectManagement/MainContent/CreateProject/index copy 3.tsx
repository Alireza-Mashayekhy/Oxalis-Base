import { SFC } from "@/types";
import * as S from "./Styles";
import { useEffect, useRef, useState } from "react";
import { MultiSelectChangeEvent } from "primereact/multiselect";
import PrimeMultiSelect from "@/components/MultiSelect";
import SubjectIcon from "@mui/icons-material/Subject";
import TitleIcon from "@mui/icons-material/Title";
import PeopleIcon from "@mui/icons-material/People";
import TodayIcon from "@mui/icons-material/Today";
import PersianDatePicker from "@/components/datePicker";
import { colors } from "@/styles";
import CustomSelectComponent from "@/components/Select";
import { SelectChangeEvent } from "@mui/material";
import TextField_n2 from "@/components/textfield/TextFiled2";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Dropdown } from "primereact/dropdown";
import PrimeDropdown from "@/components/Dropdown/PrimeReact";

const subjectOptions = [
  { label: "مالی", value: "finance" },
  { label: "مارکتینگ", value: "marketing" },
  { label: "منابع انسانی", value: "HR" },
  { label: "خدمات", value: "services" },
];

const titleOptions = [
  { label: "جلسه", value: "1" },
  { label: "تامین مالی", value: "2" },
  { label: "هماهنگی", value: "3" },
  { label: "بررسی پیشرفت کار", value: "4" },
];
const peopleOptions = [
  { label: "میرزایی", value: "1" },
  { label: "خانزادی", value: "2" },
  { label: "سحرخیز", value: "3" },
  { label: "معصومی", value: "4" },
  { label: "حسینی", value: "5" },
  { label: "عالمی", value: "6" },
  { label: "کاظمی", value: "7" },
  { label: "منصوری", value: "8" },
  { label: "راد", value: "9" },
];

const CreateProject: SFC = () => {
  const [subjectSelect, setSubjectSelect] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectDropdownVisibility, setSubjectDropdownVisibility] =
    useState(false);

  const [title, setTitle] = useState("");

  const [people, setPeople] = useState("");
  const [peopleSelect, setPeopleSelect] = useState("");

  const handleSubjectSelct = (e: MultiSelectChangeEvent) => {
    setSubject(e.value);
  };

  const handleTitleSelct = (e: MultiSelectChangeEvent) => {
    setTitle(e.value);
  };

  return (
    <>
      <S.Container>
        <S.RightContainer>
          <S.InnerFlex>
            <div
              style={{
                color: `${colors.white}`,
                backgroundColor: `${colors.chartsColor.orange}`,
              }}
            >
              مبحث
            </div>
            <div>
              <Dropdown
                value={subject}
                options={subjectOptions}
                onChange={handleSubjectSelct}
                // placeholder=""
                filter
                filterBy="label"
                editable
                emptyFilterMessage="موردی یافت نشد"
              />
            </div>
            <div>
              <SaveOutlinedIcon
                sx={{ color: `${colors.chartsColor.orange}` }}
              />
            </div>
            <div>
              <SubjectIcon
                sx={{
                  color: `${colors.chartsColor.orange}`,
                  cursor: "pointer",
                }}
              />
            </div>
          </S.InnerFlex>
          <S.InnerFlex>
            <div
              style={{
                color: `${colors.white}`,
                backgroundColor: `${colors.chartsColor.yellow}`,
              }}
            >
              موضوع
            </div>
            <div>
              <Dropdown
                value={title}
                options={titleOptions}
                onChange={handleTitleSelct}
                // placeholder=""
                filter
                filterBy="label"
                editable
                emptyFilterMessage="موردی یافت نشد"
              />
            </div>
            <div>
              <SaveOutlinedIcon
                sx={{ color: `${colors.chartsColor.yellow}` }}
              />
            </div>
            <div>
              <TitleIcon
                sx={{
                  color: `${colors.chartsColor.yellow}`,
                  cursor: "pointer",
                }}
              />
            </div>
          </S.InnerFlex>
          <S.InnerFlex>
            <div
              style={{
                color: `${colors.white}`,
                backgroundColor: `${colors.chartsColor.blue}`,
              }}
            >
              افراد
            </div>
            <div>
              <PrimeMultiSelect
                seleced={subjectSelect}
                setSelected={handleSubjectSelct}
                options={subjectOptions}
                placeholder="مبحث مورد نظر خود را انتخاب کنید"
              />
            </div>
            <div></div>

            <div>
              <PeopleIcon
                sx={{
                  color: `${colors.chartsColor.blue}`,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSubjectDropdownVisibility(true);
                  setSubjectSelect("");
                }}
              />
            </div>
          </S.InnerFlex>

          <S.InnerFlex>
            <div
              style={{
                color: `${colors.white}`,
                backgroundColor: `${colors.chartsColor.green}`,
              }}
            >
              تاریخ
            </div>
            <div>
              <PersianDatePicker />
            </div>
          </S.InnerFlex>
        </S.RightContainer>
        <S.LeftContainer>
          <S.Button>ثبت پروژه</S.Button>
        </S.LeftContainer>
      </S.Container>
    </>
  );
};

export default CreateProject;
