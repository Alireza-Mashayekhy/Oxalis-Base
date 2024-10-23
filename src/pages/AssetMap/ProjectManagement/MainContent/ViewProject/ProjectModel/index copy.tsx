import { SFC } from "@/types";
import * as S from "./Styles";
import UploadComponent from "@/components/UploadComponent";
import { colors } from "@/styles";
import { useState } from "react";
import DialogWrapper from "@/components/DialogModalWrapper";
import Comments from "@/components/Comments";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PrimeTextArea from "@/components/TextArea";

const ProjectModel: SFC = () => {
  const [sampledata, setSampledata] = useState({
    subject: "مبحث",
    title: "موضوع",
    projectDes: "DESCRIPTION ",
    people: [
      {
        id: 1,
        name: "smith",
        uploadFiles: [
          { fileName: "assetMap" },
          { fileName: "contradict" },
          { fileName: "bond" },
        ],
        doneStatus: false,
      },
      {
        id: 2,
        name: "میرزایی",
        uploadFiles: [
          { fileName: "assetMap" },
          { fileName: "contradict" },
          { fileName: "bond" },
        ],
      },
      {
        id: 3,
        name: "معصومی نژاد",
        uploadFiles: [{ fileName: "assetMap" }],
        doneStatus: false,
      },
      { id: 4, name: "راد", doneStatus: false },
      { id: 5, name: "بیات", doneStatus: false },
    ],
    projectDuoDate: "1402/02/12",
  });
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [commentMessage, setCommentMessage] = useState("");

  const handleDoneClick = (id: number) => {
    setSampledata((prevData) => {
      const newPeople = prevData.people.map((person) => {
        if (person.id === id) {
          return { ...person, doneStatus: !person.doneStatus };
        }
        return person;
      });
      return { ...prevData, people: newPeople };
    });
  };
  const onCommentClick = () => {
    setCommentModalOpen(true);
  };
  const handleDialogClose = () => {
    setCommentModalOpen(false);
  };
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentMessage(e.target.value);
  };
  return (
    <>
      <S.Container>
        <S.UploadContainer>
          <div></div>
          <div>
            <S.Button onClick={onCommentClick}>پیام</S.Button>
          </div>
          <div>
            <S.Button>
              <span>دانلود</span>
              <span>
                <CloudDownloadIcon />
              </span>
            </S.Button>
          </div>
          <div>{/* <UploadComponent /> */}</div>
        </S.UploadContainer>

        <S.projectDescriptionFlex>
          <div>توضیح پروژه</div>
          <div>
            <PrimeTextArea
              value={sampledata.projectDes}
              rows={4}
              disabled={true}
            />
          </div>
        </S.projectDescriptionFlex>

        <S.InnerFlex>
          <div>مبحث</div>
          <div>{sampledata.subject}</div>
        </S.InnerFlex>
        <S.InnerFlex>
          <div>موضوع</div>
          <div>{sampledata.subject}</div>
        </S.InnerFlex>
        <S.InnerFlex>
          <div>افراد</div>
          <div>
            <S.PeopleContainer>
              {sampledata.people.map((ppl, index) => (
                <S.PeopleFlex key={index}>
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "3px",
                      background: `${
                        ppl.doneStatus === true
                          ? colors.chartsColor.green
                          : colors.chartsColor.orange
                      }`,
                      marginLeft: "5px",
                    }}
                  ></div>
                  <div>{ppl.name}</div>
                  <div>
                    {ppl.uploadFiles &&
                      ppl.uploadFiles.map((file, index) => (
                        <S.Span key={index}>{file.fileName}</S.Span>
                      ))}
                  </div>
                  <div>
                    <S.Button
                      onClick={() => handleDoneClick(ppl.id)}
                      disabled={ppl.doneStatus}
                    >
                      خاتمه
                    </S.Button>
                  </div>
                </S.PeopleFlex>
              ))}
            </S.PeopleContainer>
          </div>
        </S.InnerFlex>
        <S.InnerFlex>
          <div>تاریخ</div>
          <div>{sampledata.projectDuoDate}</div>
        </S.InnerFlex>
      </S.Container>

      <DialogWrapper
        open={commentModalOpen}
        title="ارسال نظرات"
        handleClose={handleDialogClose}
        body={
          <Comments value={commentMessage} onChange={handleCommentChange} />
        }
      />
    </>
  );
};

export default ProjectModel;
