import { Link as ULink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import UIcon from '@mdi/react';

import { breakpoints, colors, fonts } from '@/styles';

const HEIGHT = 48;

const menuItemStyle = css<{
    $isActive: boolean;
    $width: string;
}>`
    align-items: center;
    background-color: ${({ theme }) => theme.secondaryOpacity};
    backdrop-filter: blur(10px);
    border-radius: ${`${HEIGHT / 2}px`};
    color: ${({ $isActive, theme }) =>
        $isActive ? colors.selectBlueColor : theme.primary};
    display: flex;
    justify-content: center;
    font-weight: ${({ $isActive }) =>
        $isActive ? fonts.weight.semiBold : fonts.weight.regular};
    height: ${`${HEIGHT}px`};
    min-width: 48px;
    width: 48px;
    transition: all 0.3s ease;
    justify-content: start;
    gap: 12px;
    overflow: hidden;
    padding: 0px 11px;
    &:hover {
        background: rgba(144, 157, 171, 0.12);
        cursor: pointer;
        text-decoration: none;
        min-width: ${({ $width }) => $width};
        width: ${({ $width }) => $width};
    }
`;

export const Icon = styled(UIcon)`
    min-width: 26px;
`;
export const LinkIcon = styled(UIcon)`
    min-width: 26px;
`;

export const MenuButton = styled.div<{
    $isActive: boolean;
    $width: string;
}>`
    ${menuItemStyle}
`;

export const MenuLink = styled(ULink)<{
    $isActive: boolean;
    $width: string;
}>`
    ${menuItemStyle}
`;

export const MenuLinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const MenuLinkText = styled.div`
    white-space: nowrap;
    font-size: 14px;
`;

export const Text = styled.div`
    font-size: 20px;
    margin-left: 20px;
    @media (max-width: ${breakpoints.tablet}) {
        display: none;
    }
`;
