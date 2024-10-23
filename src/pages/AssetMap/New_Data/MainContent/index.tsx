import { SFC } from '@/types';
import { useEffect } from 'react';
import * as S from './Styles';
import GeneralStatus from './Part1';
import OrderStatus from './Part2';
import EnvironmentLawsAndIssues from './Part3';
import EnvironmentLawsAndIssuespart4 from './Part4';
import EnvironmentLawsAndIssuespart5 from './Part5';
import EnvironmentLawsAndIssuespart6 from './Part6';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAssets } from '@/selectors/state';
import LoadingComponent from '@/components/Loading';
import {
    fetchHrData,
    fetchFinanceData,
    fetchSalesData,
    fetchManData,
} from '@/dispatchers/chartsData';
import FilterPannel from '@/pages/AssetMap/New_Data/FiltersColumn/FilterPannel';

const MainContent: SFC = () => {
    const loading = useSelector(getAllAssets).loading;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHrData());
        dispatch(fetchFinanceData());
        dispatch(fetchSalesData());
        dispatch(fetchManData());
    }, [dispatch]);

    return (
        <>
            {loading && <LoadingComponent />}

            <S.Container>
                <EnvironmentLawsAndIssues />
            </S.Container>
            <S.Divider />

            <S.Container>
                <EnvironmentLawsAndIssuespart4 />
            </S.Container>
            <S.Divider />

            <S.Container>
                <EnvironmentLawsAndIssuespart5 />
            </S.Container>
            <S.Divider />

            <S.Container>
                <EnvironmentLawsAndIssuespart6 />
            </S.Container>

            <S.Divider />
        </>
    );
};

export default MainContent;
