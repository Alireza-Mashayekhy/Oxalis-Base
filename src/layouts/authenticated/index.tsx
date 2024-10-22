import { SFC } from '@/types';
import Nav from './Proma/Nav';
import MainArea from './Proma/MainArea';
import * as S from './Styles';
import TopBar from './TopBar';
import background from '@/assets/background.jpg';
import { useLocation } from 'react-router-dom';

const Authenticated: SFC = () => {
    const location = useLocation();

    const renderMain = () => {
        if (location.pathname.includes('proma')) {
            return (
                <S.Area>
                    <Nav />
                    <MainArea />
                </S.Area>
            );
        }
    };

    return (
        <S.Container $url={background}>
            <TopBar />
            {renderMain()}
        </S.Container>
    );
};

export default Authenticated;
