import {
    mdiExitToApp,
} from '@mdi/js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import MenuButton from '@/components/MenuItem/MenuButton';
import { logout } from '@/dispatchers/authentication';
import { AppDispatch, SFC } from '@/types';

import * as S from './Styles';

const MainNav: SFC = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/signIn');
    };

    return (
        <S.Container className={className}>
            <S.FlexItemLink />
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
