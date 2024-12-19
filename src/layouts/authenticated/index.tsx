import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import background from '@/assets/background.jpg';
import { fetchAllAssets } from '@/dispatchers/allassets';
import { getHistory } from '@/dispatchers/assetUpload';
import { fetchBankData } from '@/dispatchers/bankData';
import { fetchBankPerFund } from '@/dispatchers/bankperfund';
import { fetchBondsData } from '@/dispatchers/bondData';
import { fetchBondFrame } from '@/dispatchers/bondFrame';
import { fetchCashFlowFrame } from '@/dispatchers/cashflowFrame';
import { fetchData } from '@/dispatchers/data';
import { fetchDepositeFrame } from '@/dispatchers/depositeFrame';
import { fetchShareFrame } from '@/dispatchers/shareFrame';
import { AppDispatch, SFC } from '@/types';

import LeftNav from './AssetMap/LeftNav';
import AssetMapMainArea from './AssetMap/MainArea';
import AssetMapNav from './AssetMap/Nav';
import MainsArea from './Default/MainArea';
import MainNav from './Default/Nav';
import MainArea from './Proma/MainArea';
import Nav from './Proma/Nav';
import * as S from './Styles';
import TopBar from './TopBar';

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
        if (location.pathname === '/home' || location.pathname === '/') {
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
