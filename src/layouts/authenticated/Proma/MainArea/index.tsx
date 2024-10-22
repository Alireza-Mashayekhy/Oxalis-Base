import { Route, Routes } from 'react-router-dom';
import { SFC } from '@/types';
import * as S from './Styles';

import HomePage from '@/pages/Home';

const MainArea: SFC = ({ className }) => {
    return (
        <S.Container className={className}>
            {
                <Routes>
                    <Route path="/proma/home" element={<HomePage />} />
                </Routes>
            }
        </S.Container>
    );
};

export default MainArea;
