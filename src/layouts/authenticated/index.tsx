import { AppDispatch, SFC } from '@/types';
import Nav from './Proma/Nav';
import MainArea from './Proma/MainArea';
import AssetMapNav from './AssetMap/Nav';
import AssetMapMainArea from './AssetMap/MainArea';
import * as S from './Styles';
import TopBar from './TopBar';
import background from '@/assets/background.jpg';
import { useLocation } from 'react-router-dom';
import LeftNav from './AssetMap/LeftNav';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBankData } from '@/dispatchers/bankData';
import { fetchBondsData } from '@/dispatchers/bondData';
import { fetchData } from '@/dispatchers/data';
import { fetchDepositeFrame } from '@/dispatchers/depositeFrame';
import { fetchShareFrame } from '@/dispatchers/shareFrame';
import { fetchBondFrame } from '@/dispatchers/bondFrame';
import { fetchCashFlowFrame } from '@/dispatchers/cashflowFrame';
import { fetchBankPerFund } from '@/dispatchers/bankperfund';
import { fetchAllAssets } from '@/dispatchers/allassets';
import { getHistory } from '@/dispatchers/assetUpload';
import MainsArea from './Default/MainArea';
import MainNav from './Default/Nav';

const Authenticated: SFC = () => {
    const location = useLocation();

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        (async () => {
            try {
                await Promise.all([
                    dispatch(fetchBankData()),
                    dispatch(fetchBondsData()),
                    dispatch(fetchData()),
                    dispatch(fetchDepositeFrame()),
                    dispatch(fetchShareFrame()),
                    dispatch(fetchBondFrame()),
                    dispatch(fetchCashFlowFrame()),
                    dispatch(fetchBankPerFund()),
                    dispatch(fetchAllAssets()),
                    dispatch(getHistory()),
                ]);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [dispatch]);

    const renderMain = () => {
        if (location.pathname === '/home') {
            return (
                <S.Area>
                    <MainNav />
                    <MainsArea />
                </S.Area>
            );
        } else if (location.pathname.includes('/proma')) {
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
