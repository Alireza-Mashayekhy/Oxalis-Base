import { useEffect, useRef } from 'react';
import { SFC } from '@/types';
import * as S from './Styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFiles } from '@/dispatchers/assetUpload';
import { useFileUpload } from '@/hooks';
import { colors } from '@/styles';
import { getHistory, getTheme } from '@/selectors/state';
import { TreeNode } from 'primereact/treenode';
import { Column } from 'primereact/column';
import NoDataFoundTemplate from '@/components/NoDataFound';
import { mdiCheck, mdiCheckCircle, mdiClose, mdiCloseCircle } from '@mdi/js';

const Upload: SFC = () => {
    const theme = useSelector(getTheme);

    const historyData = useSelector(getHistory).data;
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [tableColumns, setColumns] = useState([]);

    const createTableColumn = () => {
        const columns = [];
        const data = [];
        historyData.forEach((el) => {
            if (!columns.includes(el.name)) {
                columns.push(el.name);
            }
        });
        historyData.forEach((el) => {
            el.history_status.forEach((element) => {
                let haveIt = false;
                data.forEach((e) => {
                    if (e.data.date == element.date) {
                        haveIt = true;
                        e.data[el.name] = element.has_xml;
                    }
                });
                if (!haveIt) {
                    data.push({
                        data: {
                            date: element.date,
                            [el.name]: element.has_xml,
                        },
                    });
                }
            });
        });

        setColumns(columns);
        setTimeout(() => {
            setNodes(data);
        }, 1000);
    };

    useEffect(() => {
        if (historyData) {
            createTableColumn();
        }
    }, [historyData]);

    const dispatch = useDispatch();
    const { loading, error } = useFileUpload();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(fileInputRef);
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFiles(e.target.files);
            handleUpload();
        }
    };

    const handleUpload = () => {
        if (selectedFiles) {
            dispatch(uploadFiles(selectedFiles));
        }
    };

    const handleOpenFile = () => {
        fileInputRef.current?.click();
    };

    const verifiedBodyTemplate = (rowData, e) => {
        console.log(rowData.data[e.field]);
        return (
            <span>
                {rowData.data[e.field] ? (
                    <S.Icon path={mdiCheck} color="white" />
                ) : (
                    <S.Icon path={mdiClose} color="red" />
                )}
            </span>
        );
    };

    return (
        <S.Container
            borderColor={colors.palette.blue[300]}
            style={{ backgroundColor: `${theme === 'dark' ? '#161415' : ''}` }}
        >
            <S.UploadContainer>
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    accept=".xml"
                />
                <S.SCloudUploadIcon fontColor={colors.palette.blue[300]} />

                <S.StyledButton
                    fontColor={colors.palette.blue[300]}
                    onClick={handleOpenFile}
                    disabled={loading}
                >
                    {loading
                        ? 'در حال ارسال...'
                        : 'فایل های xml صندوق های سرمایه گذاری را انتخاب کنید.'}
                </S.StyledButton>
                {/* <S.StyledButton
                    onClick={handleUpload}
                    disabled={!selectedFiles || loading}
                >
                    {loading ? 'در حال ارسال...' : 'ارسال'}
                </S.StyledButton> */}

                {error && <S.Span>Error: {error}</S.Span>}
            </S.UploadContainer>
            <S.TextContainer></S.TextContainer>
            {nodes.length > 0 ? (
                <S.TableContainer>
                    <S.StyledTreeTable
                        value={nodes}
                        scrollable
                        scrollHeight="100%"
                        paginator
                        rows={5}
                        rowsPerPageOptions={[5, 10]}
                    >
                        <Column
                            field="date"
                            header="تاریخ"
                            expander
                            style={{ textAlign: 'center', width: '200px' }}
                        ></Column>
                        {tableColumns.map((col, index) => (
                            <Column
                                key={index}
                                field={col}
                                header={col}
                                style={{
                                    width: `${100 / tableColumns.length}%`,
                                    textAlign: 'center',
                                }}
                                dataType="boolean"
                                body={verifiedBodyTemplate}
                            />
                        ))}
                    </S.StyledTreeTable>
                </S.TableContainer>
            ) : (
                ''
            )}
        </S.Container>
    );
};

export default Upload;
