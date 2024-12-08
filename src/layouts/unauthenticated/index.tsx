import { Route, Routes } from 'react-router-dom';

import { SFC } from '@/types';
import * as S from './styles';
import Login from './forms/otpLogin';

const Unauthenticated: SFC = ({ className }) => {
    return (
        <S.Container className={className}>
            <Routes>
                {/* TODO: replace these hardcoded paths with those in constants/paths.ts */}
                <Route path="/signIn" element={<Login />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </S.Container>
    );
};

export default Unauthenticated;
