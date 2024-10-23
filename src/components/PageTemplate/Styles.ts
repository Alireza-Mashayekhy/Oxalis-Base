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
// const breakpoints = {
//   mobile: '320px',
//   tablet: '768px',
//   desktop: '1024px',
//   largeDesktop: '1440px',
//   xlDesktop: '1920px'
// };

// Utility for narrow scrollbar styling
// const narrowScroll = `
//   &::-webkit-scrollbar {
//     width: 6px;
//   }
//   &::-webkit-scrollbar-track {
//     background: transparent;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: rgba(0, 0, 0, 0.2);
//     border-radius: 3px;
//   }
// `;
export const ColumnHeader = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    min-height: 2.5vh;
    padding: 2px 5px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end; // Add this to align content to the right
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
`;

export const TogglerWrapper = styled.div`
    position: absolute;
    right: 5px; // Changed from left to right
    top: 50%;
    transform: translateY(-50%);
    z-index: 101;
    pointer-events: auto;
`;

export const FilterColumnContent = styled.div`
    margin-top: 2.5vh;
    height: calc(100% - 2.5vh);
    overflow-y: auto;
    position: relative;
    z-index: 1;
    ${narrowScroll}
`;

export const MainColumnContent = styled.div`
    margin-top: 2.5vh;
    height: calc(100% - 2.5vh);
    overflow-y: auto;
    position: relative;
    z-index: 1;
    ${narrowScroll}
`;

export const FilterColumn = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFilterColumnVisible'].includes(prop),
})<{ isFilterColumnVisible: boolean }>`
    position: relative;
    width: ${({ isFilterColumnVisible }) =>
        isFilterColumnVisible ? '270px' : '0'};
    flex: 0 0 auto;
    transition: all 0.5s ease;
    overflow: hidden;
    opacity: ${({ isFilterColumnVisible }) =>
        isFilterColumnVisible ? '1' : '0'};
    visibility: ${({ isFilterColumnVisible }) =>
        isFilterColumnVisible ? 'visible' : 'hidden'};
    isolation: isolate;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor};

    @media (max-width: ${breakpoints.tablet}) {
        display: ${({ isFilterColumnVisible }) =>
            isFilterColumnVisible ? 'block' : 'none'};
        width: ${({ isFilterColumnVisible }) =>
            isFilterColumnVisible ? 'calc(33% - 0.1rem)' : '0'};
        min-height: calc(100vh - 20vh);
    }

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        display: ${({ isFilterColumnVisible }) =>
            isFilterColumnVisible ? 'block' : 'none'};
        flex-basis: ${({ isFilterColumnVisible }) =>
            isFilterColumnVisible ? 'calc(33% - 0.1rem)' : '0'};
        margin: 0 0.1rem;
        min-height: calc(100vh - 20vh);
    }

    @media (min-width: ${breakpoints.tablet}) {
        display: ${({ isFilterColumnVisible }) =>
            isFilterColumnVisible ? 'block' : 'none'};
        flex-basis: ${({ isFilterColumnVisible }) =>
            isFilterColumnVisible ? 'calc(25% - 0.1rem)' : '0'};
        margin-left: 0 0.1rem;
        min-height: calc(100vh - 30vh);
    }
`;

export const MainColumn = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isFilterColumnVisible'].includes(prop),
})<{ isFilterColumnVisible: boolean }>`
    position: relative;
    flex: 1;
    transition: all 0.5s ease;
    overflow: hidden;
    isolation: isolate;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor};
    margin: 0 0.1rem;
    overflow-y: auto;
    ${narrowScroll}

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        display: block;
        flex-basis: ${({ isFilterColumnVisible }) =>
            isFilterColumnVisible ? 'calc(66% - 0.1rem)' : '100%'};
        margin: 0 0.1rem;
        min-height: calc(100vh - 20vh);
    }

    @media (min-width: ${breakpoints.tablet}) {
        display: block;
        flex-basis: ${({ isFilterColumnVisible }) =>
            isFilterColumnVisible ? 'calc(75% - 0.1rem)' : '100%'};
        margin: 0 0.1rem;
        min-height: calc(100vh - 30vh);
    }
