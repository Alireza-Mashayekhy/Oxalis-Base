import { Menubar } from 'primereact/menubar';
import styled from 'styled-components';
import UIcon from '@mdi/react';

export const Container = styled.div`
    // background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
    height: 70px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Menu = styled.div`
    width: 0;
    flex-grow: 1;
    display: flex;
    .label {
        position: relative;
        border-radius: 10px;
        .labelInfo {
            padding: 10px 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 20px;
        }
        &:hover {
            background-color: #e9ebea20;
            .children {
                display: flex;
            }
        }
        .children {
            position: absolute;
            top: 0px;
            right: 100%;
            display: none;
            background-color: #e9ebea20;
            backdrop-filter: blur(10px);
            border-radius: 10px;
            overflow: hidden;
            height: 100%;
            font-size: 16px;
            .item {
                height: 100%;
                padding: 0 15px;
                display: flex;
                align-items: center;
                cursor: pointer;
                white-space: nowrap;
                &:hover {
                    background-color: ${({ theme }) => theme.secondaryOpacity};
                }
            }
        }
    }
`;

export const Icon = styled(UIcon)`
    font-size: 24px;
    line-height: 22px;
`;

export const Logo = styled.img`
    height: 100%;
    aspect-ratio: 1;
    display: block;
`;

export const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
`;

export const Year = styled.div`
    font-size: 24px;
    line-height: 22px;
`;
