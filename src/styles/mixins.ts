import { css } from 'styled-components';
import fonts from '@/styles/fonts';

export const muiButtonStyle = css`
    && {
        border: 1px solid ${({ theme }) => theme.border};
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.textColor};
        font-size: ${fonts.size.m};
        font-weight: ${fonts.weight.semiBold};
        font-family: ${fonts.family.default};
    }
    &&.Mui-disabled {
        color: #888; // Your desired color for the text when the button is disabled
    }

    &:hover {
        color: ${({ theme }) => theme.hoverText};
    }
`;

export const hiddenScroll = css`
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0;
    }

    &::-webkit-scrollbar-thumb {
        background: transparent;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
    /* For Firefox */
    .hidden-scroll {
        scrollbar-width: none; /* Firefox */
    }

    /* For WebKit-based browsers */
    .hidden-scroll::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;
export const narrowScroll = css`
    &::-webkit-scrollbar {
        height: 5px; /* Controls the height of the scrollbar */
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) =>
            theme.secondary || '#f0f0f0'}; /* Default track color */
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) =>
            theme.scrollbarThumb || '#888'}; /* Default thumb color */
        border-radius: 5px; /* Optional: adds rounded corners to the scrollbar thumb */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) =>
            theme.scrollbarThumbHover || '#555'}; /* Color on hover */
    }
`;

export const primeReactDataTableStyle = css`
    /* table header style */
    .p-datatable-thead > tr > th {
        background-color: ${({ theme }) => theme.hover} !important;
        color: ${({ theme }) => theme.textColor} !important;
        padding: 10px;
        font-size: 16px !important;
        white-space: nowrap;
    }
    /* align table header in the center */
    .p-datatable-thead > tr > th > .p-column-header-content {
        justify-content: center !important;
    }
    /* table body style */
    .p-datatable-tbody > tr > td {
        border-bottom: 1px solid #dee2e6;
        color: ${({ theme }) => theme.textColor} !important;
        background-color: ${({ theme }) => theme.secondary} !important;
        font-size: 16px !important;
        font-weight: 600;
        white-space: nowrap;
        padding: 5px;
        // text-align: center !important;
    }
    .p-icon {
        color: ${({ theme }) => theme.textColor} !important;
    }
    .p-datatable-tbody > tr.p-row-odd > td {
        background-color: ${({ theme }) => theme.strippedRow} !important;
    }
    /* scroll style */
    .p-datatable-wrapper {
        ${narrowScroll};
    }
    /* scroll style for when the table has virtual scroll property */
    .p-virtualscroller.p-virtualscroller-inline {
        ${narrowScroll};
    }

    /* align table body cell in the center */
    .p-datatable-tbody > tr:not(.p-rowgroup-header) > td {
        text-align: center;
    }

    .p-datatable-tbody .p-row-odd {
        background-color: ${({ theme }) => theme.strippedRow} !important;
    }

    .p-datatable-tbody > tr:nth-child(odd) {
        background-color: ${({ theme }) => theme.strippedRow} !important;
    }
    /* style for grouped row */
    .p-datatable-tbody .p-rowgroup-header > td {
        background-color: ${({ theme }) => theme.primary} !important;
        padding: 10px;
    }

    /* to align > with text in grouped row */
    .p-datatable-tbody .p-rowgroup-header > td > span {
        display: inline-flex;
        margin-right: 0.5rem;
        color: ${({ theme }) => theme.textColor} !important;
    }
    /* style for expander icon */
    .p-datatable-tbody .p-rowgroup-header > td > button {
        color: ${({ theme }) => theme.textColor} !important;
    }
    .p-paginator {
        background-color: ${({ theme }) => theme.primary} !important;
    }
    .p-paginator-element {
        color: ${({ theme }) => theme.textColor} !important;
    }
    .p-dropdown {
        background-color: ${({ theme }) => theme.secondary} !important;
        .p-dropdown-label {
            color: ${({ theme }) => theme.textColor} !important;
        }
        .p-dropdown-trigger {
            color: ${({ theme }) => theme.textColor} !important;
        }
    }
