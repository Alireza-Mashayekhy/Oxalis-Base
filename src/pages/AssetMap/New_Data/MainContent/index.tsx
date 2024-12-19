import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import LoadingComponent from '@/components/Loading';
import {
    fetchFinanceData,
    fetchHrData,
    fetchManData,
    fetchSalesData,
} from '@/dispatchers/chartsData';
import { getAllAssets } from '@/selectors/state';
import { AppDispatch, SFC } from '@/types';

import EnvironmentLawsAndIssues from './Part3';
import EnvironmentLawsAndIssuespart4 from './Part4';
import EnvironmentLawsAndIssuespart5 from './Part5';
import EnvironmentLawsAndIssuespart6 from './Part6';
import * as S from './Styles';

const MainContent: SFC = () => {
    const {loading} = useSelector(getAllAssets);
    const dispatch = useDispatch<AppDispatch>();

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