`;

export const FlexContainerSecondRow = styled.div`
    display: flex;
    margin-top: 0.1rem;
    align-items: stretch;
    justify-content: flex-start;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    gap: 0.1rem;

    @media (min-width: ${breakpoints.tablet}) {
        margin-top: 0.3rem;
        gap: 0.3rem;
    }
`;
export const TopRow = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textColor};
    min-height: 5vh;
    padding: 5px 10px;
    margin: 0.3rem 0;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: ${breakpoints.tablet}) {
        margin: 0 0.1rem 0.1rem 0.1rem;
    }
    @media (max-width: ${breakpoints.mobile}) {
        gap: 1rem;
    }
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

    > div:nth-child(1) {
        flex-basis: 100%;
        margin: 0 0.1rem 0.1rem 0.1rem;
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.textColor};
        min-height: 5rem;
        // overflow:auto;

        @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
            flex-basis: calc(50% - 0.2rem);
            min-height: 10rem;
        }

        @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
            flex-basis: calc(33% - 0.1rem);
            min-height: 7rem;
        }

        @media (min-width: ${breakpoints.tablet}) {
            flex-basis: calc(25% - 0.2rem);
            // flex-basis: 25%;
            margin-left: 0.3rem;
            min-height: 10rem;
        }
    }

    > div:not(:first-child) {
        flex-basis: 100%;
        margin: 0 0.1rem 0.1rem 0.1rem;
        min-height: 5rem;
        flex-grow: 1;
        background-color: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.textColor};
        @media (min-width: ${breakpoints.mini}) and (max-width: ${breakpoints.mobile}) {
            flex-basis: calc(50% - 0.2rem);
            min-height: 10rem;
        }

        @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
            flex-basis: calc(33% - 0.1rem);
            min-height: 7rem;
        }

        @media (min-width: ${breakpoints.tablet}) {
            flex-basis: 25%;
            margin: 0;
            min-height: 10rem;
        }
    }
`;

// export const FlexContainerSecondRow = styled.div`
//     display: flex;
//     margin-top: 0.1rem;
//     align-items: stretch;
//     justify-content: center;
//     overflow-y: auto;
//     -webkit-overflow-scrolling: touch;

//     @media (min-width: ${breakpoints.tablet}) {
//         margin-top: 0.3rem;
//     }

//     > div:nth-child(1) {
//         // flex-shrink: 0;
//         display: none;
//         background-color: ${({ theme }) => theme.secondary};
//         color: ${({ theme }) => theme.textColor};

//         @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
//             display: block;
//             flex-basis: calc(33% - 0.1rem);
//             margin: 0 0.1rem;
//             min-height: calc(100vh - 20vh);
//         }

//         @media (min-width: ${breakpoints.tablet}) {
//             display: block;
//             flex-basis: calc(25% - 0.1rem);
//             margin-left: 0.3rem;
//             // position: relative;
//             height: calc(100vh - 30vh);
//         }
//     }
//     > div:nth-child(2) {
//         background-color: ${({ theme }) => theme.secondary};
//         color: ${({ theme }) => theme.textColor};
//         flex-basis: 100%;
//         margin: 0 0.1rem;
//         overflow-y: auto;
//         // overflow-x: auto;
//         ${narrowScroll};
//         @media (max-width: ${breakpoints.tablet}) {
//             min-height: 300vh;
//         }
//         @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
//             flex-basis: calc(66%);
//             margin: 0 0.1rem;
//         }

//         @media (min-width: ${breakpoints.tablet}) {
//             flex-basis: 75%;
//             margin: 0;
//             max-height: 70vh;
//         }
//     }
// `;

export const OperationalRightColumnContainer = styled.div`
    width: 100%;
    min-height: 2.5rem;
    // display: flex;
    margin: 0 0.1rem 0.1rem 0.1rem;
    // margin: 0.1rem 0.1rem 0 0.1rem;
    // align-items: stretch;
    // justify-content: center;
    @media (min-width: ${breakpoints.mobile}) {
        display: none;
    }

    // > div {
    //   flex-basis: 100%;
    //   margin-bottom: 0.1rem;
    // }
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 7px; // Adjust as needed
    left: 5px; // Adjust as needed
`;
