import {
    getFinance3monthsData,
    getFinanceData,
    getHR3monthsData,
    getHRData,
    getMan3monthsData,
    getManData,
    getSales3monthsData,
    getSalesData,
} from '@/api/new_data';
import { setHrData } from '@/redux/store/chartsData';
import { setFilteredData } from '@/redux/store/FilterData';
import { setFinanceData } from '@/redux/store/financeData';
import { setManData } from '@/redux/store/manufacturingData';
import { setmanufacturingFilterData } from '@/redux/store/ManufacturingFilter';
import { setSalesData } from '@/redux/store/salesData';
import { setSalesFilteredData } from '@/redux/store/salesFilter';
import { AppDispatch } from '@/types';
import {
    FinancialData,
    HRData,
    ManufacturingData,
    SalesData,
} from '@/types/new_data';
export const fetchHrData = () => async (dispatch: AppDispatch) => {
    try {
        const hrData: HRData[] = await getHRData();
        console.log('Fetched HR Data:', hrData);
        dispatch(setHrData(hrData));
    } catch (error) {
        console.error(error);
        console.error('Error fetching HR data');
    }
};

export const fetchHr3monthsData = () => async (dispatch: AppDispatch) => {
    try {
        const hrData: HRData[] = await getHR3monthsData();
        console.log('Fetched HR Data:', hrData);
        dispatch(setHrData(hrData));
        //TODO setFiltered Data
    } catch (error) {
        console.error(error);
        console.error('Error fetching HR data');
    }
};

export const fetchFinanceData = () => async (dispatch: AppDispatch) => {
    try {
        const financeData: FinancialData[] = await getFinanceData();
        console.log('Fetched FinanceData:', financeData);
        dispatch(setFinanceData(financeData));
    } catch (error) {
        console.error('Error fetching Finance data:', error);
    }
};
export const fetchFinance3monthsData = () => async (dispatch: AppDispatch) => {
    try {
        const financeData: FinancialData[] = await getFinance3monthsData();
        console.log('Fetched FinanceData:', financeData);
        dispatch(setFinanceData(financeData));
        dispatch(setFilteredData(financeData));
    } catch (error) {
        console.error('Error fetching Finance data:', error);
    }
};
export const fetchSalesData = () => async (dispatch: AppDispatch) => {
    try {
        const salesData: SalesData[] = await getSalesData();
        dispatch(setSalesData(salesData));
    } catch (error) {
        console.error(error);
        console.error('Error fetching Sales data');
    }
};

export const fetchSales3monthsData = () => async (dispatch: AppDispatch) => {
    try {
        const salesData: SalesData[] = await getSales3monthsData();
        dispatch(setSalesData(salesData));
        dispatch(setSalesFilteredData(salesData));
    } catch (error) {
        console.error(error);
        console.error('Error fetching Sales data');
    }
};

export const fetchManData = () => async (dispatch: AppDispatch) => {
    try {
        const ManufacturingData: ManufacturingData[] = await getManData();
        console.log('Fetched Manufacturing Data:', ManufacturingData);
        dispatch(setManData(ManufacturingData));
    } catch (error) {
        console.error(error);
        console.error('Error fetching Manufacturing data');
    }
};
export const fetchMan3monthsData = () => async (dispatch: AppDispatch) => {
    try {
        const ManufacturingData: ManufacturingData[] =
            await getMan3monthsData();
        console.log('Fetched Manufacturing Data:', ManufacturingData);
        dispatch(setManData(ManufacturingData));
        dispatch(setmanufacturingFilterData(ManufacturingData));
    } catch (error) {
        console.error(error);
        console.error('Error fetching Manufacturing data');
    }
};
