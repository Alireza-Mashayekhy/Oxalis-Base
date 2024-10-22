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
    const [isNavOpen, setNavOpen] = useState(false);
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
        <S.Container
            $width="180px"
            $status={isNavOpen}
            className={className}
            onMouseEnter={() => {
                setNavOpen(true);
            }}
            onMouseLeave={() => {
                setNavOpen(false);
            }}
        >
            <S.FlexItemLink>
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/home"
                    text="صفحه اصلی"
                    to="/proma/home"
                />
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/test-1"
                    text="test 1"
                    to="/proma/test-1"
                />
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/test-2"
                    text="test 2"
                    to="/proma/test-2"
                />
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/test-3"
                    text="test 3"
                    to="/proma/test-3"
                />
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/test-4"
                    text="test 4"
                    to="/proma/test-4"
                />
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/test-5"
                    text="test 5"
                    to="/proma/test-5"
                />
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/test-6"
                    text="test 6"
                    to="/proma/test-6"
                />
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/proma/test-7"
                    text="test 7"
                    to="/proma/test-7"
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
                />
            </S.FlexItem>
        </S.Container>
    );
};

export default Nav;
