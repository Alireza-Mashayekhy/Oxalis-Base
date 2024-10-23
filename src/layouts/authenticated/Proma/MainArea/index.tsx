import { Route, Routes } from 'react-router-dom';
import { SFC } from '@/types';
import * as S from './Styles';

import HomePage from '@/pages/Proma/Home';
import UploadPage from '@/pages/Proma/Upload';
import RecordsPage from '@/pages/Proma/Records';
import Statistics from '@/pages/Proma/Statistics';
import Fee from '@/pages/Proma/Fee';
import UsersPage from '@/pages/Proma/Users';
import Investment from '@/pages/Proma/investment/MainContent';
import LegalFactual from '@/pages/Proma/legalFactual';

const MainArea: SFC = ({ className }) => {
    return (
        <S.Container className={className}>
            {
                <Routes>
                    <Route path="/proma/home" element={<HomePage />} />
                    <Route path="/proma/upload" element={<UploadPage />} />
                    <Route path="/proma/records" element={<RecordsPage />} />
                    <Route path="/proma/statistics" element={<Statistics />} />
                    <Route path="/proma/fee" element={<Fee />} />
                    <Route path="/proma/users" element={<UsersPage />} />
                    <Route path="/proma/investment" element={<Investment />} />
                    <Route
                        path="/proma/Indv-Inst-History"
                        element={<LegalFactual />}
                    />
                </Routes>
            }
        </S.Container>
    );
};

export default MainArea;
