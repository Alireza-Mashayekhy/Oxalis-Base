import { Route, Routes } from 'react-router-dom';
import { SFC } from '@/types';
import * as S from './Styles';

import { PATH_HOME } from '@/constants/paths';
import HomePage from '@/pages/Home';

const MainArea: SFC = ({ className }) => {
    return (
        <S.Container className={className}>
            {
                <Routes>
                    <Route path={PATH_HOME} element={<HomePage />} />
                </Routes>
            }
        </S.Container>
    );
};

export default MainArea;
