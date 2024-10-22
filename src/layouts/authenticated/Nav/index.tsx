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
            $width="200px"
            $status={isNavOpen}
            className={className}
            onMouseEnter={() => {
                setNavOpen(true);
            }}
            onMouseLeave={() => {
                setNavOpen(false);
            }}
        >
            <S.FlexItem>
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/home"
                    text="صفحه اصلی"
                    to="/home"
                />
            </S.FlexItem>
            <S.FlexItem>
                <MenuButton
                    icon={`${
                        theme === 'dark'
                            ? mdiWhiteBalanceSunny
                            : mdiWeatherNight
                    } `}
                    onClick={handleThemeChange}
                    text="حالت تیره/روشن"
                />
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
