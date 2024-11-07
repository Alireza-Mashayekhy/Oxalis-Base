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
import { AppDispatch, SFC } from '@/types';
import MenuButton from '@/components/MenuItem/MenuButton';
import MenuLink from '@/components/MenuItem/MenuLink';

import * as S from './Styles';
import { useNavigate } from 'react-router';
import { logout } from '@/dispatchers/authentication';
import { useDispatch } from 'react-redux';

const MainNav: SFC = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/signIn');
    };

    return (
        <S.Container className={className}>
            <S.FlexItemLink></S.FlexItemLink>
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

export default MainNav;
