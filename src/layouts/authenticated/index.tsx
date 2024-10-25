import { SFC } from '@/types';
import Nav from './Proma/Nav';
import MainArea from './Proma/MainArea';
import AssetMapNav from './AssetMap/Nav';
import AssetMapMainArea from './AssetMap/MainArea';
import * as S from './Styles';
import TopBar from './TopBar';
import background from '@/assets/background.jpg';
import { useLocation } from 'react-router-dom';
import LeftNav from './AssetMap/LeftNav';

const Authenticated: SFC = () => {
    const location = useLocation();

    const renderMain = () => {
        if (location.pathname.includes('/proma')) {
            return (
                <S.Area>
                    <Nav />
                    <MainArea />
                </S.Area>
            );
        } else if (location.pathname.includes('/asset-map')) {
            return (
                <S.Area>
                    <AssetMapNav />
                    <AssetMapMainArea />
                    <LeftNav />
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
