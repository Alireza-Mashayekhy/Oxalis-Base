import { Link as ULink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import UIcon from '@mdi/react';

import { breakpoints, colors, fonts } from '@/styles';

const HEIGHT = 48;

const menuItemStyle = css<{ $isActive: boolean }>`
    align-items: center;
    background: ${({ $isActive, theme }) =>
        $isActive ? theme.hover : 'transparent'};
    border-radius: ${`${HEIGHT / 2}px`};
    color: ${({ $isActive, theme }) =>
        $isActive ? colors.selectBlueColor : theme.textColorSecondary};
    display: flex;
    justify-content: center;
    font-weight: ${({ $isActive }) =>
        $isActive ? fonts.weight.semiBold : fonts.weight.regular};
    height: ${`${HEIGHT}px`};
    transition: background 0.3s ease;

    &:hover {
        background: rgba(144, 157, 171, 0.12);
        cursor: pointer;
        text-decoration: none;
    }
`;

export const Icon = styled(UIcon)``;
export const LinkIcon = styled(UIcon)`
    min-width: 26px;
`;

export const MenuButton = styled.div<{ $isActive: boolean }>`
    ${menuItemStyle}
`;

export const MenuLink = styled(ULink)<{ $isActive: boolean }>`
    align-items: center;
    background: ${({ $isActive, theme }) =>
        $isActive ? theme.hover : 'transparent'};
    border-radius: ${`${HEIGHT / 2}px`};
    color: ${({ $isActive, theme }) =>
        $isActive ? colors.selectBlueColor : theme.textColorSecondary};
    display: flex;
    font-weight: ${({ $isActive }) =>
        $isActive ? fonts.weight.semiBold : fonts.weight.regular};
    height: ${`${HEIGHT}px`};
    transition: background 0.3s ease;
    gap: 12px;
    min-width: 48px;
    overflow: hidden;
    width: 100%;
    padding: 0px 11px;
    &:hover {
        background: rgba(144, 157, 171, 0.12);
        cursor: pointer;
        text-decoration: none;
    }
`;

export const MenuLinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const MenuLinkText = styled.div`
    white-space: nowrap;
`;

export const Text = styled.div`
    font-size: 20px;
    margin-left: 20px;
    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;
