import UIcon from '@mdi/react';
import styled from 'styled-components';

import { breakpoints } from '@/styles';

export const Gap = styled.div`
    width: 0;
    flex-grow: 1;
`;

export const ImageContainer = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    max-width: 28px;
    max-height: 30px;
`;

export const IMG = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Icon = styled(UIcon)`
    width: 25px;
    @media (max-width: ${breakpoints.mobile}) {
        width: 20px;
    }
`;

export const Calendar = styled.div`
    display: flex;
    white-space: nowrap;
    gap: 10px;
    cursor: pointer;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 12px;
    }
`;

export const CalendarList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 15px;
    margin-top: 30px;
    @media (max-width: ${breakpoints.mini}) {
        grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    }
`;

export const CalendarItem = styled.div<{ $disable?: boolean }>`
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.textColor};
    border-radius: 12px;
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    cursor: ${({ $disable }) => ($disable ? 'default' : 'pointer')};
    opacity: ${({ $disable }) => ($disable ? '0.5' : '')};
    transition: background-color 0.3s ease, transform 0.3s ease;
    background-color: ${({ $disable, theme }) => ($disable ? theme.hover : '')};
    &:hover {
        background-color: ${({ $disable, theme }) =>
            $disable ? '' : theme.hover};
    }
`;

export const CalendarTitle = styled.div`
    font-size: 32px;
    font-weight: bold;
    color: ${({ theme }) => theme.textColor};
`;

export const AvatarContainer = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    max-width: 30px;
    max-height: 30px;
    border-radius: 50%;
    overflow: hidden;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const HandleButton = styled.button`
    cursor: pointer;
    aspect-ratio: 1;
`;

export const CalendarMonth = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`;

export const BackToTodayButton = styled.div`
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 10px;
    }
`;
