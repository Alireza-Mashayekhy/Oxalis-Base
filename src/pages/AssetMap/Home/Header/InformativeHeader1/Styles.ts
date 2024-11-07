import { breakpoints } from '@/styles';
import styled from 'styled-components';
import UIcon from '@mdi/react';

export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    height: 15%;
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 0 10px;
`;

export const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    position: relative;
    padding: 0px;
`;
export const MenuContainer = styled.div`
    cursor: pointer;
`;
export const ChartContainer = styled.div`
    width: 100%;
`;

export const Icon = styled(UIcon)``;
