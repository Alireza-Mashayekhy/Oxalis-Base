import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Comments from '@/components/Comments';
import DialogWrapper from '@/components/DialogModalWrapper';
import PrimeTextArea from '@/components/TextArea';
import PrimeTooltip from '@/components/Tooltips';
import UploadComponent from '@/components/UploadComponent';
import {
    addComment,
    addFiles,
    deleteFile,
    toggleCompleteStatus,
} from '@/redux/store/projectManagmentTest';
import { getProjectManagment } from '@/selectors/state';
import { colors } from '@/styles';
import { SFC } from '@/types';
import { PeopleTask } from '@/types/projectManagment';

import * as S from './Styles';

const ProjectModel: SFC = () => {
    const data = useSelector(getProjectManagment);
    const dispatch = useDispatch();
    const [fileItems, setFileItems] = useState<MenuItem[]>([]);
    const [commentsItems, setCommentsItems] = useState<MenuItem[]>([]);
    const [commentModalOpen, setCommentModalOpen] = useState(false);
    const [commentMessage, setCommentMessage] = useState('');
    const [selectedPersonID, setSelectedPersonID] = useState<string | number>(
        ''
    );
    const fileMenuRef = useRef<Menu>(null);
    const commentMenuRef = useRef<Menu>(null);

    const handleDeleteFile = (item) => {
        dispatch(deleteFile({ id: selectedPersonID, fileName: item }));

        const selectedPerson = data.peopleTasks.find(
            (person) => person.id === selectedPersonID
        );

        if (selectedPerson.file.length !== 0) {
            const newFileItems = selectedPerson.file.map((fileName: string) => {
                return {
                    label: fileName,
                    template: () => fileItemsTemplate(fileName),
                };
            });

            setFileItems(newFileItems);
        } else {
            setFileItems([
                {
                    template: () =>
                        emptyItemTemplate('موردی برای نمایش وجود ندارد'),
                },
            ]);
        }
    };
    const prepareFileItmes = (selectedPersonID: string | number) => {
        const selectedPerson = data.peopleTasks.find(
            (person: PeopleTask) => person.id === selectedPersonID
        );
        if (selectedPerson?.file?.length > 0) {
            const newFileItems = selectedPerson.file.map(
                (fileName: string) => ({
                    label: fileName,
                    template: () => fileItemsTemplate(fileName),
                })
            );
            setFileItems(newFileItems);
        } else {
            setFileItems([
                {
                    template: () =>
                        emptyItemTemplate('موردی برای نمایش وجود ندارد'),
                },
            ]);
        }
    };
    const fileItemsTemplate = (item) => (
        <S.FileItemsContainer>
            <div>{item}</div>
            <S.FileItemsButtonContainer>
                <div onClick={() => handleDeleteFile(item)}>
                    <DeleteIcon sx={{ color: `${colors.palette.red[300]}` }} />
                </div>
                <div>
                    <ArrowDownwardIcon
                        sx={{ color: `${colors.palette.blue[300]}` }}
                    />
                </div>
            </S.FileItemsButtonContainer>
        </S.FileItemsContainer>
    );
    const commentItemsTemplate = (item) => (
        <S.CommentItemsContainer>{item}</S.CommentItemsContainer>
    );
    const emptyItemTemplate = (message) => {
        return <S.EmtpyMenuItem>{message} </S.EmtpyMenuItem>;
    };

    useEffect(() => {
        prepareFileItmes(selectedPersonID);
    }, [data.peopleTasks]);

    const onCommentClick = (personID: string | number) => {
        setCommentModalOpen(true);
        setSelectedPersonID(personID);
    };
    const handleDialogClose = () => {
        setCommentModalOpen(false);
    };
    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentMessage(e.target.value);
    };
    const handleViewFiles = (event, id: string | number) => {
        setSelectedPersonID(id);
        fileMenuRef.current.toggle(event);
        prepareFileItmes(id);
    };

    const handleViewComments = (event, id: string | number) => {
        commentMenuRef.current.toggle(event);

        const selectedPerson = data.peopleTasks.find(
            (person) => person.id === id
        );

        if (selectedPerson.comment.length !== 0) {
            const newCommentItems = selectedPerson.comment.map(
                (message: string) => {
                    return {
                        template: () => commentItemsTemplate(message),
                    };
                }
            );

            setCommentsItems(newCommentItems);
        } else {
            setCommentsItems([
                {
                    template: () =>
                        emptyItemTemplate('پیامی برای نمایش وجود ندارد'),
                },
            ]);
        }
    };
    const updateFile = (personId: string | number, files: FileList) => {
        let fileNames: string[];

        // Check if 'files' is a single File object
        if (files instanceof File) {
            fileNames = [files.name]; // Create an array with the single file's name
        } else {
            // Otherwise, convert FileList to an array of file names
            fileNames = Array.from(files).map((file) => file.name);
        }
        dispatch(addFiles({ id: personId, files: fileNames }));
    };
    const onSubmitComment = () => {
        setCommentModalOpen(false);
        setCommentMessage('');
        dispatch(addComment({ id: selectedPersonID, comment: commentMessage }));
    };
    const handleDone = (id: number | string) => {
        dispatch(toggleCompleteStatus({ id, completeStatus: true }));
    };
    return (
        <>
            <S.Container>
                <S.ProjectDescriptionFlex>
                    <div>توضیح پروژه</div>
                    <div>
                        <PrimeTextArea
                            value={data.projectDescription}
                            rows={4}
                            disabled={true}
                        />
                    </div>
                </S.ProjectDescriptionFlex>
                <S.PeopleContainerFlex>
                    <div />
                    <div>
                        <S.Span>افراد</S.Span>
                    </div>
                    <div />
                    <div />
                    <div>
                        <S.Span>بارگذاری</S.Span>
                    </div>
                    <div>
                        <S.Span>پیام</S.Span>
                    </div>
                    <div>
                        <S.Span>اتمام</S.Span>
                    </div>
                    <div>
                        <S.Span>ارزیابی</S.Span>
                    </div>
                </S.PeopleContainerFlex>

                {data.peopleTasks.map((ppl, index: number) => (
                    <S.PeopleContainerFlex key={index + ppl.id}>
                        <div
                            style={{
                                width: '14px',
                                height: '14px',
                                borderRadius: '3px',
                                background: `${
                                    ppl.completeStatus === true
                                        ? colors.chartsColor.green
                                        : colors.chartsColor.orange
                                }`,
                            }}
                         />
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
                            <S.Button
                                onClick={(event) =>
                                    handleViewFiles(event, ppl.id)
                                }
                            >
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

                            <S.Button
                                onClick={(event) =>
                                    handleViewComments(event, ppl.id)
                                }
                            >
                                <InsertDriveFileIcon />
                            </S.Button>
                        </div>
                        <div>
                            <UploadComponent
                                uploadText={<S.StyledCloudUploadIcon />}
                                setSelectedFiles={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => updateFile(ppl.id, e.target.files)}
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
                ))}
            </S.Container>

            <PrimeTooltip target=".person-name" />

            <DialogWrapper
                open={commentModalOpen}
                title="ارسال نظرات"
                handleClose={handleDialogClose}
                body={
                    <Comments
                        value={commentMessage}
                        onChange={handleCommentChange}
                        onSubmitComment={onSubmitComment}
                    />
                }
            />
        </>
    );
};

export default ProjectModel;
