import {
    mdiHomeAnalytics,
    mdiUpload,
    mdiClipboardTextClock,
    mdiChartBar,
    mdiCalculator,
    mdiAccountGroup,
    mdiExitToApp,
    mdiTreasureChest,
    mdiChartLine,
} from '@mdi/js';
import { SFC } from '@/types';
import MenuButton from '@/components/MenuItem/MenuButton';
import MenuLink from '@/components/MenuItem/MenuLink';

import * as S from './Styles';
import { useNavigate } from 'react-router';

const Nav: SFC = ({ className }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/signIn');
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
                    rootPath="/proma/upload"
                    text="بارگذاری"
                    to="/proma/upload"
                    width="120px"
                />
                <MenuLink
                    icon={mdiClipboardTextClock}
                    rootPath="/proma/records"
                    text="سوابق دارندگان واحدهای صندوق"
                    to="/proma/records"
                    width="250px"
                />
                <MenuLink
                    icon={mdiChartBar}
                    rootPath="/proma/statistics"
                    text="آمار تغییرات"
                    to="/proma/statistics"
                    width="130px"
                />
                <MenuLink
                    icon={mdiCalculator}
                    rootPath="/proma/fee"
                    text="محاسبه کارمزد مدیر"
                    to="/proma/fee"
                    width="180px"
                />
                <MenuLink
                    icon={mdiAccountGroup}
                    rootPath="/proma/users"
                    text="کاربران"
                    to="/proma/users"
                    width="110px"
                />
                <MenuLink
                    icon={mdiTreasureChest}
                    rootPath="/proma/investment"
                    text="سرمایه گذاری"
                    to="/proma/investment"
                    width="150px"
                />
                <MenuLink
                    icon={mdiChartLine}
                    rootPath="/proma/Indv-Inst-History"
                    text="آمار حقوقی/حقیقی"
                    to="/proma/Indv-Inst-History"
                    width="170px"
                />
            </S.FlexItemLink>
            <S.FlexItem>
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
