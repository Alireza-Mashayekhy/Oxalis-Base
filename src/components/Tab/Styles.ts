import styled from 'styled-components';
import { colors, fonts } from '@/styles';
import { Tab, Tabs } from '@mui/material';
import { ComponentProps } from 'react';

interface CustomTabProps extends ComponentProps<typeof Tab> {
    customColor?: string;
}

export const StyledTab = styled(Tab).withConfig({
    shouldForwardProp: (prop) => !['color'].includes(prop),
})<CustomTabProps>`
    py: 0;
    color: ${({ theme }) => theme.textColor};
    position: relative !important;
    z-index: 2 !important;
    &.Mui-selected {
        color: ${colors.palette.blue[600]};
    }
    &:hover {
        color: ${colors.palette.blue[600]};
        opacity: 1;
    }

    && {
        color: ${({ theme, color }) => color || theme.textColor};
        font-size: ${fonts.size.xs};
        font-weight: ${fonts.weight.semiBold};
        font-family: ${fonts.family.default};
    }
`;
export const StyledTabs = styled(Tabs)`
    .css-1qltlow-MuiTabs-indicator {
        height: 100% !important;
        z-index: 1 !important;
        background-color: ${({ theme }) => theme.primaryOpacity} !important;
        border-radius: 8px 8px 0px 0px;
    }
    .css-1wxkzlj-MuiTabs-flexContainer {
        position: relative !important;
        z-index: 3 !important;
    }
`;
export const Container = styled.div``;
