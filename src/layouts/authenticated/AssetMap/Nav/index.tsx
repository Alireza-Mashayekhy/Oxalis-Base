import { useDispatch } from 'react-redux';
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
    mdiStairsUp,
    mdiKeyboardSettingsOutline,
    mdiChartBellCurveCumulative,
    mdiChartBar,
} from '@mdi/js';

import { AppDispatch, SFC } from '@/types';
import { logout } from '@/dispatchers/authentication';
import MenuButton from '@/components/MenuItem/MenuButton';
import MenuLink from '@/components/MenuItem/MenuLink';
import * as S from './Styles';

const Nav: SFC = ({ className }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/signIn');
    };

    return (
        <S.Container className={className}>
            <S.FlexItemLink>
                <MenuLink
                    icon={mdiHomeAnalytics}
                    rootPath="/asset-map/home"
                    text="صفحه اصلی"
                    to="/asset-map/home"
                    width="150px"
                />
                <MenuLink
                    icon={mdiKeyboardSettingsOutline}
                    rootPath="/asset-map/dataentry"
                    text="ورود اطلاعات"
                    to="/asset-map/dataentry"
                    width="150px"
                />
                <MenuLink
                    icon={mdiFileUploadOutline}
                    rootPath="/asset-map/upload"
                    text="بارگذاری"
                    to="/asset-map/upload"
                    width="150px"
                />
                <MenuLink
                    icon={mdiAlphabeticalVariantOff}
                    rootPath="/asset-map/contradiction"
                    text="مغایرت گیری"
                    to="/asset-map/contradiction"
                    width="150px"
                />
                <MenuLink
                    icon={mdiStairsUp}
                    rootPath="/asset-map/fixedincomewatch"
                    text="اوراق درآمد ثابت"
                    to="/asset-map/fixedincomewatch"
                    width="160px"
                />
                <MenuLink
                    icon={mdiChartBellCurveCumulative}
                    rootPath="/asset-map/options"
                    text="اختیار معامله"
                    to="/asset-map/options"
                    width="150px"
                />
                <MenuLink
                    icon={mdiAccountGroup}
                    rootPath="/asset-map/users"
                    text="مدیریت کاربران"
                    to="/asset-map/users"
                    width="150px"
                />

                <MenuLink
                    icon={mdiFileTree}
                    rootPath="/asset-map/projectmanagement"
                    text="مدیریت پروژه"
                    to="/asset-map/projectmanagement"
                    width="150px"
                />
                <MenuLink
                    icon={mdiButtonPointer}
                    rootPath="/asset-map/realtime"
                    text="Real Time"
                    to="/asset-map/realtime"
                    width="150px"
                />
                <MenuLink
                    icon={mdiCounter}
                    rootPath="/asset-map/countermanagement"
                    text="Counter Management"
                    to="/asset-map/countermanagement"
                    width="210px"
                />
                <MenuLink
                    icon={mdiChartBar}
                    rootPath="/asset-map/charts"
                    text="نمودار ها"
                    to="/asset-map/charts"
                    width="150px"
                />
                <MenuLink
                    icon={mdiChartBar}
                    rootPath="/asset-map/grid_charts"
                    text=" گرید بندی نمودار ها"
                    to="/asset-map/grid_charts"
                    width="180px"
                />
            </S.FlexItemLink>
            <S.FlexItem>
                <MenuButton
                    icon={mdiExitToApp}
                    onClick={handleLogout}
                    text="خروج"
                    width="150px"
                />
            </S.FlexItem>
        </S.Container>
    );
};

export default Nav;
