import { AccordionSummary } from '@mui/material';
import styled from 'styled-components';

import { breakpoints, hiddenScroll } from '@/styles';
import { narrowScroll } from '@/styles/mixins';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    direction: rtl;
    display: flex;
    align-items: stretch;
    gap: 0.3rem;
    overflow: hidden;
    color: ${({ theme }) => theme.textColor};
`;

export const FirstColumn = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isSecondColumnVisible'].includes(prop),
})`
    width: 100%;
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
    ${hiddenScroll};
`;

export const SecondColumn = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isSecondColumnVisible'].includes(prop),
})<{ isSecondColumnVisible: boolean }>`
    position: relative;
    width: ${({ isSecondColumnVisible }) =>
        isSecondColumnVisible ? '270px' : '0'};
    // flex: none;
    transition: width 0.5s ease;
    overflow-x: hidden;
    overflow-y: auto;
    ${hiddenScroll};
    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
    @media (min-width: ${breakpoints.desktop}) {
        width: ${({ isSecondColumnVisible }) =>
            isSecondColumnVisible ? '20rem' : '0'};
    }
    @media (min-width: ${breakpoints.largeDesktop}) {
        width: ${({ isSecondColumnVisible }) =>
            isSecondColumnVisible ? '25rem' : '0'};
    }
    @media (min-width: ${breakpoints.xlDesktop}) {
        width: ${({ isSecondColumnVisible }) =>
            isSecondColumnVisible ? '30rem' : '0'};
    }
`;

export const FilterColumnContent = styled.div`
    height: 100%;
    overflow-y: auto;
    position: relative;
    z-index: 1;
    ${narrowScroll}
    * {
        white-space: nowrap !important;
    }
`;

export const FilterColumn = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFilterColumnVisible'].includes(prop),
})<{ isFilterColumnVisible: boolean }>`
    position: absolute;
    right: 0px;
    top: 30px;
    z-index: 10;
    background-color: #e9ebea50;
    backdrop-filter: blur(10px);
    border-radius: 0px 10px 10px 10px;
    width: ${({ isFilterColumnVisible }) =>
        isFilterColumnVisible ? '270px' : '0px'};
    min-width: ${({ isFilterColumnVisible }) =>
        isFilterColumnVisible ? '270px' : '0px'};
    flex: 0 0 auto;
    transition: all 0.5s ease;
    color: ${({ theme }) => theme.textColor};

    .toggleIcon {
        background-color: #e9ebea50;
        backdrop-filter: blur(10px);
        border-radius: 10px 0px 0px 10px;
        position: absolute;
        left: 0;
        transform: translateX(-100%);
        padding: 3px;
        cursor: pointer;
    }
`;

export const AccordionSummaryStyle = styled(AccordionSummary)<{
    $isActive: boolean;
}>`
    span {
        display: ${({ $isActive }) =>
            $isActive ? 'none !important' : 'block !important'};
    }
`;

export const Title = styled.span`
    font-family: IranSansFaNum !important;
    font-weight: 900;
`;

export const FlexContainerFirstRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        justify-content: start;
    }
    @media (max-width: ${breakpoints.tablet}) {
        flex-wrap: wrap;
    }

    .css-7iurs7-MuiAccordionSummary-content.Mui-expanded {
        margin: 10px 0px !important;
    }
    .css-jineix-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
        min-height: 0px;
    }

    > div:nth-child(1) {
        background-color: #e9ebea50;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        flex-basis: 100%;
        margin: 0 0.1rem 0 0.1em;
        color: ${({ theme }) => theme.textColor};
        // overflow:auto;

        @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
            flex-basis: calc(50% - 0.2rem);
        }

        @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
            flex-basis: calc(33% - 0.1rem);
        }

        @media (min-width: ${breakpoints.tablet}) {
            flex-basis: calc(25% - 0.2rem);
            // flex-basis: 25%;
            margin-left: 0.3rem;
        }
    }

    .other {
        width: 100%;
        justify-content: center;
        border-radius: 10px;
        background-color: #e9ebea50;
        backdrop-filter: blur(10px);

        @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
            justify-content: start;
        }
        @media (max-width: ${breakpoints.tablet}) {
            flex-wrap: wrap;
        }
        div {
            flex-basis: 100%;
            margin: 0 0.1rem 0.1rem 0.1rem;
            flex-grow: 1;
            color: ${({ theme }) => theme.textColor};

            @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
                flex-basis: calc(50% - 0.2rem);
            }

            @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
                flex-basis: calc(33% - 0.1rem);
            }

            @media (min-width: ${breakpoints.tablet}) {
                flex-basis: 25%;
                margin: 0;
            }
        }
    }
`;

export const OperationalRightColumnContainer = styled.div`
    width: 100%;
    min-height: 2.5rem;
    margin: 0 0.1rem 0.1rem 0.1rem;
    @media (min-width: ${breakpoints.mobile}) {
        display: none;
    }
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 7px; // Adjust as needed
    left: 5px; // Adjust as needed
`;

export const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-top: 0.3rem;
    .css-1808mag-MuiPaper-root-MuiAccordion-root.Mui-expanded {
        margin: 0px !important;
    }
    .css-1808mag-MuiPaper-root-MuiAccordion-root {
        border-radius: 10px !important;
        background-color: #e9ebea50 !important;
        backdrop-filter: blur(10px) !important;
    }
    .css-7iurs7-MuiAccordionSummary-content {
        margin-right: 30px !important;
    }
    .css-7iurs7-MuiAccordionSummary-content.Mui-expanded {
        justify-content: center !important;
        margin: 20px !important;
        font-size: 20px;
    }
    .css-7iurs7-MuiAccordionSummary-content {
        justify-content: center !important;
        margin: 20px !important;
        font-size: 20px;
    }
`;

export const SingleMainContainer = styled.div`
    border-radius: 10px !important;
    background-color: #e9ebea50 !important;
    backdrop-filter: blur(10px) !important;
    overflow: hidden;
    padding: 8px 16px 16px;
    height: 100%;
`;
