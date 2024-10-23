import { SFC } from '@/types';
import * as S from './Styles';
import { colors } from '@/styles';
import { useEffect, useRef, useState } from 'react';
import DialogWrapper from '@/components/DialogModalWrapper';
import Comments from '@/components/Comments';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PrimeTextArea from '@/components/TextArea';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectManagment } from '@/selectors/state';
import PrimeTooltip from '@/components/Tooltips';
import {
    addComment,
    addFiles,
    deleteFile,
    toggleCompleteStatus,
} from '@/redux/store/projectManagmentTest';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { PeopleTask } from '@/types/projectManagment';
import PersonTask from './PersonTask';

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
    const fileItemsTemplate = (item: string) => (
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

    useEffect(() => {
        PrepareMenuItems(
            selectedPersonID,
            'file',
            fileItemsTemplate,
            setFileItems,
            'موردی برای نمایش وجود ندارد'
        );
    }, [data.peopleTasks]);

    const PrepareMenuItems = (
        selectedPersonID: string | number,
        itemKey: 'comment' | 'file',
        templateFunction: (item?: string) => React.ReactNode,
        setItemsFunction: (items: MenuItem[]) => void,
        emptyMessage: string
    ) => {
        const selectedPerson = data.peopleTasks.find(
            (person: PeopleTask) => person.id === selectedPersonID
        );

        if (
            selectedPerson &&
            selectedPerson[itemKey] &&
            selectedPerson[itemKey].length > 0
        ) {
            const newItems = selectedPerson[itemKey].map((item: string) => ({
                label: itemKey === 'file' ? item : undefined, // Include label only for files
                template: () => templateFunction(item),
            }));
            setItemsFunction(newItems);
        } else {
            setItemsFunction([
                { template: () => emptyItemTemplate(emptyMessage) },
            ]);
        }
    };

    const commentItemsTemplate = (item: string) => (
        <S.CommentItemsContainer>{item}</S.CommentItemsContainer>
    );
    const emptyItemTemplate = (message: string) => {
        return <S.EmtpyMenuItem>{message} </S.EmtpyMenuItem>;
    };

    const handleDeleteFile = (item: string) => {
        dispatch(deleteFile({ id: selectedPersonID, fileName: item }));
        console.log(data);

        PrepareMenuItems(
            selectedPersonID,
            'file',
            fileItemsTemplate,
            setFileItems,
            'موردی برای نمایش وجود ندارد'
        );
    };

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
        PrepareMenuItems(
            id,
            'file',
            fileItemsTemplate,
            setFileItems,
            'موردی برای نمایش وجود ندارد'
        );
    };

    const handleViewComments = (event, id: string | number) => {
        commentMenuRef.current.toggle(event);
        PrepareMenuItems(
            id,
            'comment',
            commentItemsTemplate,
            setCommentsItems,
            'پیامی برای نمایش وجود ندارد'
        );
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
                    <div></div>
                    <div>
                        <S.Span>افراد</S.Span>
                    </div>
                    <div></div>
                    <div></div>
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
                    <PersonTask
                        key={index + ppl.id}
                        ppl={ppl}
                        handleViewFiles={handleViewFiles}
                        handleViewComments={handleViewComments}
                        updateFile={updateFile}
                        onCommentClick={onCommentClick}
                        handleDone={handleDone}
                        fileItems={fileItems}
                        commentsItems={commentsItems}
                        fileMenuRef={fileMenuRef}
                        commentMenuRef={commentMenuRef}
                    />
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
