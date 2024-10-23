import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    mdiHomeAnalytics,
    mdiFileUploadOutline,
    mdiAccountGroup,
    mdiExitToApp,
    mdiFileTree,
    mdiButtonPointer,
    mdiCounter,
    mdiAlphabeticalVariantOff,
    mdiWhiteBalanceSunny,
    mdiWeatherNight,
    mdiStairsUp,
    mdiKeyboardSettingsOutline,
    mdiChartBellCurveCumulative,
    mdiChartBar,
} from '@mdi/js';

import { AppDispatch, SFC } from '@/types';
// import {PATH_COURSES} from 'constants/paths';
import { getSelf, getTheme } from '@/selectors/state';
import { logout } from '@/dispatchers/authentication';
// import CreatePostButton from './CreatePostButton';
import MenuButton from './MenuItem/MenuButton';
import MenuLink from './MenuItem/MenuLink';
import logoblack from '@/assets/logoblack.png';
import logoWhite from '@/assets/logoWhite.png';
import * as S from './Styles';

const Nav: SFC = ({ className }) => {
    const dispatch = useDispatch<AppDispatch>();
    const theme = useSelector(getTheme);
    const navigate = useNavigate();
    const self = useSelector(getSelf);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/signIn');
    };

    const handleThemeChange = () => {};
    return (
        <S.Container className={className}>
            <S.Logo src={`${theme === 'dark' ? logoWhite : logoblack} `} />
            <S.FlexItem>
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/asset-map/home"
                    text="صفحه اصلی"
                    to="/asset-map/home"
                />
                <MenuLink
                    icon={mdiKeyboardSettingsOutline}
                    rootPath="/asset-map/dataentry"
                    text="ورود اطلاعات"
                    to="/asset-map/dataentry"
                />
                <MenuLink
                    icon={mdiFileUploadOutline}
                    rootPath="/asset-map/upload"
                    text="بارگذاری"
                    to="/asset-map/upload"
                />
                <MenuLink
                    icon={mdiAlphabeticalVariantOff}
                    rootPath="/asset-map/contradiction"
                    text="مغایرت گیری"
                    to="/asset-map/contradiction"
                />
                <MenuLink
                    icon={mdiStairsUp}
                    rootPath="/asset-map/fixedincomewatch"
                    text="اوراق درآمد ثابت"
                    to="/asset-map/fixedincomewatch"
                />
                <MenuLink
                    icon={mdiChartBellCurveCumulative}
                    rootPath="/asset-map/options"
                    text="اختیار معامله"
                    to="/asset-map/options"
                />
                <MenuLink
                    icon={mdiAccountGroup}
                    rootPath="/asset-map/users"
                    text="مدیریت کاربران"
                    to="/asset-map/users"
                />

                <MenuLink
                    icon={mdiFileTree}
                    rootPath="/asset-map/projectmanagement"
                    text="مدیریت پروژه"
                    to="/asset-map/projectmanagement"
                />
                <MenuLink
                    icon={mdiButtonPointer}
                    rootPath="/asset-map/realtime"
                    text="Real Time"
                    to="/asset-map/realtime"
                />
                <MenuLink
                    icon={mdiCounter}
                    rootPath="/asset-map/countermanagement"
                    text="Counter Management"
                    to="/asset-map/countermanagement"
                />
                <MenuLink
                    icon={mdiChartBar}
                    rootPath="/asset-map/charts"
                    text="نمودار ها"
                    to="/asset-map/charts"
                />
                <MenuLink
                    icon={mdiChartBar}
                    rootPath="/asset-map/grid_charts"
                    text=" گرید بندی نمودار ها"
                    to="/asset-map/grid_charts"
                />
                {/* TODO: replace these hardcoded paths with those in constants/paths.ts */}
                {/* <MenuLink icon={mdiBrush} rootPath="/asset-map/art" text="Art" to="/asset-map/art/marketplace" />
        <MenuLink icon={mdiAccountGroup} rootPath="/asset-map/contributions" text="Contributions" to="/asset-map/contributions" />
        <MenuLink icon={mdiLanConnect} rootPath="/asset-map/cores" text="Cores" to="/asset-map/cores" />
        <MenuLink icon={mdiSwapHorizontalCircleOutline} rootPath="/asset-map/exchange" text="Exchange" to="/asset-map/exchange/trade" />
        <MenuLink icon={mdiHome} rootPath="/asset-map/feed" text="Home" to="/asset-map/feed" />
        <MenuLink icon={mdiFaceWoman} rootPath="/asset-map/ia" text="Ia" to="/asset-map/ia" />
        <MenuLink icon={mdiBell} rootPath="/asset-map/notifications" text="Notifications" to="/asset-map/notifications" />
        <MenuLink icon={mdiAccount} rootPath={/asset-map`/profile/${self.id}`} text="Profile" to={/asset-map`/profile/${self.id}`} />
        <MenuLink icon={mdiShopping} rootPath="/asset-map/shop" text="Shop" to="/asset-map/shop/buy/catalog" />
        <MenuLink icon={mdiSchool} rootPath={/asset-map`${PATH_COURSES}`} text="University" to={/asset-map`${PATH_COURSES}`} />
        <MenuLink icon={mdiWalletBifoldOutline} rootPath="/asset-map/wallets" text="Wallets" to="/asset-map/wallets" /> */}
                {/* <CreatePostButton /> */}
            </S.FlexItem>
            <S.FlexItem>
                <MenuButton
                    icon={`${theme === 'dark' ? mdiWhiteBalanceSunny : mdiWeatherNight} `}
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
