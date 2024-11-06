'use client';
import { FC, useEffect, useState } from 'react';
import * as S from './Styles';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useSelector } from 'react-redux';
import { getTheme } from '@/redux/selectors';

interface DdnHistoryNode {
    key: string;
    data: {
        [key: string]: any;
    };
    children?: DdnHistoryNode[];
}

interface ColumnField {
    field: string;
    header: string;
    width?: string;
    align?: string;
    sortable?: boolean;
    expander?: boolean;
    body?: any;
}

interface TreeTableProps {
    data: DdnHistoryNode[];
    columns: ColumnField[];
    onDetailsClick?: (nationalId: string) => void;
    onEditClick?: (nationalId: string) => void;
    onDownloadClick?: (nationalId: string) => void;
    onChangeStatusClick?: (nationalId: string) => void;
    onDeleteClick?: (nationalId: string) => void;
    upload?: boolean;
    scrollHeight?: string;
}

const CustomTreeTable: FC<TreeTableProps> = ({
    data,
    columns,
    onDetailsClick,
    onEditClick,
    onDownloadClick,
    onChangeStatusClick,
    onDeleteClick,
    upload,
    scrollHeight,
}) => {
    const theme = useSelector(getTheme);

    const statusBodyTemplate = (node) => {
        const hasData = node.data.is_active;
        return (
            <i
                className={`pi ${hasData ? 'pi-check' : 'pi-times'}`}
                style={{
                    color: hasData
                        ? theme === 'dark'
                            ? '#ffffff'
                            : '#000000'
                        : '#b61616',
                    fontSize: '22px',
                }}
                onClick={() =>
                    onChangeStatusClick &&
                    onChangeStatusClick(node.data.national_id)
                }
            ></i>
        );
    };

    const actionTemplate = (node, actionType) => {
        const actions = {
            details: onDetailsClick,
            edit: onEditClick,
            download: onDownloadClick,
            delete: onDeleteClick,
        };
        const icons = {
            details: 'pi pi-align-right',
            edit: 'pi pi-pencil',
            download: 'pi pi-download',
            delete: 'pi pi-trash',
        };
        return (
            <Button
                icon={icons[actionType]}
                className={`rounded-lg px-5 aspect-square ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                onClick={() => actions[actionType]?.(node.data.national_id)}
                text
            />
        );
    };

    const renderBodyTemplate = (node, field) => {
        switch (field) {
            case 'status':
                return statusBodyTemplate(node);
            case 'details':
                return actionTemplate(node, 'details');
            case 'edit':
                return actionTemplate(node, 'edit');
            case 'download':
                return actionTemplate(node, 'download');
            case 'delete':
                return actionTemplate(node, 'delete');
            default:
                return node.data[field];
        }
    };

    const [expandedKeys, setExpandedKeys] = useState({});

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;
            node.children.forEach((childNode) => {
                expandNode(childNode, _expandedKeys);
            });
        }
    };

    useEffect(() => {
        document.querySelectorAll('.p-treetable-toggler').forEach((e) => {
            const element = e as HTMLElement;
            const computedStyle = getComputedStyle(element);
            const leftMargin = computedStyle.marginLeft;
            const rightMargin = computedStyle.marginRight;

            const leftMarginValue = parseFloat(leftMargin);
            const rightMarginValue = parseFloat(rightMargin);

            if (leftMarginValue > rightMarginValue) {
                element.style.marginRight = `${leftMarginValue}px`;
                element.style.marginLeft = `8px`;
            }
        });
    }, [expandedKeys]);

    return (
        <S.TreeTableStyle
            value={data}
            scrollable
            scrollHeight={scrollHeight || '400px'}
            emptyMessage="داده‌ای برای نمایش وجود ندارد."
            expandedKeys={expandedKeys}
            onToggle={(e) => setExpandedKeys(e.value)}
        >
            {columns.map((col, index) => (
                <Column
                    key={index}
                    field={col.field}
                    header={col.header}
                    sortable={col.sortable}
                    expander={col.expander}
                    style={{
                        width: col.width || 'auto',
                        textAlign: (col.align || 'center') as
                            | 'left'
                            | 'right'
                            | 'center',
                    }}
                    body={(node) =>
                        col.body || renderBodyTemplate(node, col.field)
                    }
                />
            ))}
        </S.TreeTableStyle>
    );
};

export default CustomTreeTable;
