import { SFC } from "@/types";
import * as S from "./Styles";
import { useState } from "react";
import PrimeMultiSelect from "@/components/MultiSelect";
import PeopleIcon from "@mui/icons-material/People";
// import PersianDatePicker from "@/components/datePicker";
import { colors } from "@/styles";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { MultiSelectChangeEvent } from "primereact/multiselect";
import { DateObject } from "react-multi-date-picker";
import PrimeTextArea from "@/components/TextArea";
import DialogWrapper from "@/components/DialogModalWrapper";
import FileUpload from "./FileUpload";

const subjectOptions = [
  { label: "مالی", value: "1" },
  { label: "مارکتینگ", value: "2" },
  { label: "منابع انسانی", value: "3" },
  { label: "خدمات", value: "4" },
];

const titleOptions = [
  { label: "جلسه", value: "1" },
  { label: "تامین مالی", value: "2" },
  { label: "هماهنگی", value: "3" },
  { label: "بررسی پیشرفت کار", value: "4" },
];

const peopleOptions = [
  { label: "میرزایی", value: "0" },
  { label: "خانزادی", value: "1" },
  { label: "سحرخیز", value: "2" },
  { label: "معصومی", value: "3" },
  { label: "حسینی", value: "4" },
  { label: "عالمی", value: "5" },
  { label: "کاظمی", value: "6" },
  { label: "منصوری", value: "7" },
  { label: "راد", value: "8" },
];

const CreateProject: SFC = () => {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [people, setPeople] = useState<string[]>([]);
  const [projectDueDate, setProjectDueDate] = useState<DateObject>(
    new DateObject()
  );
  const [details, setDetails] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubjectSelct = (e: DropdownChangeEvent) => {
    setSubject(e.value);
  };

  const handleTitleSelct = (e: DropdownChangeEvent) => {
    setTitle(e.value);
  };

  const handlePeopleSelct = (e: MultiSelectChangeEvent) => {
    setPeople(e.value);
  };

  const handleClick = () => {
    console.log(subject);
    console.log(title);
    console.log(people);
    console.log(projectDueDate);
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
    setSubject("");
    setTitle("");
    setPeople([]);
    setProjectDueDate(new DateObject());
    setDetails("");
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetails(e.target.value);
  };

  return (
    <>
      {/* <S.Container>
        <S.FlexContainer>
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
            <div></div>
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
            <div></div>
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
                value={people}
                onChange={handlePeopleSelct}
                options={peopleOptions}
                placeholder=""
              />
            </div>

            <div>
              <PeopleIcon
                sx={{
                  color: `${colors.chartsColor.blue}`,
                  cursor: "pointer",
                }}
              />
            </div>
            <div></div>
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
              <PersianDatePicker
                value={projectDueDate}
                onChange={setProjectDueDate}
                // onChange={(e: DateObject) =>
                //   setProjectDueDate(new DateObject(e.unix * 1000))
                // }
              />
            </div>
            <div></div>
            <div></div>
          </S.InnerFlex>
          <S.InnerFlex>
            <div
              style={{
                color: `${colors.white}`,
                backgroundColor: `${colors.chartsColor.pink}`,
              }}
            >
              توضیحات
            </div>
            <div>
              <PrimeTextArea
                value={details}
                onChange={handleTextAreaChange}
                rows={3}
              />
            </div>
            <div></div>
            <div></div>
          </S.InnerFlex>
        </S.FlexContainer>
        <S.ButtonContainer>
          <S.Button onClick={handleClick}>بارگذاری و ثبت پروژه</S.Button>
        </S.ButtonContainer>
      </S.Container>
      <DialogWrapper
        open={open}
        handleClose={handleCloseModal}
        title="بارگذاری فایل و تعریف وظایف"
        body={
          <FileUpload
            open={open}
            projectDescription={details}
            onChange={handleTextAreaChange}
            dueDate={projectDueDate}
            peopleList={peopleOptions}
            selectedPeople={people}
            handleCloseModal={handleCloseModal}
            subject={subject}
            title={title}
          />
        }
      /> */}
    </>
  );
};

export default CreateProject;
