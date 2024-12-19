// import PersianDatePicker from "@/components/datePicker";
import { useEffect, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';
import { useDispatch } from 'react-redux';

import { setProjectState } from '@/redux/store/projectManagmentTest';
import { SFC } from '@/types';

import * as S from './Styles';

interface FileUploadInterface {
    open: boolean;
    projectDescription: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    peopleList?: { label: string; value: string }[];
    selectedPeople?: string[];
    dueDate: DateObject;
    handleCloseModal: () => void;
    subject: string;
    title: string;
}
type PersonData = {
    id: string | number;
    name: string;
    task: string;
    comment?: string[];
    startDate: DateObject | number;
    endDate: DateObject | number;
    file?: string[];
    // file?: File[];
    hasUploadFile: boolean;
    completeStatus: boolean;
    evaluation: number | null;
};
type ForAllData = {
    comment: string;
    task: string;
    startDate: DateObject | number;
    endDate: DateObject | number;
    file: File[];
    hasUploadFile: boolean;
};

// ---------------------------------------------------------------------------------------
// ---------------------------------PAY Attention-----------------------------------------
// in the time of developing this create project part, I could not store files in redux
// and the backend was not ready ,so I just stored the file's name for the purpse of demo
// ---------------------------------------------------------------------------------------
const FileUpload: SFC<FileUploadInterface> = ({
    open,
    projectDescription,
    onChange,
    peopleList,
    selectedPeople,
    handleCloseModal,
    dueDate,
    subject,
    title,
}) => {
    const [peopleData, setPeopleData] = useState<PersonData[]>([]);
    const [forAllData, setForAllData] = useState<Partial<ForAllData>>({});
    const dispatch = useDispatch();

    useEffect(() => {
        if (open === true && selectedPeople.length !== 0) {
            const initialData: PersonData[] = selectedPeople.map(
                (person, index) => ({
                    id: index + person,
                    name: peopleList[person]['label'],
                    comment: [],
                    task: '',
                    file: [],
                    hasUploadFile: false,
                    startDate: new DateObject(),
                    endDate: dueDate,
                    completeStatus: false,
                    evaluation: null,
                })
            );
            setPeopleData(initialData);
            setForAllData({
                task: '',
                startDate: new DateObject(),
                endDate: dueDate,
                file: [],
                hasUploadFile: false,
            });
        }
    }, [open, selectedPeople, dueDate, peopleList]);
    const updateTask = (personId: string | number, assignedTask: string) => {
        setPeopleData((currentData) =>
            currentData.map((person) =>
                person.id === personId
                    ? { ...person, task: assignedTask }
                    : person
            )
        );
    };

    // const updateTask = (personId: string | number, newComment: string) => {
    //   setPeopleData((currentData) =>
    //     currentData.map((person) =>
    //       person.id === personId
    //         ? { ...person, comment: [newComment, ...person.comment.slice(1)] }
    //         : person
    //     )
    //   );
    // };
    // This is a handler to keep the files for each person
    // const updateFile = (personId: string | number, files: FileList) => {
    //   setPeopleData((currentData) =>
    //     currentData.map((person) =>
    //       person.id === personId
    //         ? {
    //             ...person,
    //             file: [...(person.file || []), ...Array.from(files)],
    //             hasUploadFile: true,
    //           }
    //         : person
    //     )
    //   );
    // };
    const updateFile = (personId: string | number, files: FileList) => {
        setPeopleData((currentData) =>
            currentData.map((person) =>
                person.id === personId
                    ? {
                          ...person,
                          file: [
                              ...(person.file || []),
                              ...Array.from(files).map((file) => file.name), // Extract file names
                          ],
                          hasUploadFile: true,
                      }
                    : person
            )
        );
    };
    const handleStartDate = (personId: string | number, e: DateObject) => {
        setPeopleData((currentData) =>
            currentData.map((person) =>
                person.id === personId
                    ? { ...person, startDate: e.unix * 1000 }
                    : person
            )
        );
    };
    const handleEndDate = (personId: string | number, date: DateObject) => {
        setPeopleData((currentData) =>
            currentData.map((person) =>
                person.id === personId
                    ? { ...person, endDate: date.unix * 1000 }
                    : person
            )
        );
    };
    const handleAllDataTask = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTask = e.target.value;
        setForAllData((prevData) => ({
            ...prevData,
            task: newTask,
        }));
        setPeopleData((currentData) =>
            currentData.map((person) => ({ ...person, task: newTask }))
        );
    };

    const handleAllDataFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;
        setForAllData((prevData) => ({
            ...prevData,
            file: [...prevData.file, ...Array.from(files)],
            hasUploadFile: true,
        }));
        setPeopleData((currentData) =>
            currentData.map((person) => ({
                ...person,
                file: [
                    ...(person.file || []),
                    ...Array.from(files).map((file) => file.name), // Extract file names
                ],
                hasUploadFile: true,
            }))
        );
    };
    const handleStartDateForAll = (date: DateObject) => {
        setForAllData((prevData) => ({
            ...prevData,
            startDate: date,
        }));
        setPeopleData((currentData) =>
            currentData.map((person) => ({
                ...person,
                startDate: date.unix * 1000,
            }))
        );
    };
    const handleEndDateForAll = (date: DateObject) => {
        setForAllData((prevData) => ({
            ...prevData,
            endDate: date,
        }));
        setPeopleData((currentData) =>
            currentData.map((person) => ({
                ...person,
                endDate: date.unix * 1000,
            }))
        );
    };
    const handleClick = () => {
        console.log(peopleData);
        console.log(forAllData);
        console.log(subject);
        console.log(title);
        const projectDate = {
            subject,
            title,
            projectDescription,
            projectDueDate: dueDate.unix,
            peopleTasks: peopleData,
        };
        dispatch(setProjectState(projectDate));
        // console.log(new Date(1720511755000).toLocaleDateString("fa-IR"));
        // console.log(new DateObject(1720511755000));
        handleCloseModal();
    };
    return (
        <S.Container>
            {/* <S.InnerFlex>
        <div>توضیح پروژه</div>
        <div>
          <PrimeTextArea
            value={projectDescription}
            onChange={onChange}
            rows={4}
          />
        </div>
      </S.InnerFlex>

      <S.pplFlexContainer>
        <div>افراد</div>
        <div style={{ justifyContent: "center" }}>وظیفه</div>
        <div>بارگذاری</div>
        <div></div>
        <div>تاریخ امروز</div>
        <div>موعد تحویل</div>
      </S.pplFlexContainer>
      {peopleData.map((ppl, index) => (
        <S.pplFlexContainer key={index}>
          <div>{ppl.name}</div>
          <div>
            <PrimeTextArea
              value={ppl.task}
              onChange={(e) => updateTask(ppl.id, e.target.value)}
              rows={1}
            />
          </div>
          <div>
            <UploadComponent
              setSelectedFiles={(e: React.ChangeEvent<HTMLInputElement>) =>
                updateFile(ppl.id, e.target.files)
              }
              uploadText={<CloudUploadIcon />}
            />
          </div>
          <div>
            {ppl.hasUploadFile && (
              <CheckIcon sx={{ color: `${colors.chartsColor.green}` }} />
            )}
          </div>
          <div>
            <PersianDatePicker
              value={ppl.startDate}
              onChange={(e) => handleStartDate(ppl.id, e)}
            />
          </div>
          <div>
            <PersianDatePicker
              value={ppl.endDate}
              onChange={(date) => handleEndDate(ppl.id, date)}
            />
          </div>
        </S.pplFlexContainer>
      ))}
      <S.pplFlexContainer>
        <div>همه</div>
        <div>
          <PrimeTextArea
            rows={1}
            value={forAllData.comment}
            onChange={handleAllDataTask}
          />
        </div>
        <div>
          <UploadComponent
            uploadText={<CloudUploadIcon />}
            setSelectedFiles={handleAllDataFiles}
          />
        </div>
        <div>
          {forAllData.hasUploadFile && (
            <CheckIcon sx={{ color: `${colors.chartsColor.green}` }} />
          )}
        </div>
        <div>
          <PersianDatePicker
            value={forAllData.startDate}
            onChange={handleStartDateForAll}
          />
        </div>
        <div>
          <PersianDatePicker
            value={forAllData.endDate}
            onChange={handleEndDateForAll}
          />
        </div>
      </S.pplFlexContainer>
      <S.ButtonContainer>
        <S.Button onClick={handleClick}>ثبت نهایی</S.Button>
      </S.ButtonContainer> */}
        </S.Container>
    );
};

export default FileUpload;
