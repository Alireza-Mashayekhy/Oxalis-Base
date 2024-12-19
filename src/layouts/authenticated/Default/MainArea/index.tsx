import { Route, Routes } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { SFC } from '@/types';

import * as S from './Styles';

const MainsArea: SFC = ({ className }) => {
    return (
        <S.Container className={className}>
            <Routes>
                <Route path="/home" element={<MainPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </S.Container>
    );
};

export default MainsArea;