`;

export const primeReactTreeTableStyle = css`
    /* table header style */
    .p-treetable-scrollable-header {
        background-color: ${({ theme }) => theme.primaryOpacity} !important;
    }
    .p-treetable-thead > tr > th {
        background-color: transparent !important;
        color: ${({ theme }) => theme.primary} !important;
        padding: 10px;
        font-size: 16px !important;
        white-space: nowrap;
    }
    /* table body style */
    .p-icon {
        color: ${({ theme }) => theme.primary} !important;
    }
    .p-treetable .p-treetable-tbody > tr {
        background-color: transparent !important;
        background: transparent !important;
    }
    .p-treetable-tbody > tr {
        background-color: transparent !important;
        background: transparent !important;
    }
    .p-treetable-tbody > tr > td {
        border-bottom: 1px solid #dee2e6;
        color: ${({ theme }) => theme.primary} !important;
        background-color: transparent !important;
        font-size: 16px !important;
        font-weight: 400;
        white-space: nowrap;
        padding: 5px;
    }

    .p-treetable-toggler {
        transform: rotate(180deg);
    }

    .p-treetable-tbody > tr.p-row-odd > td {
        background-color: transparent !important;
    }
    /* scroll style */
    .p-treetable-wrapper {
        ${narrowScroll};
    }
    /* scroll style for when the table has virtual scroll property */
    .p-virtualscroller.p-virtualscroller-inline {
        ${narrowScroll};
    }

    /* align table body cell in the center */
    .p-treetable-tbody > tr:not(.p-rowgroup-header) > td {
        text-align: center;
    }

    .p-treetable-tbody .p-row-odd {
        background-color: transparent !important;
    }

    .p-treetable-tbody > tr:nth-child(odd) {
        background-color: transparent !important;
    }
    /* style for grouped row */
    .p-treetable-tbody .p-rowgroup-header > td {
        background-color: transparent !important;
        padding: 10px;
    }

    /* to align > with text in grouped row */
    .p-treetable-tbody .p-rowgroup-header > td > span {
        display: inline-flex;
        margin-right: 0.5rem;
        color: ${({ theme }) => theme.primary} !important;
    }
    /* style for expander icon */
    .p-treetable-tbody .p-rowgroup-header > td > button {
        color: ${({ theme }) => theme.primary} !important;
    }
    .p-paginator {
        background-color: transparent !important;
    }
    .p-paginator-element {
        color: ${({ theme }) => theme.primary} !important;
    }
    .p-dropdown {
        background-color: ${({ theme }) => theme.secondary} !important;
        .p-dropdown-label {
            color: ${({ theme }) => theme.primary} !important;
        }
        .p-dropdown-trigger {
            color: ${({ theme }) => theme.primary} !important;
        }
    }
`;

export const inputStyle = css`
    .p-inputtext {
        background-color: ${({ theme }) => theme.primary} !important;
        color: ${({ theme }) => theme.textColor} !important;
        margin: 0 !important;
        width: 190px;
        height: 35px;
        font-size: 0.875rem;
        &::placeholder {
            color: ${({ theme }) => theme.hoverText};
            opacity: 1;
        }
    }
`;

export const inputTextStyle = css`
    background-color: ${({ theme }) => theme.primary} !important;
    color: ${({ theme }) => theme.textColor} !important;
    margin: 0 !important;
    width: 190px;
    height: 35px;
    font-size: 0.875rem;
    &::placeholder {
        color: ${({ theme }) => theme.hoverText};
        opacity: 1;
    }
`;

export const primeDropdownStyle = css`
    background-color: transparent !important;
    border: 0px solid hsla(0, 0%, 100%, 0.3);
    border-bottom: 1px solid ${({ theme }) => theme.primary} !important;
    border-radius: 0px !important;
    box-shadow: none !important;
    .p-dropdown-label {
        padding: 5px 40px 5px 20px !important;
        font-size: 16px !important;
        color: ${({ theme }) => theme.primary} !important;
    }
    .p-dropdown-clear-icon {
        right: 1rem !important;
    }
`;
