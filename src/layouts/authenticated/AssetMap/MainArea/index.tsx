import { Route, Routes } from 'react-router-dom';

// import Art from 'pages/Art';
// import Contributions from 'pages/Contributions';
// import Cores from 'pages/Cores';
// import Courses from 'pages/University/Courses';
// import Exchange from 'pages/Exchange';
// import Feed from 'pages/Feed';
// import Ia from 'pages/Ia';
// import Lectures from 'pages/University/Lectures';
// import Notifications from 'pages/Notifications';
// import Profile from 'pages/Profile';
// import Shop from 'pages/Shop';
// import Wallets from 'pages/Wallets';
import Home from '@/pages/AssetMap/Home';
import Upload from '@/pages/AssetMap/Upload';
import DataEntry from '@/pages/AssetMap/DataEntry';
import User from '@/pages/AssetMap/User';
import TaskPage from '@/pages/AssetMap/ProjectManagement';
import RealTime from '@/pages/AssetMap/RealTime';
import CounterManagement from '@/pages/AssetMap/CounterManagement';
import Contradiction from '@/pages/AssetMap/Contradictions';
import Options from '@/pages/AssetMap/Options';
import FixedIncomeFund from '@/pages/AssetMap/FixedIncomeFund';
import NewData from '@/pages/AssetMap/New_Data';
import GridData from '@/pages/AssetMap/Grid_Charts';
import { SFC } from '@/types';
import * as S from './Styles';

const MainArea: SFC = ({ className }) => {
    return (
        <S.Container className={className}>
            {
                <Routes>
                    <Route path="/asset-map/home" element={<Home />} />
                    <Route path="/asset-map/upload" element={<Upload />} />
                    <Route
                        path="/asset-map/dataentry"
                        element={<DataEntry />}
                    />
                    <Route path="/asset-map/users" element={<User />} />
                    <Route
                        path="/asset-map/projectmanagement"
                        element={<TaskPage />}
                    />
                    <Route
                        path="/asset-map/realtime"
                        element={<Contradiction />}
                    />
                    <Route
                        path="/asset-map/countermanagement"
                        element={<Options />}
                    />
                    <Route
                        path="/asset-map/contradiction"
                        element={<RealTime />}
                    />
                    <Route
                        path="/asset-map/fixedincomewatch"
                        element={<FixedIncomeFund />}
                    />
                    <Route
                        path="/asset-map/options"
                        element={<CounterManagement />}
                    />
                    <Route path="/asset-map/charts" element={<NewData />} />
                    <Route
                        path="/asset-map/grid_charts"
                        element={<GridData />}
                    />
                    {/* <Route path="*" element={<Navigate to={PATH_DEFAULT} replace />} />
        <Route path={PATH_ART} element={<Art />} />
        <Route path={PATH_CONTRIBUTIONS} element={<Contributions />} />
        <Route path={PATH_CORES} element={<Cores />} />
        <Route path={PATH_EXCHANGE} element={<Exchange />} />
        <Route path={PATH_FEED} element={<Feed />} />
        <Route path={PATH_IA} element={<Ia />} />
        <Route path={PATH_NOTIFICATIONS} element={<Notifications />} />
        <Route path={PATH_PROFILE} element={<Profile />} />
        <Route path={PATH_SHOP} element={<Shop />} />
        <Route path={PATH_COURSES} element={<Courses />} />
        <Route path={PATH_COURSES_SELF} element={<Courses selfCourses={true} />} />
        <Route path={PATH_LECTURES} element={<Lectures />} />
        <Route path={PATH_LECTURES_SELF} element={<Lectures selfLectures={true} />} />
        <Route path={PATH_WALLETS} element={<Wallets />} /> */}
                </Routes>
            }
        </S.Container>
    );
};

export default MainArea;
