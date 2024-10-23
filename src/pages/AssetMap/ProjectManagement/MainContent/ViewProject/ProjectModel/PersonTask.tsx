import { RefObject } from "react";
import * as S from "./Styles";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CommentIcon from "@mui/icons-material/Comment";
import DoneIcon from "@mui/icons-material/Done";
import UploadComponent from "@/components/UploadComponent";
import { colors } from "@/styles";
import { MenuItem } from "primereact/menuitem";
import { Menu } from "primereact/menu";
import { SFC } from "@/types";

type PersonTaskProps = {
  ppl: {
    id: string | number;
    name: string;
    task: string;
    completeStatus: boolean;
    // ... other properties
  };
  handleViewFiles: (event: React.MouseEvent, id: string | number) => void;
  handleViewComments: (event: React.MouseEvent, id: string | number) => void;
  updateFile: (id: string | number, files: FileList) => void;
  onCommentClick: (id: string | number) => void;
  handleDone: (id: string | number) => void;
  fileItems: MenuItem[];
  commentsItems: MenuItem[];
  fileMenuRef: RefObject<Menu>;
  commentMenuRef: RefObject<Menu>;
};

const PersonTask: SFC<PersonTaskProps> = ({
  ppl,
  handleViewFiles,
  handleViewComments,
  updateFile,
  onCommentClick,
  handleDone,
  fileItems,
  commentsItems,
  fileMenuRef,
  commentMenuRef,
}) => {
  return (
    <S.PeopleContainerFlex>
      <div
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "3px",
          background: `${
            ppl.completeStatus === true
              ? colors.chartsColor.green
              : colors.chartsColor.orange
          }`,
        }}
      ></div>
      <div
        className="person-name"
        data-pr-tooltip={`${ppl.task}`}
        data-pr-position="right"
        data-pr-at="right+5 top"
        data-pr-my="left center-2"
      >
        {ppl.name}
      </div>
      <div>
        <S.StyledMenu
          className="project-management-part"
          model={fileItems}
          popup
          ref={fileMenuRef}
        />
        <S.Button onClick={(event) => handleViewFiles(event, ppl.id)}>
          <CloudDownloadIcon />
        </S.Button>
      </div>
      <div>
        <S.StyledMenu
          className="project-management-part"
          model={commentsItems}
          popup
          ref={commentMenuRef}
        />

        <S.Button onClick={(event) => handleViewComments(event, ppl.id)}>
          <InsertDriveFileIcon />
        </S.Button>
      </div>
      <div>
        <UploadComponent
          uploadText={<S.StyledCloudUploadIcon />}
          setSelectedFiles={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFile(ppl.id, e.target.files)
          }
        />
      </div>
      <div>
        <S.Button onClick={() => onCommentClick(ppl.id)}>
          <CommentIcon />
        </S.Button>
      </div>
      <div>
        <S.Button
          onClick={() => handleDone(ppl.id)}
          disabled={ppl.completeStatus}
        >
          <DoneIcon />
        </S.Button>
      </div>
      <div>
        <S.StyledInput type="number" />
      </div>
    </S.PeopleContainerFlex>
  );
};

export default PersonTask;
