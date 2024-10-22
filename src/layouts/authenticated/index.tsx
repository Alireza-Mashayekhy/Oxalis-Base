import { SFC } from '@/types';
import Nav from './Nav';
import MainArea from './MainArea';
import * as S from './Styles';
import TopBar from './TopBar';
import background from '@/assets/background.jpg';

const Authenticated: SFC = () => {
    return (
        <S.Container $url={background}>
            <TopBar />
            <S.Area>
                <Nav />
                <MainArea />
            </S.Area>
        </S.Container>
    );
};

export default Authenticated;
