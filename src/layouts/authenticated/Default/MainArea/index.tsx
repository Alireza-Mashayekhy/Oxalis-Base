import { Route, Routes } from 'react-router-dom';
import { SFC } from '@/types';
import * as S from './Styles';
import { MainPage } from '@/pages/MainPage';

const MainsArea: SFC = ({ className }) => {
    return (
        <S.Container className={className}>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </S.Container>
    );
};

export default MainsArea;
