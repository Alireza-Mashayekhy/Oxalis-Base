import { useDispatch, useSelector } from 'react-redux';
import {
    mdiHomeAnalytics,
    mdiWhiteBalanceSunny,
    mdiWeatherNight,
    mdiUpload,
    mdiClipboardTextClock,
    mdiChartBar,
    mdiCalculator,
    mdiAccountGroup,
    mdiExitToApp,
    mdiTreasureChest,
    mdiChartLine,
} from '@mdi/js';
import { AppDispatch, SFC } from '@/types';
import MenuButton from './MenuItem/MenuButton';
import MenuLink from './MenuItem/MenuLink';

import * as S from './Styles';
import { setTheme } from '@/redux/slice/themeSlice';
import { getTheme } from '@/redux/selectors';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Nav: SFC = ({ className }) => {
    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector(getTheme);
    const navigate = useNavigate();

    const handleLogout = () => {
        // dispatch(logout());
        navigate('/signIn');
    };

    const handleThemeChange = () => {
        dispatch(setTheme());
    };
    return (
        <S.Container className={className}>
            <S.FlexItemLink>
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/home"
                    text="صفحه اصلی"
                    to="/proma/home"
                    width="150px"
                />
                <MenuLink
                    icon={mdiUpload}
                    rootPath="/upload"
                    text="بارگذاری"
                    to="/upload"
                    width="120px"
                />
                <MenuLink
                    icon={mdiClipboardTextClock}
                    rootPath="/records"
                    text="سوابق دارندگان واحدهای صندوق"
                    to="/records"
                    width="250px"
                />
                <MenuLink
                    icon={mdiChartBar}
                    rootPath="/statistics"
                    text="آمار تغییرات"
                    to="/statistics"
                    width="130px"
                />
                <MenuLink
                    icon={mdiCalculator}
                    rootPath="/fee"
                    text="محاسبه کارمزد مدیر"
                    to="/fee"
                    width="180px"
                />
                <MenuLink
                    icon={mdiAccountGroup}
                    rootPath="/users"
                    text="کاربران"
                    to="/users"
                    width="1110px"
                />
                <MenuLink
                    icon={mdiTreasureChest}
                    rootPath="/investment"
                    text="سرمایه گذاری"
                    to="/investment"
                    width="150px"
                />
                <MenuLink
                    icon={mdiChartLine}
                    rootPath="/Indv-Inst-History"
                    text="آمار حقوقی/حقیقی"
                    to="/Indv-Inst-History"
                    width="170px"
                />
            </S.FlexItemLink>
            <S.FlexItem>
                {/* <MenuButton
                    icon={`${
                        theme === 'dark'
                            ? mdiWhiteBalanceSunny
                            : mdiWeatherNight
                    } `}
                    onClick={handleThemeChange}
                    text="حالت تیره/روشن"
                /> */}
                <MenuButton
                    icon={mdiExitToApp}
                    onClick={handleLogout}
                    text="خروج"
                    width="110px"
                />
            </S.FlexItem>
        </S.Container>
    );
};

export default Nav;
